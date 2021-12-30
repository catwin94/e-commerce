import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/LoginRegister.scss";
import "../assets/styles/components/Layout.scss";
// import '../assets/styles/components/Button.scss';
// import "../assets/styles/components/Input.scss";

const Register = () => {
  return (
    <section className="section-container">
      <div className="sub-container">
        <h2>Create account</h2>
        <form className="form-container" action="">
          <input className="input" type="text" placeholder="Name" />
          <input className="input" type="email" placeholder="E-mail" />
          <input className="input" type="password" placeholder="Password" />
          <button className="form-button">Register</button>
        </form>
        <p className="login-register-switch">
          <Link to="/login"> Login </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
