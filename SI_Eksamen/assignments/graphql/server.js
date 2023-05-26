const { ApolloServer, gql } = require("apollo-server");
const crypto = require("crypto");

// Sample data
const users = [
  { id: "1", email: "user1@example.com", password: "password1" },
  { id: "2", email: "user2@example.com", password: "password2" },
];

const blogs = [
  {
    id: "1",
    title: "Blog 1",
    description: "Description 1",
    completed: false,
    ownerId: "1",
  },
  {
    id: "2",
    title: "Blog 2",
    description: "Description 2",
    completed: true,
    ownerId: "2",
  },
];

// GraphQL schema
const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }

  type User {
    id: ID!
    email: String!
    password: String!
  }

  type Blog {
    id: ID!
    title: String!
    description: String!
    completed: Boolean!
    ownerId: ID!
  }

  type BlogResult {
    errors: [String]
    blog: Blog
  }

  type BlogsResult {
    errors: [String]
    blogs: [Blog]
  }

  type InsertResult {
    errors: [String]
    id: ID
  }

  type TokenResult {
    errors: [String]
    token: String
  }

  type Query {
    blogs: BlogsResult!
    blog(blogId: ID!): BlogResult!
  }

  type Mutation {
    createBlog(title: String!, description: String!): InsertResult!
    createUser(email: String!, password: String!): InsertResult!
    createToken(email: String!, password: String!): TokenResult!
  }

  type Subscription {
    reviewBlog(token: String!): InsertResult!
  }
`;

// Resolver functions
const resolvers = {
  Query: {
    blogs: () => {
      return { blogs };
    },
    blog: (parent, args) => {
      const { blogId } = args;
      const blog = blogs.find((b) => b.id === blogId);
      if (!blog) {
        return { errors: ["Blog not found"] };
      }
      return { blog };
    },
  },
  Mutation: {
    createBlog: (parent, args) => {
      const { title, description } = args;
      const id = String(blogs.length + 1);
      const ownerId = "1"; // For simplicity, assuming the owner is always the first user
      const newBlog = { id, title, description, completed: false, ownerId };
      blogs.push(newBlog);
      return { id };
    },
    createUser: (parent, args) => {
      const { email, password } = args;
      const id = String(users.length + 1);
      const newUser = { id, email, password };
      users.push(newUser);
      return { id };
    },
    createToken: (parent, args) => {
      const { email, password } = args;

      // Generate random token
      const token = crypto.randomBytes(32).toString("hex");

      return {
        errors: [],
        token: token,
      };
    },
  },
};

// Create an Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`GraphQL server running at ${url}`);
});
