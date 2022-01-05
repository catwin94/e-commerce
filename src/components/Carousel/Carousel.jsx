import React, { useState } from "react";
import "../../assets/styles/components/Carousel.scss";
import "../../assets/styles/components/ArrowButton.scss";

const Carousel = (props) => {
  // defino el state local
  const [translateInX, setTranslateInX] = useState(0);

  // cuando el usuario hace click en boton
  const clickOnButton = (e) => {
    e.preventDefault();

    //Next
    if (e.currentTarget.id === "next") {
      if (
        translateInX ===
        -1 *
          (document.querySelector(".rollCards").offsetHeight - props.itemHeight)
      ) {
      } else {
        setTranslateInX(translateInX - props.itemHeight);
      }
    }

    //Previous
    if (e.currentTarget.id === "previous") {
      if (translateInX === 0) {
      } else {
        setTranslateInX(translateInX + props.itemHeight);
      }
    }
  };

  return (
    <section>
      <div className="carouselContainer">
        <button onClick={clickOnButton} className="arrowButton" id="previous">
          <span className="buttonPrevious"></span>
        </button>
        <div className="cardViewer scroll-touch">
          <div
            className="rollCards"
            style={{ transform: `translateY(${translateInX}px)` }}
          >
            {props.children}
          </div>
        </div>
        <button onClick={clickOnButton} className="arrowButton" id="next">
          <span className="buttonNext"></span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
