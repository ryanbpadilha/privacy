const mongoose = require('mongoose');
const { Schema } = mongoose;

const Post = new Schema ({
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
});

module.exports = mongoose.model('/posts', Post);