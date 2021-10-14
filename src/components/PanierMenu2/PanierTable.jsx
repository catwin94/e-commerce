import React from "react";
import PanierItem from "./PanierItem";
import { useSelector } from "react-redux";
import "../../assets/styles/components/panier/Panier.scss";

const PanierTable = () => {
  const itemList = useSelector((state) => state.panier.list);

  return (
    <div className="tableContainer">
      <div className="headingContainer">
        <p className="title">Picture</p>
        <p className="title">Description</p>
        <p className="title">Price</p>
        <p className="title">Quantity</p>
      </div>

      <div className="scrollContainer">
        {/* <div className="bodyContainer"> */}
        {itemList.map((item, key) => {
          return (
            <PanierItem
              key={key}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
              link={item.pictureLink}
            />
          );
        })}
        {/* </div> */}
      </div>

      {/* <div className="scrollContainer">
        <div className="divTableBody">
          {itemList.map((item, key) => {
            return (
              <PanierItem
                key={key}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
                id={item.id}
                link={item.pictureLink}
              />
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default PanierTable;
