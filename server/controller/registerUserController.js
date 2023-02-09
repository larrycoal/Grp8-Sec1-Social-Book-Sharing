const Users = require("../model/Users");

module.exports = async (req, res) => {
  const { email, password, confirmPassword,address,phonenumber,gender,age } = req.body;
  try {
    if (password === confirmPassword) {
      let newUser = {
        email,
        firstname,
        lastname,
        address,
        password,
        phonenumber,
        gender,
        age
      };
      await Users.create(newUser);
      res.status(200);
    } else {
      req.flash("registerPasswordError", "Password do not match");
      res.status(403);
    }
  } catch (err) {
    console.log(err);
    res.status(400);
  }
};
