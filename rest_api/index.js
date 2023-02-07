require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./router/routes.js');

const app = express();
const db = mongoose.connect;

const PORT = process.env.PORT;
const DB = process.env.DB;

async function connect() {
  mongoose.set('strictQuery', true);
  try {
    db(DB);
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error(error);
  };
};

connect();
app.listen(PORT, console.log(`Listen port: ${PORT}`));
app.use('/posts', router);