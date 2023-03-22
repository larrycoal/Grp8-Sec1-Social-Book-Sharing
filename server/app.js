const express = require("express")
const cors = require("cors")
require("./model/db");
const bodyParser = require("body-parser");
const app = express()

const registerUser = require("./controller/registerUserController");
const loginUser = require("./controller/loginController");
const getAllBooksController = require("./controller/getAllBooksController");
const authMiddleware  = require("./middlewares/authMiddleware");
const findBooksController = require("./controller/findBooksController");
const addBookController = require("./controller/addBookController");
const PersonalDetailsController = require("./controller/UserController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.post("/register",registerUser)
app.post("/login",loginUser)
app.get("/books",authMiddleware,getAllBooksController)
app.get("/findbooks", authMiddleware, findBooksController);
app.post("/addbook", authMiddleware, addBookController);
app.post("/personaldetails", authMiddleware, PersonalDetailsController.SaveUserDetails)
app.get("/personaldetails/:userid", authMiddleware, PersonalDetailsController.FetchUserDetails)
app.put("/personaldetails/:userid", authMiddleware, PersonalDetailsController.UpdateUserDetails)

app.listen(process.env.PORT || "8080",()=>{
    console.log("server started")
})