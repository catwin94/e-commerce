import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/NotFound.scss';
import '../assets/styles/components/MainContainer.scss';

const NotFound = () => (  
    <section className="container error">
        <div className="error__container">
            <p className="error__container--number">40<span>4</span></p>
            <p>Página no encontrada</p>
            <Link to="/">
            Return to <span>Home</span>
            </Link>
        </div>
    </section>
  );

 
export default NotFound;