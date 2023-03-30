const RequestBook = require("../model/Request");

module.exports = async (req, res) => {
  const { requestId } = req.body;
  try {
    const resp = await RequestBook.findByIdAndUpdate(requestId,{status:"Approved"});
  //TODO: set isAvailable to false on UserBook
    res.status(200).send("Request Approved");
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};
