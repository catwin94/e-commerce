import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Login.scss";
import "../assets/styles/components/MainContainer.scss";
// import '../assets/styles/components/Button.scss';
// import "../assets/styles/components/Input.scss";

const Register = () => {
  return (
    <section className="section-container">
      <div className="sub-container">
        <h2>Regístrate</h2>
        <form className="form-container" action="">
          <input className="input" type="text" placeholder="Nombre" />
          <input className="input" type="email" placeholder="Correo" />
          <input className="input" type="password" placeholder="Contraseña" />
          <button className="form-button">Registrarme</button>
        </form>
        <p className="login-register-switch">
          <Link to="/login"> Iniciar Sesión </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
