import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../api";
import Button from "../../../utils/Button";
import "./register.scss";
import { Country, State, City } from 'country-state-city';
import { filter } from "domutils";
import Select from 'react-select'
// console.log("country", State.getStatesOfCountry("CA"))
//console.log("state", City.getCitiesOfState("CA", "ON"))


const index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cityDisplay, setcityDisplay] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const Provinces = State.getStatesOfCountry("CA");
  let CityList ; 
  const DisplayProvinces = Provinces.map((province) => {
    return (<option value={province.name} key={province.isoCode} >{province.name}</option>)
  })


  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    province: "",
    city: "",
    postalCode: "",
    phonenumber: "",
    formError: false,
    errorMessage: "",
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);


  const handleChange = (e) => {
 

    if(e.target.name == "province"){
     for(let i=0;i<Provinces.length;i++){
      if(e.target.value == Provinces[i].name){
        CityList = City.getCitiesOfState(Provinces[i].countryCode, Provinces[i].isoCode);
      }
     }
     let getListOfCities = () => {
      let cities = [];
      for (let i = 0; i < CityList.length; i++) {
        cities.push({value: CityList[i].name, label:CityList[i].name});
      }
      return cities;
    }
     setcityDisplay(getListOfCities());
    }

    setFormData(() => {
      return {
        ...formData,
        [e.target.name]: e.target.value,
        city:selectedOption.value,
        formError: false,
        errorMessage: "",
      };
    });
    console.log("form",formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formData.password !== formData.confirmPassword) {
      setFormData(() => {
        return {
          ...formData,
          formError: true,
          errorMessage: "Password do not match",
        };
      });
      return;
    }
    const payload = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      gender: formData.gender,
      email: formData.email,
      password: formData.password,
      city: formData.city,
      postalCode: formData.postalCode,
      province: formData.province,
      phonenumber: formData.phonenumber,
      dob: formData.dob,
    };
    const temp = Object.keys(payload).filter((key) => payload[key] === "");
    if (temp.length > 0) {
      setFormData(() => {
        return {
          ...formData,
          formError: true,
          errorMessage: "Please ensure you fill out all fields",
        };
      });
      setLoading(false);
      return;
    }
    try {
      const resp = await api.registerUser(payload);
      if (resp.ok) {
        setLoading(false);
        navigate("/login");
      } else {
        setLoading(false);
        setFormData(() => {
          return {
            ...formData,
            formError: true,
            errorMessage: resp.data,
          };
        });
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="register_wrapper">
      <div>
        <img src="/src/assets/images/capstonelogo6black.png" height={"150px"} />
      </div>
      <div>
        <h4>Trade Books from the comfort of your home</h4>
        <p>Sign up with us</p>
      </div>
      <form>
        <div className="row">
          <div className="col-md-6">
            <label for="firstname">First Name</label>
            <input
              type="text"
              class="form-control mt-1 p-2"
              id="firstname"
              name="firstname"
              defaultValue={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label for="lastname">Last Name</label>
            <input
              type="text"
              class="form-control mt-1 p-2"
              id="lastname"
              name="lastname"
              defaultValue={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div class="row">
          <div className="col-md-6">
            <label for="gender">Gender</label>
            <select
              type="text"
              class="form-control mt-1 p-2"
              id="gender"
              name="gender"
              defaultValue={formData.gender}
              onChange={handleChange}
              required
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div className="col-md-6">
            <label for="dob">Date of Birth</label>
            <input
              type="date"
              class="form-control mt-1 p-2"
              id="dob"
              name="dob"
              defaultValue={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div class="row">
          <div className="col-md-6">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control mt-1 p-2"
              id="email"
              name="email"
              defaultValue={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label for="email">Province</label>
         
            <select aria-label="Default select example" class="form-control mt-1 p-2"
              id="province"
              name="province"
              defaultValue={formData.province}
              onChange={handleChange}
              required>
              <option selected disabled value="">Select Province</option>
              {DisplayProvinces}
            </select>
          </div>
        </div>
        <div class="row">
          <div className="col-md-6">
            <label for="postalCode">Postal Code</label>
            <input
              type="text"
              class="form-control mt-1 p-2"
              id="postalCode"
              name="postalCode"
              defaultValue={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label for="city">City</label>
            <Select options={cityDisplay}  placeholder="Select City"  id="city"
              name="city"
              defaultValue={formData.city}
              onChange={setSelectedOption}
              required/>
            {/* <input
              type="text"
              class="form-control mt-1 p-2"
              id="city"
              name="city"
              defaultValue={formData.city}
              onChange={handleChange}
              required
            />
            <ul className="CityAutocomplete">
              {DisplayCities()}
            </ul> */}
          </div>
        </div>
        <div class="row">
          <div className="col-md-6">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control p-2"
              id="password"
              name="password"
              defaultValue={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label for="password">Retype Password</label>
            <input
              type="password"
              class="form-control p-2"
              id="confirmpassword"
              name="confirmPassword"
              defaultValue={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label for="phonenumber">Phone Number</label>
            <input
              type="text"
              class="form-control p-2"
              id="phonenumber"
              name="phonenumber"
              defaultValue={formData.phonenumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Button action={handleSubmit} text="Sign Up" loading={loading} />
          </div>
        </div>
        {formData.formError && (
          <div className="error">{formData.errorMessage}</div>
        )}
        <div className="row mt-2">
          <div className="col-12">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default index;
