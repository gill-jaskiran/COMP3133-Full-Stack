const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
// import Apollo Server
const { ApolloServer } = require('apollo-server-express');

//Store sensative information to env variables
dotenv.config();

//mongoDB Atlas connection string
const mongodb_atlas_url = process.env.MONGODB_URL;

// TODO: Replace you Connection String here
const connectDB = async () => {
  try {
    await mongoose.connect(mongodb_atlas_url);
    console.log('MongoDB connection successful');
  } catch (error) {
    console.error(`MongoDB connection has failed: ${error.message}`);
  }
};

//Define Appolo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//Define Express Server
const app = express();
app.use(express.json());
app.use('*', cors());

//Add Express app as middleware to Apollo Server
server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT || 4000}${server.graphqlPath}`);
  connectDB();
});
