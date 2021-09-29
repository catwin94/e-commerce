import React from "react";
import { styles } from "./Panier.styles";

const PanierItem = (props) => {
  return (
    <tr>
      <td style={styles.td}>
        <img
          style={styles.tdImg}
          src="https://images.pexels.com/photos/6794851/pexels-photo-6794851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </td>
      <td style={styles.td}>{props.description}</td>
      <td style={styles.td}>{props.price}</td>
      <td style={styles.td}>{props.quantity}</td>
      <td style={styles.td}>
        <button type="button" className="button-delete">
          <div>
            <span></span> <span></span>
          </div>
        </button>
      </td>
    </tr>
  );
};

export default PanierItem;
