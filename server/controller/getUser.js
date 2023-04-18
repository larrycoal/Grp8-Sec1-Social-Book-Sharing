const UserBooks = require("../model/UserBook");
const User = require("../model/Users");
module.exports = async (req, res) => {
  try {
    const currentUser = await User.find({ _id: req.user.id });
    const userBook = await UserBooks.find({ userId: req.user.id })
      .populate("bookId")
      .exec();
    if (currentUser && userBook) {
        const userTemp = {
          firstName: currentUser[0].firstName,
          lastName: currentUser[0].lastName,
          email: currentUser[0].email,
          city:currentUser[0].city,
          province:currentUser[0].province,
          phoneNumber:currentUser[0].phonenumber,
          gender:currentUser[0].gender,
          membership:currentUser[0].membership,
          subscribe:currentUser[0].subscriptionStatus === "Subscribed" ? true : false,
          bookCount:userBook.length,
          borrowedBooks:0,
          pendingRequest:0,
          accountVerified:currentUser[0].accountVerified
        };
      return res.status(200).json(userTemp);
    }
  } catch (err) {
    return res.status(500).json("something went wrong");
  }
};
