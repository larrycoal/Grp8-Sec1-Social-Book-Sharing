const Books = require("../model/Books");

module.exports = async (req, res) => {
   const allbooks = await Books.find()
  return res.status(200).json(allbooks);
};
