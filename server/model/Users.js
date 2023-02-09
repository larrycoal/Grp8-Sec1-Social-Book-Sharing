const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


const UsersSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});
UsersSchema.pre("save",(next)=>{
  const user = this
  bcrypt.hash(user.password,10,(err,hash)=>{
    user.password = hash;
    next()
  })
})
const User = mongoose.model("User", UsersSchema, "Users");
module.exports = User;
