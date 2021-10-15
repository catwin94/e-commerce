import React, { useState } from "react";
// import { styles } from "./Panier.styles.js";
import { useDispatch } from "react-redux";
import {
  addCourse,
  deleteCourse,
  decrementQty,
  incrementQty,
} from "./panier.slice.js";
import "../../assets/styles/components/DeleteButton.scss";
import "../../assets/styles/components/Panier.scss";

const PanierItem = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="bodyContainer">
      <div>
        <img className="imgItem" src={props.link} />
      </div>
      <p>{props.description}</p>
      <p>${props.price}</p>
      <p>{props.quantity}</p>
      <div className="buttonContainer">
        <button
          type="button"
          className="buttonStyle"
          onClick={() => {
            dispatch(incrementQty(props.id));
          }}
        >
          <div className="divContainer">
            <span>+</span>
          </div>
        </button>
        <button
          type="button"
          className="buttonStyle"
          onClick={() => {
            if (props.quantity > 1) {
              dispatch(decrementQty(props.id));
            } else {
              dispatch(deleteCourse(props.id));
            }
          }}
        >
          <div className="divContainer">
            <span>-</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PanierItem;
