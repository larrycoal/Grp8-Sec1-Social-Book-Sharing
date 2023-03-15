const UserBooks = require("../model/UserBook");
const User = require("../model/Users")
module.exports = async (req, res) => {
  const userTemp = await User.find({email:req.user.email})
  const {_id} = userTemp[0]
  try {
    const resp = await UserBooks.find({userId: _id }).populate("bookId").exec();
    if (resp) {
      return res.status(200).json(resp);
    }
  } catch (err) {
    return res.status(500).json("something went wrong");
  }
};
