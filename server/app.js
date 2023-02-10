const express = require("express")
require("./model/db");
const bodyParser = require("body-parser");
const app = express()

const registerUser = require("./controller/registerUserController");
const loginUser = require("./controller/loginController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/register",registerUser)
app.post("/login",loginUser)
app.listen(process.env.PORT || "8080",()=>{
    console.log("server started")
})