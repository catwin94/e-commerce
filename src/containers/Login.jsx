import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import googleIcon from '../assets/statics/google-icon2.png';
import twitterIcon from '../assets/statics/twitter-icon2.png';
import '../assets/styles/components/Login.scss';
import '../assets/styles/components/RegisterContainer.scss';
import '../assets/styles/components/Button.scss';
import '../assets/styles/components/Input.scss';

const Login = () => {
  return (  
    <section className="register">
        <section className="register__container">
            <h2 tabindex="0">Inicia sesión</h2>
            <form className="login__container--form">
                <input area-label="Correo" className="input" type="text" placeholder="Correo" />
                <input area-label="Contraseña" className="input" type="password" placeholder="Contraseña" />
                <button className="button">Iniciar sesión</button>
                <div className="login__container--remember-me">
                    <label>
                        <input type="checkbox" name="" id="cbox1" value="checkbox" />Recuérdame
                    </label>
                    <a href="/">Olvide mi Contraseña</a>
                </div>
            </form>
            <section className="login__container--social-media">
                <div>
                    <img src={googleIcon} alt="Google" />Inicia sesión con Google                    
                </div>
                <div>
                    <img src={twitterIcon} alt="Twitter" />Inicia sesión con Twitter
                </div>
            </section>
            <p className="login__container--register">No tienes ninguna cuenta <a href="">Registrate</a></p>
        </section>
    </section>
  );
}
 
export default Login;