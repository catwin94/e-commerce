import React from 'react';
import '../assets/styles/components/Carousel.scss';
import '../assets/styles/components/ArrowButton.scss';

const Carousel = ({children}) => {
  //children es el carousel-item
  return (  
    // <section className="carousel">
    //   <h2> Cursos de cocina </h2>
    //   <div className="carousel-container">
    //     {children}
    //   </div>
    // </section>
    <div class="slider-container">
        <button class="arrowButton" id="previous"> 
          <span class="buttonPrevious" ></span>
        </button>

        <div class="slider-window">
          <div class="slide-container" id="slidesCarousel">
            
            {children}
            
          </div>
        </div>  
        <button class="arrowButton" id="next"> 
          <span class="buttonNext" ></span>
        </button>
      </div>
  );
}
 
export default Carousel;