require("dotenv").config();
const UsersData = require("../model/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = (req, res) => {
  const { username, password } = req.body;
  console.log("in login api");
  UsersData.findOne({ email: username }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          const newUserData = {
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            email: user.email,
            address: user.address,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
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
