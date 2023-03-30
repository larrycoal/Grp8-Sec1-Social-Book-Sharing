const User = require("../model/Users");
const PDFGenerator = require("../utils");

module.exports = async (req, res) => {
    const pdfGenerator = new PDFGenerator
    const {user} = req.query
    const newUser = JSON.parse(user);
    if (newUser.subscribe) {
      pdfGenerator.generateInvoice(res, newUser, "receipt");
    }
  
};
