const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

const PORT = 3000;
const ACCESS_SECRET_KEY = process.env.ACCESS_SECRET_KEY || 'accesssecretkey';
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY || 'refreshsecretkey';

mongoose.connect('mongodb://127.0.0.1:27017/auth_api', { useNewUrlParser: true, useUnifiedTopology: true });

// User model
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
});

const User = mongoose.model('User', userSchema);

let refreshTokens = [];

// Middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, ACCESS_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = user;
    next();
  });
};

const authorize = (requiredRole) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (userRole !== requiredRole) {
      return res.status(403).json({ message: 'Access forbidden: insufficient privileges' });
    }
    next();
  };
};

// Controllers
const registerUser = async (req, res) => {
  const { username, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials' });

    const accessToken = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      ACCESS_SECRET_KEY,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign({ id: user._id, username: user.username, role: user.role }, REFRESH_SECRET_KEY);

    refreshTokens.push(refreshToken);

    res.json({ message: 'Login successful', accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

// CRUD Operations
let tasks = [{ id: 1, title: 'Task 1', completed: false }];

const getAllTasks = (req, res) => res.json(tasks);
const createTask = (req, res) => {
  const { title, completed } = req.body;
  const newTask = { id: tasks.length + 1, title, completed: !!completed };
  tasks.push(newTask);
  res.status(201).json(newTask);
};
const updateTask = (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const { title, completed } = req.body;
  const task = tasks.find((t) => t.id === taskId);

  if (task) {
    task.title = title ?? task.title;
    task.completed = completed ?? task.completed;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};
const deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  tasks = tasks.filter((t) => t.id !== taskId);
  res.status(204).send();
};

// Routes
const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/tasks', authenticate, getAllTasks);
router.post('/tasks', authenticate, authorize('admin'), createTask);
router.put('/tasks/:id', authenticate, authorize('admin'), updateTask);
router.delete('/tasks/:id', authenticate, authorize('admin'), deleteTask);

app.use('/api', router);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
