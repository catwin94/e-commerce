import React from "react";
import { styles } from "./Panier.styles";

const PanierTable = ({ children, style }) => {
  return (
    <div style={styles.panierTable}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={(styles.table, styles.th)}>Picture</th>
            <th style={(styles.table, styles.th)}>Description</th>
            <th style={(styles.table, styles.th)}>Price</th>
            <th style={(styles.table, styles.th)}>Quantity</th>
            <th style={(styles.table, styles.thLastChild)}></th>
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default PanierTable;
