import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import moreIcon from '../assets/statics/more_icon2.png';
import addIcon from '../assets/statics/plus_icon2.png';

const CarouselItem = (props) => {
  return ( 
    <div className="slide-item" style= {{width:`${props.itemWidth}px`}}>
      <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" />
      <div className="slide-item-details">
        <div>
            <img src={addIcon} alt="Add" />
            <img src={moreIcon} alt="more details" />
        </div>
        <div>
          <p className="slide-item-details--title">Titulo descriptivo</p>
          <p className="slide-item-details--subtitle">2021 16+ 114min</p>
        </div>                
      </div>
    </div>

  );
}
 
export default CarouselItem;