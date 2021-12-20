import React from "react";
import "../assets/styles/components/UserMenu.scss";
// import '../assets/styles/components/Button.scss';
import userIcon from "../assets/statics/user_icon2.png";
import editIcon from "../assets/statics/edit_icon.png";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="sub-menu">
        <li>
          <img src={userIcon} alt="" />
          My account
        </li>
        <li>
          <img src={editIcon} alt="" />
          Edit profile
        </li>
        <li>
          <a href="/" className="button">
            {" "}
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
