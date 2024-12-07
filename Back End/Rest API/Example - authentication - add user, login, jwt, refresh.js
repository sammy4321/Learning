const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Initialize app and environment variables
dotenv.config();
const app = express();
app.use(express.json());

const PORT = 3000;
const ACCESS_SECRET_KEY = process.env.ACCESS_SECRET_KEY || 'accesssecretkey';
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY || 'refreshsecretkey';

// ===================== Database Connection =====================
mongoose
  .connect('mongodb://127.0.0.1:27017/auth_api', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// ===================== User Model =====================
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// ===================== Token Storage (for refresh tokens) =====================
let refreshTokens = [];

// ===================== Middleware =====================
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, ACCESS_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = user; // Attach decoded user data to request
    next();
  });
};

// ===================== Controllers =====================

// **Register a new user**
const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
};

// **Login and get tokens**
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials' });

    // Generate tokens
    const accessToken = jwt.sign({ id: user._id, username: user.username }, ACCESS_SECRET_KEY, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user._id, username: user.username }, REFRESH_SECRET_KEY);

    // Store refresh token
    refreshTokens.push(refreshToken);

    res.json({ message: 'Login successful', accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

// **Refresh expired access token**
const refreshAccessToken = (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ message: 'Refresh token required' });
  if (!refreshTokens.includes(refreshToken)) return res.status(403).json({ message: 'Invalid refresh token' });

  jwt.verify(refreshToken, REFRESH_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid refresh token' });

    const accessToken = jwt.sign({ id: user.id, username: user.username }, ACCESS_SECRET_KEY, { expiresIn: '15m' });
    res.json({ accessToken });
  });
};

// **Logout and invalidate refresh token**
const logoutUser = (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json({ message: 'Logged out successfully' });
};

// ===================== CRUD Operations =====================
let tasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
];

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
    task.title = title !== undefined ? title : task.title;
    task.completed = completed !== undefined ? completed : task.completed;
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

// ===================== Routes =====================
const router = express.Router();

// Authentication routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/refresh', refreshAccessToken);
router.post('/logout', logoutUser);

// Task CRUD routes (protected with authentication)
router.get('/tasks', authenticate, getAllTasks);
router.post('/tasks', authenticate, createTask);
router.put('/tasks/:id', authenticate, updateTask);
router.delete('/tasks/:id', authenticate, deleteTask);

app.use('/api', router);

// ===================== Start Server =====================
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
