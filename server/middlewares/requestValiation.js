const request = require("../model/Request")
const User = require("../model/Users");

const requestValidation = async (req,res,next)=>{
      const { ownerId, bookId } = req.body;
      const userTemp = await User.find({ email: req.user.email });
      const { _id } = userTemp[0];
      try {
        const resp = await request.find({requesterId:_id,ownerId,bookId})
        if(resp.length>0){
        return res.status(403).send("Request has already been made")
        }
        next()
      } catch (error) {
        return res.status(500).send("server error")
      }
}

module.exports = requestValidation