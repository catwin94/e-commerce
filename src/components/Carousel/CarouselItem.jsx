import React from "react";
import "../../assets/styles/components/CarouselItem.scss";
// import "../../assets/styles/Media.scss";
import moreIcon from "../../assets/statics/more_icon2.png";
import addIcon from "../../assets/statics/plus_icon2.png";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, incrementQty } from "../PanierMenu/panier.slice.js";

const CarouselItem = (props) => {
  const { itemWidth, title, description } = props;
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.panier.list);

  return (
    <div className="slide-item" style={{ width: `${itemWidth}px` }}>
      <img src={props.pictureLink} alt="" />
      <div className="slide-item-details">
        <div>
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
        </div>
        <div>
          <p className="slide-item-details--title">{title}</p>
          <p className="slide-item-details--subtitle">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
