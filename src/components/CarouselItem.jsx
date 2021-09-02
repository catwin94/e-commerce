import React from 'react';
import CookImg from '../assets/argentinian_cook.jpg';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => {
  return (  
    <div className="carousel-item">
      <img src={CookImg} alt="" />
      <div className="carousel-item__details"></div>
    </div>
  );
}
 
export default CarouselItem;