import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/statics/icon_logo.png';
import panier from '../assets/statics/icon_panier2.png';
import '../assets/styles/components/Header.scss'

const Header = () => {
  return (  
    <header className="header">
      <div className="logo">
        <Link to="/">
        <img src={logo} alt="" />
        </Link>
        <h1> _E-Commerce_ </h1>
      </div>
      <div className="menu">
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
    </header>
  );
}
 
export default Header;
