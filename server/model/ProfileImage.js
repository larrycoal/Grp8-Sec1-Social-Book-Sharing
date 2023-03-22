const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


const ProfileImageSchema = new Schema({
  userid: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  }
});

const ProfileImage = mongoose.model("ProfileImage", ProfileImageSchema, "ProfileImages");
module.exports = ProfileImage;
