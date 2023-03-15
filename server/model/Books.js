const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const BooksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
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
  genre:{
    type:String
  },
  pageCount:{
    type:Number
  }
});

const Book = mongoose.model("Book", BooksSchema);
module.exports = Book;
