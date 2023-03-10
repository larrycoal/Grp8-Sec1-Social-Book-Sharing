const UserBooks = require("../model/UserBook");

module.exports = async (req, res) => {
  const { bookId } = req.query;
  const userbook = await UserBooks.find({ bookId }).populate("User").exec();
  console.log(userbook);
  return res.status(200).json(userbook);
};
