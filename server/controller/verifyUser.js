const User = require("../model/Users");
module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    if (id !== null) {
      await User.findByIdAndUpdate(id, { accountVerified: true });
      res.status(200).send("success");
    }
  } catch (err) {
    return res.status(500).json("something went wrong");
  }
};
