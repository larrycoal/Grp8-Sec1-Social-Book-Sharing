const Users = require("../model/Users");

module.exports = async (req, res) => {
  const {
    email,
    password,
    confirmpassword,
    address,
    phonenumber,
    gender,
    age,
    firstname,
    lastname,
  } = req.body;
  try {
    if (password === confirmpassword) {
      let newUser = {
        email,
        firstName:firstname,
        lastName:lastname,
        address,
        password,
        phonenumber,
        gender,
        age
      };
      await Users.create(newUser);
      res.status(200).send("succesful");
    } else {
      console.log("registerPasswordError", "Password do not match");
      res.status(403).send("Password do not match");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
