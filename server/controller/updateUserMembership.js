const User = require("../model/Users");

module.exports = async (req, res) => {
   try {
    const resp = await User.findByIdAndUpdate({_id:req.user.id},{membership:"Gold",subscriptionStatus:"Subscribed"})
    if(resp){
        return res.status(200).json("Subscribed successfully")
    }
   } catch (error) {
    return res.status(500)
   }
};
