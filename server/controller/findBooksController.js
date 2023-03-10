require("dotenv").config();
const Books = require("../model/Books");
const axios = require("axios")
module.exports = async(req, res) => {
  const { title, type } = req.query;
  console.log(title)
  try{
       let temp = await axios.get(
         `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${process.env.GOOGLE_KEY}`
       );
       let resp=temp.data.items.map(item=>{
        return {
            id:item.id,
            title:item.volumeInfo.title,
            img:item?.volumeInfo?.imageLinks?.thumbnail,
            authors:item?.volumeInfo?.authors
        }
      })
    return res.status(200).json(resp);
  } catch (err) {
    return res.status(400).json("Something went wrong. Try again later");
  }
};
