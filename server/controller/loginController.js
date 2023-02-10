const UsersData = require("../model/Users");
const bcrypt = require("bcrypt");

module.exports = (req, res) => {
  const { username, password } = req.body;

  UsersData.findOne({ email: username }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          res.status(200).send(JSON.stringify(user));
        } else {
          res.status(401).send("login failed. Username or password incorrect");
        }
      });
    } else {
      res.status(400).send("login failed. Username or password incorrect");
    }
  });
};
