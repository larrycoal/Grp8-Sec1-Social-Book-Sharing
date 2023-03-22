import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import "./login.scss"
const index = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    formError: false,
    errorMessage: "",
  });

  const { isLoggedIn, signIn,currentUser } = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    setFormData(() => {
      return {
        ...formData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.username === "" || formData.password === ""){
       setFormData(() => {
         return {
           ...formData,
           formError: true,
           errorMessage: "Please enter a username and/or password",
         };
       });
       return
    }
    const payload = {
      username: formData.username,
      password: formData.password,
    };
    const resp = await signIn(payload);
    if (resp === "success") {
      navigate("/");
    } else {
      setFormData(() => {
        return {
          ...formData,
          formError: true,
          errorMessage: resp,
        };
      });
    }
  };
  return (
    <div className="login_wrapper">
      <div>
        <h1>Book Keepers</h1>
      </div>
      <div class="row">
        <h4>Trade Books from the comfort of your home</h4>
        <p>Welcome back, please login to your account</p>
      </div>
      <form>
        <div class="form-group row first">
          <label for="username">Username</label>
          <input
            type="email"
            class="form-control mt-1 p-2"
            id="username"
            name="username"
            defaultValue={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div class="form-group row last mb-4 mt-4">
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
        <div className="row mt-2">
          <div className="col-12">
            <input
              type="submit"
              value="Login"
              onClick={handleSubmit}
              class="btn btn-block btn-primary p-2"
            />
          </div>
        </div>
        <div className="error">
          {
            formData.formError? formData.errorMessage : null
          }
        </div>
        <div>Don't have an account? <Link to="/register">Create account</Link></div>
      </form>
    </div>
  );
};

export default index;
