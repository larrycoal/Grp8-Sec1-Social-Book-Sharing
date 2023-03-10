require("dotenv").config();
const Books = require("../model/Books");
const axios = require("axios");
const User = require("../model/Users");
const UserBook = require("../model/UserBook");
module.exports = async (req, res) => {
  const { title, type, id } = req.body;
  console.log("title",req.body);
  if(!title || !id) return res.status(403).json("title or id required")
  let bookId = null;
  let user = await User.findOne({ email: req.user.email });
  try {
    let resp = await Books.findOne({ title });
    console.log(resp,title)
   if (resp == null) {
    console.log("in")
      let temp = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
        const bookData = {
        title: temp.data.volumeInfo.title,
        imgthumbnail: temp.data.volumeInfo.imageLinks.thumbnail,
        img: temp.data.volumeInfo.imageLinks.small,
        description: temp.data.volumeInfo.description,
        authors: temp.data.volumeInfo.authors,
      };
      const addedBook = await Books.create(bookData);
      if(addedBook){
      bookId = addedBook._id;
      }
      console.log("got here illegally", addedBook);
    } else {
      console.log("already there");
      bookId =resp._id;
    }

    const tempData = {
      bookId,
      userId: user?._id,
      isAvailable: true,
    };
    const bookaddedtouser =await UserBook.create(tempData)
    console.log("final data", bookaddedtouser);
    return res.status(200).json(req.user);
  } catch (err) {
    return res.status(400).json("Something went wrong. Try again later");
  }
};
