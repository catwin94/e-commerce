import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Register.scss';
import '../assets/styles/components/MainContainer.scss';
import '../assets/styles/components/Button.scss';
import '../assets/styles/components/Input.scss';

const Register = () => {
  return (  
    <section className="container">
        <div className="sub__container">
            <h2>Regístrate</h2>
            <form className="register__container--form" action="">
                <input className="input" type="text" placeholder="Nombre" />
                <input className="input" type="email" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="button">Registrarme</button>
            </form>
            <p className="register__container--login">
              <Link to="/login" > Iniciar Sesión </Link>
            </p>
        </div>
        
    </section>
  );
}
 
export default Register;