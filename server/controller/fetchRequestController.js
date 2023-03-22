const RequestBook = require("../model/Request");
const User = require("../model/Users");

module.exports = async (req, res) => {
  const userTemp = await User.find({ email: req.user.email });
  const { _id } = userTemp[0];
  let combinedRequest = [];
  try {
    const incomingRequest = await RequestBook.find({ ownerId: _id })
      .populate("requesterId")
      .populate("bookId");
    const outgoingRequest = await RequestBook.find({
      requesterId: _id,
    })
      .populate("ownerId")
      .populate("bookId");

    if (incomingRequest.length > 0) {
      const temp = incomingRequest.map((request) => {
        return {
          firstName: request.requesterId?.firstName,
          lastName: request.requesterId?.lastName,
          email: request.requesterId?.email,
          location: request.requesterId?.city,
          gender: request.requesterId?.gender,
          book: request.bookId?.title,
          status: request.status,
          type: "Incoming",
        };
      });
      combinedRequest = [...temp];
    }

    if (outgoingRequest) {
      const temp = outgoingRequest.map((request) => {
        return {
          firstName: request.ownerId?.firstName,
          lastName: request.ownerId?.lastName,
          email: request.ownerId?.email,
          location: request.ownerId?.city,
          gender: request.ownerId?.gender,
          book: request.bookId?.title,
          status: request.status,
          type: "Outgoing",
        };
      });
      combinedRequest = [...combinedRequest,...temp]
    }
    return res.status(200).json(combinedRequest);
  } catch (error) {
    console.log(error);
  }
};
