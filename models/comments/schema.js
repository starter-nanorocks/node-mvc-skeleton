const mongoose = require('../../db/init');

const Comments = new mongoose.Schema({
  name: { type: String, default: "hahaha" },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  buff: Buffer,
});

module.exports = Comments;
