import React, { useState, useEffect } from 'react';
import api from "../../api";
import "./profile.scss"

const getParsedToken = (TokenString) => {
    const token = TokenString
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            })
            .join('')
    )
    return JSON.parse(jsonPayload)
}

const index = () => {
    const [imageBinary, setimageBinary] = useState('')
    const [userId, setUserId] = useState(localStorage.getItem("token") ? Object.keys(getParsedToken(localStorage.getItem("token"))).includes("userid") ? getParsedToken(localStorage.getItem("token")).userid : "" : "")
    const [city, setCity] = useState('')
    const [country, setcountry] = useState('')
    const [dob, setdob] = useState('')
    const [firstName, setfirstName] = useState('')
    const [gender, setgender] = useState('')
    const [lastName, setlastName] = useState('')
    const [province, setprovince] = useState('')
    const [isDetailsAvailable, setisDetailsAvailable] = useState(false)

    useEffect(() => {
        fetchDetails()
    }, [])

    const fetchDetails = async () => {
        const response = await api.fetchPersonalDetails({ userId });
        if (response.ok && response.data) {
            const data = response.data
            setCity(data.city)
            setcountry(data.country)
            setdob(data.dob)
            setfirstName(data.firstName)
            setlastName(data.lastName)
            setgender(data.gender)
            setprovince(data.province)
            setimageBinary(data.profileImage)
            setisDetailsAvailable(true)
        }
    }

    const SavePersonalDetails = async (event) => {
        event.preventDefault()
        if (imageBinary) {
            const requestPayload = {
                firstName: event.target.elements.firstname.value,
                lastName: event.target.elements.lastname.value,
                gender: event.target.elements.gender.value,
                dob: event.target.elements.dob.value,
                country: event.target.elements.country.value,
                province: event.target.elements.province.value,
                city: event.target.elements.city.value,
                profileImage: imageBinary,
                userId: getParsedToken(localStorage.getItem("token")).userid
            }
            let resp = null
            if (isDetailsAvailable) {
                resp = await api.updatePersonalDetails(requestPayload);
            } else {
                resp = await api.savePersonalDetails(requestPayload);
            }
            if (resp.ok) {
                console.log(resp);
                if (isDetailsAvailable) {
                    alert("Personal Details Updated Successfully !");
                    window.location.reload();
                } else {
                    alert("Personal Details Saved Successfully !");
                    window.location.reload();
                }
            }
        } else {
            alert("Please upload image to save personal details !")
        }

    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }



    const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setimageBinary(base64)
    }

    return (
        <div className="container-fluid p-5">
            <div class="">
                <h3>Personal Details</h3>
                <form onSubmit={(event) => SavePersonalDetails(event)}>
                    <div className='row'>
                        <div class="profile-pic">
                            <label class="-label" for="file">
                                <span class="glyphicon glyphicon-camera"></span>
                                <span>Change Image</span>
                            </label>
                            <input id="file" type="file" onChange={handleFileRead} />
                            <img src={imageBinary ? imageBinary : 'https://www.nicepng.com/png/detail/514-5146455_premium-home-loan-icon-download-in-svg-png.png'} id="output" width="200" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <label for="firstname">First Name</label>
                            <input type="text" class="form-control" name='firstname' id="firstname" onChange={(event) => setfirstName(event.target.value)} value={firstName} required />
                        </div>
                        <div className="col-md-6">
                            <label for="lastname">Last Name</label>
                            <input type="text" class="form-control" name='lastname' id="lastname" value={lastName} onChange={(event) => setlastName(event.target.value)} required />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <label for="gender">Gender</label>
                            <select className='form-control' name='gender' id='gender' value={gender} onChange={(event) => setgender(event.target.value)} required>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label for="dob">Date of birth</label>
                            <input type="date" class="form-control" name='dob' id="dob" value={dob} onChange={(event) => setdob(event.target.value)} required />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <label for="username">Country</label>
                            <input type="text" class="form-control" name='country' id="country" value={country}  onChange={(event) => setcountry(event.target.value)} required />
                        </div>
                        <div className="col-md-4">
                            <label for="email">Province</label>
                            <input type="text" class="form-control" name='province' id="province" value={province} onChange={(event) => setprovince(event.target.value)} required />
                        </div>
                        <div className="col-md-4">
                            <label for="email">City</label>
                            <input type="text" class="form-control" name='city' id="city" value={city} onChange={(event) => setCity(event.target.value)} required />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <input type="submit" value={isDetailsAvailable ? "Update" : "Save"} class="btn btn-block btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
            <div class="">
                <h3>Account Details</h3>
                <form>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="username" required disabled />
                        </div>
                        <div className="col-md-6">
                            <label for="email">Email Address</label>
                            <input type="text" class="form-control" id="email" required disabled />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" required disabled />
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-10">
                        </div>
                        <div className="col-md-2">
                            <input type="submit" value="Edit Details" class="btn btn-block btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default index;
