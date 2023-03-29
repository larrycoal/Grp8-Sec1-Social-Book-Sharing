require("dotenv").config();
const UsersData = require("../model/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = (req, res) => {
  const { username, password } = req.body;
  UsersData.findOne({ email: username }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          const newUserData = {
            id:user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            email: user.email,
            address: user.address,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            membership:user.membership,
            subscribed:user.subscriptionStatus === "Subscribed"? true : false
          };
          const accesstoken = jwt.sign(
            newUserData,
            process.env.ACCESS_TOKEN_SECRET
          );
          res.status(200).json({ accesstoken, newUserData });
        } else {
          res.status(401).send("login failed. Username or password incorrect");
        }
      });
    } else {
      res.status(400).send("login failed. Username or password incorrect");
    }
  });
};
