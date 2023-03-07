const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const BooksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imgthumbnail: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
  },
});

const Book = mongoose.model("Book", BooksSchema);
module.exports = Book;
