import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import CookImg from '../assets/argentinian_cook.jpg';
import playIcon from '../assets/statics/play_icon.png';
import addIcon from '../assets/statics/plus_icon2.png';

const CarouselItem = () => {
  return (  
    // <div className="carousel-item">
    //   <img src={CookImg} alt="" />
    //   <div className="carousel-item__details">
    //     <div>
    //         <img src={playIcon} alt="Play" />
    //         <img src={addIcon} alt="Add" />
    //     </div>
    //     <p class="carousel-item__details--title">Titulo descriptivo</p>
    //     <p class="carousel-item__details--subtitle">2021 16+ 114min</p>
    //   </div>
    // </div>

    <div class="slide-item">
      <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
      <div class="slide-item-details">
        <div>
            <img src="./assets/play_icon.png" alt="Play" />
            <img src="./assets/plus_icon2.png" alt="Add" />
        </div>
        <div>
          <p class="slide-item-details--title">Titulo descriptivo</p>
          <p class="slide-item-details--subtitle">2021 16+ 114min</p>
        </div>                
      </div>
    </div>

  );
}
 
export default CarouselItem;