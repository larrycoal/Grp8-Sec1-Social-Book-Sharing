const jwt = require("jsonwebtoken");

const verifyMiddleware =(req,res,next)=>{
 jwt.verify( process.env.ACCESS_TOKEN_SECRET, (err, user) => {
   if (err) return res.sendStatus(403);
   req.user = user;
   next();
 });
}
module.exports = verifyMiddleware
