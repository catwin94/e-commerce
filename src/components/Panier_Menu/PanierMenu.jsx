import React, { useState, useEffect } from "react";
import PanierTable from "./PanierTable";
import PanierItem from "./PanierItem";
// import "../../assets/styles/components/PanierMenu.scss";
// import "../../assets/styles/components/DeleteButton.scss";
import panier from "../../assets/statics/icon_panier2.png";
import { styles } from "./Panier.styles";

const itemList = [
  {
    description: "description product",
    price: 1500,
    quantity: 10,
  },
  {
    description: "description product",
    price: 1600,
    quantity: 10,
  },
  {
    description: "description product",
    price: 1700,
    quantity: 10,
  },
];

export const addItem = (item) => {
  itemList.push(item);
};

const PanierMenu = () => {
  const [hover, setHover] = useState(false);
  const [showTable, setShowTable] = useState(false);

  return (
    // <div className="panier-container">
    <div style={styles.panierContainer}>
      {/* <img className="panier-img" src={panier} /> */}
      <img
        style={hover ? styles.panierImgHovered : styles.panierImg}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          setShowTable((prevState) => !prevState);
        }}
        src={panier}
      />
      {itemList.length > 0 && showTable && (
        <PanierTable>
          {itemList.map((item, key) => (
            <PanierItem
              key={key}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </PanierTable>
      )}
    </div>
  );
};

export default PanierMenu;
