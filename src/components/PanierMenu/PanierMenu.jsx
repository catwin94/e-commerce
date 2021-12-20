import React, { useState } from "react";
import { useSelector } from "react-redux";
import PanierTable from "./PanierTable";
import panierImg from "../../assets/statics/icon_panier2.png";
import "../../assets/styles/components/Panier.scss";

const PanierMenu = () => {
  const [showTable, setShowTable] = useState(false);
  const itemList = useSelector((state) => state.panier.list);

  function add(accumulator, a) {
    return accumulator + a;
  }

  return (
    <div className="panierContainer">
      <div>
        <img
          // className="panierImg"
          className="logoImg"
          onClick={() => {
            setShowTable((prevState) => !prevState);
          }}
          src={panierImg}
        />

        <span className="position-absolute top--10 start-90 translate-middle badge rounded-pill bg-info">
          {itemList.map((element) => element.quantity).reduce(add, 0)}
        </span>
      </div>

      {itemList.length > 0 && showTable && <PanierTable></PanierTable>}
    </div>
  );
};

export default PanierMenu;
