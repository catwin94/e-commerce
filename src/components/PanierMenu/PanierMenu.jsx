import React, { useState, useEffect } from "react";
import PanierTable from "./PanierTable";
import PanierItem from "./PanierItem";
import panierImg from "../../assets/statics/icon_panier2.png";
import { styles as mediaStyles } from "./Panier.styles";

const mediaQuery = window.matchMedia("(max-width: 767px)");
const mediaQueryMobile = mediaQuery.matches;
const PanierMenu = () => {
  const [hover, setHover] = useState(false);
  const [showTable, setShowTable] = useState(false);
  console.log(mediaQuery.matches);
  // const [styles, setStyles] = useState(
  //   mediaQuery.matches ? mediaStyles.panierGlobal : mediaStyles.panierMobile
  // );
  const [styles, setStyles] = useState(
    mediaQuery.matches ? mediaStyles.panierMobile : mediaStyles.panierGlobal
  );

  return (
    // <div className="panier-container">
    <div style={styles.panier.panierContainer}>
      {/* <img className="panier-img" src={panier} /> */}
      <img
        style={hover ? styles.panier.panierImgHovered : styles.panier.panierImg}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          setShowTable((prevState) => !prevState);
        }}
        src={panierImg}
      />
      {showTable && <PanierTable styles={styles}></PanierTable>}

      {/* {itemList.length > 0 && ( */}
      {/* {itemList.length > 0 && showTable && (
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
      )} */}
    </div>
  );
};

export default PanierMenu;