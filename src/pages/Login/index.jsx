import React, { useState } from "react";
import classes from "./Login.module.css";
import HeadingSection from "../../components/servicesComponents/HeadingSection/HeadingSection";
import { Link } from "react-router-dom";
import { api } from "./../../services/api";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        email,
        password,
      };

      const { data } = await api.post(`/users/login`, payload);
      console.log("data >>>>>>>>>>", data);
    } catch (error) {
      console.error("error >>>>>>>>>>>>>>>", error);
      setError(error?.response?.data?.message);

      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className={classes.container}>
      <HeadingSection mainTitle="Home" subTitle="Login" heading="Login" />
      <div className={classes.cardContainer}>
        <div className={classes.cardWrap}>
          <div className={classes.cards}>
            {error && <h3 className="alert_danger">{error}</h3>}

            <h3>Login</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className={classes.form_control}>
                <label htmlFor="email_address">Email Address*</label>
                <input
                  type="text"
                  id="email_address"
                  name="email"
                  onChange={(e) => setEmail(e.target.email)}
                  value={email}
                  placeholder="Type Email Address"
                />
              </div>
              <div className={classes.form_control}>
                <label htmlFor="password">Password*</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Type Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.email)}
                  value={password}
                />
              </div>
              <div className={classes.login_btn}>
                <button type="submit">Login Now</button>
              </div>
            </form>
            <div className={classes.remember_forgot_password}>
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#">Forgot Password</a>
            </div>
            <div className={classes.register}>
              <p>Don't have an Account ? </p>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
