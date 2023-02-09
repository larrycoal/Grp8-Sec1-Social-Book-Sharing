const express = require("express")
require("./model/db");
const registerUser = require("./controller/registerUserController")
const app = express()



app.post("/register",registerUser)
app.listen(process.env.PORT || "3001",()=>{
    console.log("server started")
})