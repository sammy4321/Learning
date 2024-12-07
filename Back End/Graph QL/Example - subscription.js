const { ApolloServer, gql, PubSub } = require('apollo-server');

// ===================== PubSub for Subscriptions =====================
const pubsub = new PubSub();
const TASK_ADDED = 'TASK_ADDED'; // Event name for subscriptions

// ===================== Schema =====================
const typeDefs = gql`
  type Task {
    id: ID!
    title: String!
    completed: Boolean!
  }

  # Queries for fetching data
  type Query {
    getTasks: [Task!]!
  }

  # Mutations for modifying data
  type Mutation {
    addTask(title: String!): Task!
  }

  # Subscriptions for real-time updates
  type Subscription {
    taskAdded: Task!
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
  },
  Mutation: {
    addTask: (_, { title }) => {
      const newTask = { id: String(tasks.length + 1), title, completed: false };
      tasks.push(newTask);

      // Publish the new task for subscribers
      pubsub.publish(TASK_ADDED, { taskAdded: newTask });

      return newTask;
    },
  },
  Subscription: {
    taskAdded: {
      subscribe: () => pubsub.asyncIterator([TASK_ADDED]),
    },
  },
};

// ===================== Server Setup =====================
const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: {
    path: '/subscriptions',
  },
});

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});
