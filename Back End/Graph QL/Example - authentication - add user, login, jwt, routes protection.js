const { ApolloServer, gql } = require('apollo-server');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Secret keys for JWT
const ACCESS_TOKEN_SECRET = 'youraccesstokensecret';

// In-memory data storage
let users = [];
let tasks = [
  { id: '1', title: 'Task 1', completed: false },
  { id: '2', title: 'Task 2', completed: true },
];

// ===================== Schema =====================
const typeDefs = gql`
  # Define a User and Task type
  type User {
    id: ID!
    username: String!
    role: String!
  }

  type Task {
    id: ID!
    title: String!
    completed: Boolean!
  }

  # Authentication tokens
  type AuthPayload {
    accessToken: String!
  }

  # Queries for fetching data
  type Query {
    getTasks: [Task!]!       # All users can access this
    getUsers: [User!]!       # Only admins can access this
  }

  # Mutations for modifying data
  type Mutation {
    register(username: String!, password: String!, role: String!): User! # Register a new user
    login(username: String!, password: String!): AuthPayload!            # Login and get JWT
    addTask(title: String!): Task!                                       # Protected: Any logged-in user
    deleteTask(id: ID!): Task!                                           # Protected: Admin only
  }
`;

const resolvers = {
  Query: {
    getTasks: () => tasks,
    getUsers: (_, __, { user }) => {
      if (user.role !== 'admin') throw new Error('Access denied');
      return users;
    },
  },
  Mutation: {
    register: async (_, { username, password, role }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {
        id: String(users.length + 1),
        username,
        password: hashedPassword,
        role,
      };
      users.push(newUser);
      return { id: newUser.id, username: newUser.username, role: newUser.role };
    },
    login: async (_, { username, password }) => {
      const user = users.find((u) => u.username === username);
      if (!user) throw new Error('User not found');
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) throw new Error('Invalid credentials');

      const accessToken = jwt.sign({ id: user.id, username: user.username, role: user.role }, ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
      });
      return { accessToken };
    },
    addTask: (_, { title }, { user }) => {
      if (!user) throw new Error('Unauthorized');
      const newTask = { id: String(tasks.length + 1), title, completed: false };
      tasks.push(newTask);
      return newTask;
    },
    deleteTask: (_, { id }, { user }) => {
      if (user.role !== 'admin') throw new Error('Access denied');
      const taskIndex = tasks.findIndex((t) => t.id === id);
      if (taskIndex === -1) throw new Error('Task not found');
      return tasks.splice(taskIndex, 1)[0];
    },
  },
};

// ===================== Context for Authentication =====================
const getUserFromToken = (token) => {
  try {
    return jwt.verify(token, ACCESS_TOKEN_SECRET);
  } catch (err) {
    return null;
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const user = getUserFromToken(token.replace('Bearer ', ''));
    return { user };
  },
});

// ===================== Start Server =====================
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
