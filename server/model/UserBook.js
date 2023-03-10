const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserBooksSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
});

const UserBook = mongoose.model("UserBook", UserBooksSchema);
module.exports = UserBook;
