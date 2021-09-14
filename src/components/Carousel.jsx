import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({children}) => {
  return (  
    <section className="carousel">
      <h2> Cursos de cocina </h2>
      <div className="carousel-container">
        {children}
      </div>
    </section>
  );
}
 
export default Carousel;