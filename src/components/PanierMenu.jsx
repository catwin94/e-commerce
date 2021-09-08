import React from 'react';
import '../assets/styles/components/PanierMenu.scss'
import panier from '../assets/statics/icon_panier2.png';

const PanierMenu = () => {
  return (  
    <div className="panier-menu">
      <ul> 
        <li className="submenu">
          <img id="panier-img" src={panier} alt="" />
          <div id="panier__container"  className="panier">
            <table className="panier-table">              
              <thead> 
                <tr>
                  <th>Picture</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </li>
      </ul>
    </div>
  );
}
 
export default PanierMenu;