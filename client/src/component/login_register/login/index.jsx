import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";

const index = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    formError: false,
    errorMessage: "",
  });

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
    console.log(formData);
    const payload = {
      username: formData.username,
      password: formData.password,
    };
    try {
      const resp = await api.loginUser(payload);
      if (resp.ok) {
        localStorage.setItem("token", resp.data.accesstoken);
        localStorage.setItem("user", JSON.stringify(resp.data.newUserData));
        navigate("/")
      } else {
        setFormData(() => {
          return {
            ...formData,
            formError: true,
            errorMessage: resp.data,
          };
        });
      }
    } catch (err) {}
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
      </form>
    </div>
  );
};

export default index;
