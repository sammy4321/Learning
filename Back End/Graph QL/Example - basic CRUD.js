const { ApolloServer, gql } = require('apollo-server');

// ===================== Schema =====================
const typeDefs = gql`
  # Define a Task type
  type Task {
    id: ID!
    title: String!
    completed: Boolean!
  }

  # Queries for fetching data
  type Query {
    getTasks: [Task!]!      # Fetch all tasks
    getTask(id: ID!): Task  # Fetch a task by ID
  }

  # Mutations for modifying data
  type Mutation {
    addTask(title: String!): Task!                 # Add a new task
    updateTask(id: ID!, title: String, completed: Boolean): Task! # Update an existing task
    deleteTask(id: ID!): Task!                     # Delete a task
  }
`;

// ===================== Resolvers =====================
let tasks = [
  { id: '1', title: 'Task 1', completed: false },
  { id: '2', title: 'Task 2', completed: true },
];

const resolvers = {
  Query: {
    getTasks: () => tasks,
    getTask: (_, { id }) => tasks.find((task) => task.id === id),
  },
  Mutation: {
    addTask: (_, { title }) => {
      const newTask = { id: String(tasks.length + 1), title, completed: false };
      tasks.push(newTask);
      return newTask;
    },
    updateTask: (_, { id, title, completed }) => {
      const task = tasks.find((task) => task.id === id);
      if (!task) throw new Error('Task not found');
      if (title !== undefined) task.title = title;
      if (completed !== undefined) task.completed = completed;
      return task;
    },
    deleteTask: (_, { id }) => {
      const taskIndex = tasks.findIndex((task) => task.id === id);
      if (taskIndex === -1) throw new Error('Task not found');
      return tasks.splice(taskIndex, 1)[0];
    },
  },
};

// ===================== Server Setup =====================
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
