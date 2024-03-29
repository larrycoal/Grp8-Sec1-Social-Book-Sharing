const Users = require("../model/Users");
const sendMail = require("../utils/verificationMailHandler");

module.exports = async (req, res) => {
  const {
    email,
    password,
    province,
    city,
    postalCode,
    phonenumber,
    gender,
    dob,
    firstname,
    lastname,
  } = req.body;
  try {
    const existingEmail = await Users.findOne({ email });
    if (existingEmail) {
      return res.status(401).send("User with this email already exist");
    }
    let newUser = {
      email,
      firstName: firstname,
      lastName: lastname,
      password,
      phonenumber,
      gender,
      dob,
      province,
      city,
      postalCode,
    };
    const createdUser = await Users.create(newUser);
    sendMail(createdUser)
    return res.status(200).send("succesful");
  } catch (err) {
    console.log(err);
    // res.status(400).send(err);
  }
};
