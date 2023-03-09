import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../api";
import "./register.scss";
const index = () => {
  const navigate = useNavigate();
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
    setFormData(() => {
      return {
        ...formData,
        [e.target.name]: e.target.value,
        formError: false,
        errorMessage: "",
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      return;
    }
    try {
      const resp = await api.registerUser(payload);
      if (resp.ok) {
        console.log(resp);
        navigate("/login");
      } else {
        setFormData(() => {
          return {
            ...formData,
            formError: true,
            errorMessage: resp.data,
          };
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register_wrapper">
      <div>
        <h1>Book Keepers</h1>
      </div>
      <div class="row">
        <h4>Trade Books from the comfort of your home</h4>
        <p>Sign up with us</p>
      </div>
      <div class="row">
        <form>
          <div class="form-group row first">
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
          <div class="form-group row last mb-4 mt-4">
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
          <div class="form-group row last mb-4 mt-4">
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
              <input
                type="text"
                class="form-control mt-1 p-2"
                id="province"
                name="province"
                defaultValue={formData.province}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div class="form-group row last mb-4 mt-4">
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
              <input
                type="text"
                class="form-control mt-1 p-2"
                id="city"
                name="city"
                defaultValue={formData.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div class="form-group row last mb-4 mt-4">
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
          <div className="row mt-2">
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
          <div className="row mt-2">
            <div className="col-12">
              <button
                onClick={handleSubmit}
                class="btn btn-block btn-light p-2"
              >
                Sign up
              </button>
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
    </div>
  );
};

export default index;
