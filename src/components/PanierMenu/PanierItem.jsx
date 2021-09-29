import React, { useState } from "react";
import { styles } from "./Panier.styles.js";
import { useDispatch } from "react-redux";
import {
  addCourse,
  deleteCourse,
  decrementQty,
  incrementQty,
} from "./panier.slice.js";
import "../../assets/styles/components/DeleteButton.scss";

const PanierItem = (props) => {
  //Testing bototes add and delete
  // const [count, setCount] = useState(props.quantity);
  const dispatch = useDispatch();

  return (
    <div style={styles.table.divTableRow}>
      <div style={styles.table.divTableCell}>
        <img
          style={styles.table.imgItem}
          src="https://images.pexels.com/photos/6794851/pexels-photo-6794851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>
      <div style={styles.table.divTableCell}>{props.description}</div>
      <div style={styles.table.divTableCell}>${props.price}</div>
      <div style={styles.table.divTableCell}>{props.quantity}</div>
      <div style={styles.table.divTableCell}>
        <div style={styles.button.container}>
          {/* <button type="button" className="button-delete"> */}
          <button
            type="button"
            style={styles.button.button}
            onClick={() => {
              dispatch(incrementQty(props.id));
            }}
          >
            <div style={styles.button.divContainer}>
              <span
                style={{ ...styles.button.span, transform: "rotate(180deg)" }}
              ></span>
              <span
                style={{
                  ...styles.button.span,
                  transform: "rotate(90deg)",
                }}
              ></span>
            </div>
          </button>
          <button
            type="button"
            style={styles.button.button}
            onClick={() => {
              if (props.quantity > 1) {
                dispatch(decrementQty(props.id));
              } else {
                dispatch(deleteCourse(props.id));
              }
            }}
          >
            <div style={styles.button.divContainer}>
              <span
                style={{ ...styles.button.span, transform: "rotate(0deg)" }}
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PanierItem;
