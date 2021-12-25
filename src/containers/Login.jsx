import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../assets/statics/google-icon2.png";
import twitterIcon from "../assets/statics/twitter-icon2.png";
import "../assets/styles/components/Login.scss";
import "../assets/styles/components/MainContainer.scss";

const Login = () => {
  return (
    <section className="section-container">
      <div className="sub-container">
        <h2 tabindex="0">Login</h2>
        <form className="form-container">
          <input
            area-label="E-mail"
            className="input"
            type="email"
            placeholder="E-mail"
          />
          <input
            area-label="Password"
            className="input"
            type="password"
            placeholder="Password"
          />
          <button className="form-button">Login</button>
          <div className="rememberMe-container">
            <label>
              <input type="checkbox" name="" id="cbox1" value="checkbox" />
              Remember me
            </label>
            <a href="javascript:window.location.reload(true)">
              Forgot password?
            </a>
          </div>
        </form>
        <section className="socialMedia-container">
          <div>
            <img src={googleIcon} alt="Google" />
            Login with Google
          </div>
          <div>
            <img src={twitterIcon} alt="Twitter" />
            Login with Twitter
          </div>
        </section>
        <p className="login-register-switch">
          <Link to="/register"> Create account </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
