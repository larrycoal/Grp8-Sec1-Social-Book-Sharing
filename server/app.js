const express = require("express")
const cors = require("cors")
require("./model/db");
const bodyParser = require("body-parser");
const app = express()

const registerUser = require("./controller/registerUserController");
const loginUser = require("./controller/loginController");
const getAllBooksController = require("./controller/getAllBooksController");
const authMiddleware  = require("./middlewares/authMiddleware");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.post("/register",registerUser)
app.post("/login",loginUser)
app.get("/books",authMiddleware,getAllBooksController)
app.listen(process.env.PORT || "8080",()=>{
    console.log("server started")
})