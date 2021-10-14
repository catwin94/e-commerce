import React, { useState, useEffect } from "react";
import PanierTable from "./PanierTable";
import panierImg from "../../assets/statics/icon_panier2.png";
import "../../assets/styles/components/panier/Panier.scss";

const mediaQuery = window.matchMedia("(max-width: 767px)");
const mediaQueryMobile = mediaQuery.matches;
const PanierMenu = () => {
  const [hover, setHover] = useState(false);
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="panierContainer">
      <img
        className="panierImg"
        // style={hover ? styles.panier.panierImgHovered : styles.panier.panierImg}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          setShowTable((prevState) => !prevState);
        }}
        src={panierImg}
      />
      {showTable && <PanierTable></PanierTable>}
      {/* {showTable && <PanierTable styles={styles}></PanierTable>} */}

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
