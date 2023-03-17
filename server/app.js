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
const getBookandOwner = require("./controller/getBookandOwner");
const getUserBook = require("./controller/getUserBook");
const createRequestController = require("./controller/createRequestController");
const fetchRequestController = require("./controller/fetchRequestController");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.post("/register",registerUser)
app.post("/login",loginUser)
app.get("/books",authMiddleware,getAllBooksController)
app.get("/findbooks", authMiddleware, findBooksController);
app.post("/addbook", authMiddleware, addBookController);
app.get("/userbook", authMiddleware, getBookandOwner);
app.get("/book", authMiddleware, getUserBook);
app.post("/requestBook", authMiddleware, createRequestController);
app.get("/requests", authMiddleware, fetchRequestController
);

app.listen(process.env.PORT || "8080",()=>{
    console.log("server started")
})