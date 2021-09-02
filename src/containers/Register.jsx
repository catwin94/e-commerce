import React from 'react';
import '../assets/styles/components/Register.scss';
import '../assets/styles/components/RegisterContainer.scss';
import '../assets/styles/components/Button.scss';
import '../assets/styles/components/Input.scss';

const Register = () => {
  return (  
    <section className="register">
        <div className="register__container">
            <h2>Regístrate</h2>
            <form className="register__container--form" action="">
                <input className="input" type="text" placeholder="Nombre" />
                <input className="input" type="email" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="button">Registrarme</button>
            </form>
            <p className="register__container--login"><a href="/">Iniciar Sesión</a></p>
        </div>
        
    </section>
  );
}
 
export default Register;