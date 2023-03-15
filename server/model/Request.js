const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestBooksSchema = new Schema({
  requesterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  status: {
    type: String,
    default:"Pending"
  },
});

const RequestBook = mongoose.model("RequestBook", RequestBooksSchema);
module.exports = RequestBook;
