import React, {Children, cloneElement, useState} from 'react';
import '../assets/styles/components/Carousel.scss';
import '../assets/styles/components/ArrowButton.scss';

const Carousel = (props) => {
  const nbOfVisibleSlides = 5;

  //defino el state local
  const [translateInX, setTranslateInX] = useState(0);
  
  //cuando el usuario hace click en boton
  const clickOnButton = e  => {
    e.preventDefault();  

    //Next
    if(e.currentTarget.id === 'next'){
      if(nbOfVisibleSlides < 5){
        setTranslateInX(0);
      }
      else{
        if(translateInX <= ((props.children.length-nbOfVisibleSlides)*props.itemWidth*-1)){
          setTranslateInX(0);
        }
        else{
          setTranslateInX(translateInX-props.itemWidth);
        } 
      }  
    }
    //Previous
    else if(e.currentTarget.id === 'previous'){
      if(translateInX === 0){
        setTranslateInX(0);
       }
      else{
        setTranslateInX(translateInX+props.itemWidth);
      }
    }  
  }

  //children es el carousel-item
  return (
    <div className="slider-container">
        <button onClick={clickOnButton} className="arrowButton" id="previous"> 
          <span className="buttonPrevious" ></span>
        </button>

        <div className="slider-window">
          <div className="slide-container" id="slidesCarousel" 
          
          style={{transform: `translateX(${translateInX}px)`}}
          
          >
            
            {props.children}
            
          </div>
        </div>  
        <button onClick={clickOnButton} className="arrowButton" id="next"> 
          <span className="buttonNext" ></span>
        </button>
      </div>
  );
}
 
export default Carousel;