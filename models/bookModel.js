const mongoose = require('mongoose');

const goalBook = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
});

module.exports = mongoose.model('book', goalBook);