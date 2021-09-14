import React from 'react';
import '../assets/styles/components/SiderBar.scss';
import img1 from '../assets/courses/cook/french_cook.jpg';
import img2 from '../assets/courses/cook/asian_cook.jpg';
import img3 from '../assets/courses/cook/home_pasta_cook.jpg';
import img4 from '../assets/courses/cook/vegan_cokkies_cook.jpg';

const SiderBar = () => {

  

  return (  
    <div className="slider">
      <div className="slides">
        {/* <!-- radio buttons start --> */}
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />
        {/* <!-- radio buttons end -->
        <!-- slide images start --> */}
        <div className="slide first">
          <img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        </div>
        <div className="slide ">
          <img src="https://images.pexels.com/photos/3758133/pexels-photo-3758133.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 "alt="" />          
        </div>
        <div className="slide ">
          <img src="https://images.pexels.com/photos/2318966/pexels-photo-2318966.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        </div>
        <div className="slide ">
          <img src="https://images.pexels.com/photos/6645913/pexels-photo-6645913.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        </div>
        {/* <!-- slide images end -->
        <!-- automatic navigation start --> */}
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
        </div>
        {/* <!-- automatic navigation end -->
        <!-- manual navigation start .. linked with radio btn id --> */}
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn" ></label>
          <label htmlFor="radio2" className="manual-btn" ></label>
          <label htmlFor="radio3" className="manual-btn" ></label>
          <label htmlFor="radio4" className="manual-btn" ></label>
        </div>
        {/* <!-- manual navigation end --> */}
      </div>
    </div>
  );
}
 
export default SiderBar;