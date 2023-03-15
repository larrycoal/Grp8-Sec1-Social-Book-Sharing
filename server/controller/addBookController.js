require("dotenv").config();
const Books = require("../model/Books");
const axios = require("axios");
const User = require("../model/Users");
const UserBook = require("../model/UserBook");
module.exports = async (req, res) => {
  const { title, type, id } = req.body;
  if (!title || !id) return res.status(403).json("title and id required");
  let bookId = null;
  let user = await User.findOne({ email: req.user.email });
  try {
    let resp = await Books.findOne({ title });
    console.log(resp, title);
    if (resp == null) {
      let temp = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const desc = temp.data.volumeInfo.description.replace(/<[^>]*>/g, "");
      const bookData = {
        title: temp.data.volumeInfo.title,
        image: temp.data.volumeInfo.imageLinks.thumbnail,
        description: desc,
        authors: temp.data.volumeInfo.authors,
        genre: temp.data.volumeInfo.categories[0].split("/").pop(),
        pageCount: temp.data.volumeInfo.pageCount,
      };

      const addedBook = await Books.create(bookData);
      if (addedBook) {
        bookId = addedBook._id;
      }
    } else {
      bookId = resp._id;
    }

    const tempData = {
      bookId,
      userId: user?._id,
      isAvailable: true,
    };
    const bookaddedtouser = await UserBook.create(tempData);
    return res.status(200).json(req.user);
  } catch (err) {
    console.log(err)
    return res.status(400).json("Something went wrong. Try again later");
  }
};
