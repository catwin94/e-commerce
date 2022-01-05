import React from "react";
import "../../assets/styles/components/Carousel.scss";
// import moreIcon from "../../assets/statics/more_icon2.png";
import addIcon from "../../assets/statics/plus_icon2.png";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, incrementQty } from "../PanierMenu/panier.slice.js";

const CarouselItem = (props) => {
  const { title, description, price } = props;
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.panier.list);

  return (
    // <div className="slide-item" style={{ width: `${itemWidth}px` }}>
    <div className="cardItem">
      <img className="cardImg" src={props.pictureLink} alt="" />
      <div className="cardDetails">
        {/* <div>
          <img
            src={addIcon}
            alt="Add"
            onClick={() => {
              if (itemList.some((item) => item.id === props.item.id)) {
                dispatch(incrementQty(props.item.id));
              } else {
                dispatch(addCourse(props.item));
              }
            }}
          />
          <img src={moreIcon} alt="more details" />
        </div> */}
        <div>
          <p className="cardDetails--title">{title}</p>
          <p className="cardDetails--subtitle">{description}</p>
          <p className="cardDetails--price">${price}</p>
        </div>
        <i
          className="bx bx-plus"
          onClick={() => {
            if (itemList.some((item) => item.id === props.item.id)) {
              dispatch(incrementQty(props.item.id));
            } else {
              dispatch(addCourse(props.item));
            }
          }}
        />
      </div>
    </div>
  );
};

export default CarouselItem;
