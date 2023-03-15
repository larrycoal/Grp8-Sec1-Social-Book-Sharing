const RequestBook = require("../model/Request");
const User = require("../model/Users");

module.exports = async (req, res) => {
  const { ownerId,bookId } = req.body;
    const userTemp = await User.find({ email: req.user.email });
    const { _id } = userTemp[0];

  try {
    const resp = await RequestBook.create({ requesterId:_id, ownerId,bookId });
    if (resp) {
      return res.status(200).json(resp);
    }
  } catch (err) {
    return res.status(500).json("something went wrong");
  }
};
