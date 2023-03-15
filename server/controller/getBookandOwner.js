const UserBooks = require("../model/UserBook");
const user = require("../model/Users")
module.exports = async (req, res) => {
  const { bookId } = req.query;

  let userbook = {};
  try {
    const resp = await UserBooks.find({ bookId })
      .populate("userId")
      .populate("bookId")
      .exec();
    if (resp) {
      const bookTemp = resp[0].bookId;
      const userTemp = resp.map((r) => {
        const { userId } = r;
        return {
          firstName: userId.firstName,
          lastName: userId.lastName,
          address: userId.address,
          phoneNumber: userId.phoneNumber,
          gender: userId.gender,
          email: userId.email,
          id:userId._id
        };
      });
      userbook = {
        book: bookTemp,
        owners: userTemp,
      };
    }
  } catch (err) {
    return res.status(500).json("something went wrong");
  }
  return res.status(200).json(userbook);
};
