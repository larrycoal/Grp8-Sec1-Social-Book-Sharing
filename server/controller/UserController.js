const User = require("../model/Users");
const ProfileImage = require("../model/ProfileImage")

const SaveUserDetails = async (req, res) => {
    try {
        await User.create(req.body);
        return res.status(200).send("succesful");
    } catch (err) {
        console.log(err);
    }
};

const FetchUserDetails = async (req, res) => {
    try {
        await User.findById(req.params.userid).exec((err, UserDetailsData) => {
            if (!UserDetailsData) {
                return res.status(404).json({ "message": "Details Not Found  !" })
            } else if (err) {
                return res.status(404).json(err)
            }
            ProfileImage.find({ userid: req.params.userid }).exec((err, ProfileImageDetails) => {
                if (ProfileImageDetails.length > 0) {
                    console.log(ProfileImageDetails.length, 'ProfileImageDetails')
                    const imageDetails = {
                        profileImage: ProfileImageDetails[0].image,
                        firstName: UserDetailsData.firstName,
                        lastName: UserDetailsData.lastName,
                        dob: UserDetailsData.dob,
                        email: UserDetailsData.email,
                        password: UserDetailsData.password,
                        city: UserDetailsData.city,
                        province: UserDetailsData.province,
                        postalCode: UserDetailsData.postalCode,
                        phonenumber: UserDetailsData.phonenumber,
                        gender: UserDetailsData.gender,
                        country: UserDetailsData.country
                    }
                    return res.status(200).json(imageDetails)
                } else if (err) {
                    return res.status(200).json(UserDetailsData)
                } else {
                    return res.status(200).json(UserDetailsData)
                }
            })
        })

    } catch (err) {
        console.log(err);
    }
};

const UpdateUserDetails = async (req, res) => {
    try {
        const updatedDetails = await User.findOneAndUpdate({ _id: req.params.userid }, req.body).then(resultDetails => { return resultDetails; })
        ProfileImage.findOneAndUpdate({ userid: req.params.userid }, { userid: req.params.userid, image: req.body.profileImage }).then(resultDetails => { return resultDetails; })
        return res.status(200).json(updatedDetails)
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    SaveUserDetails,
    FetchUserDetails,
    UpdateUserDetails
}
