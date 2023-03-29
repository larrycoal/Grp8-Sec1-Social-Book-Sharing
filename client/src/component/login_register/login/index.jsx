import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import Button from "../../../utils/Button";
import "./login.scss";
const index = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    formError: false,
    errorMessage: "",
  });
  const [loading, setLoading] = useState(false);

  const {  signIn } = useContext(UserContext);
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
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formData.username === "" || formData.password === "") {
      setLoading(false);
      setFormData(() => {
        return {
          ...formData,
          formError: true,
          errorMessage: "Please enter a username and/or password",
        };
      });
      return;
    }
    const payload = {
      username: formData.username,
      password: formData.password,
    };
    try {
      const resp = await signIn(payload);
      if (resp === "success") {
        setLoading(false);
        navigate("/");
      } else {
        setLoading(false);
        setFormData(() => {
          return {
            ...formData,
            formError: true,
            errorMessage: resp,
          };
        });
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div className="login_wrapper">
      <div>
      <img src="/src/assets/images/capstonelogo6black.png" height={"150px"} />
      </div>
      <div>
        <h4>Trade Books from the comfort of your home</h4>
        <p>Welcome back, please login to your account</p>
      </div>
      <form className="loginform_wrapper">
        <div>
          <label for="username">Username</label>
          <input
            type="email"
            id="username"
            name="username"
            defaultValue={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div>
            <Button
              text="Login"
              action={handleSubmit}
              loading={formData.loading}
            />
          </div>
        </div>
        <div className="error">
          {formData.formError ? formData.errorMessage : null}
        </div>
        <div className="nfo">
          <span> Don't have an account?</span>
          <span>
            <Link to="/register">Create account</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default index;
