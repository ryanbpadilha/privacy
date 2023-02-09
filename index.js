require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const posts = require('./routes/posts');

const app = express();
const db = mongoose.connect;

const PORT = process.env.PORT;
const URI = process.env.URI;

async function connect() {
  mongoose.set('strictQuery', true);
  try {
    db(URI);
    console.log('Successfully connected to the MongoDB!')
  } catch (error) {
    console.error(error);
  }
};

connect();
app.listen(PORT, console.log(`Listen to the port: ${PORT}`));
app.use(express.json());
app.use('/posts', posts);