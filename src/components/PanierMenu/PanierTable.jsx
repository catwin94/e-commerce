import React from "react";
import PanierItem from "./PanierItem";
// import { styles } from "./Panier.styles.js";
import { useSelector } from "react-redux";

// const itemList = [
//   {
//     description: "description product",
//     price: 1500,
//     quantity: 10,
//   },
//   {
//     description: "description product",
//     price: 1600,
//     quantity: 10,
//   },
// ];

const PanierTable = ({ styles }) => {
  const itemList = useSelector((state) => state.panier.list);

  return (
    <div style={styles.table.divTableContainer}>
      <div style={styles.table.divTable}>
        <div style={styles.table.divTableHeading}>
          <div style={styles.table.divTableRow}>
            <div style={styles.table.divTableHead}>Picture</div>
            <div style={styles.table.divTableHead}>Description</div>
            <div style={styles.table.divTableHead}>Price</div>
            <div style={styles.table.divTableHead}>Quantity</div>
            <div style={styles.table.divTableHead}></div>
          </div>
        </div>

        {/* <div style={styles.table.divTableBody}>{children} */}
        <div style={styles.table.divTableBody}>
          {itemList.map((item, key) => {
            return (
              <PanierItem
                styles={styles}
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
      </div>
    </div>
  );
};

export default PanierTable;
