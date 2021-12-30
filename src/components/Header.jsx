import React from "react";
import { Link } from "react-router-dom";
import PanierMenu from "./PanierMenu/PanierMenu";
import logo from "../assets/statics/icon_logo.png";
import logoName from "../assets/statics/logo2.png";
import logoAccount from "../assets/statics/user_icon3.png";
import "../assets/styles/components/Layout.scss";

const Header = () => {
  return (
    <header className="header sticky">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Home Icon" />
        </Link>
      </div>
      <div className="logo">
        <Link to="/">
          <img className="logoName" src={logoName} alt="Home Icon name" />
        </Link>
      </div>
      <div className="menu">
        <PanierMenu />
        <Link to="/Login">
          <img className="loginIcon" src={logoAccount} alt="Account Icon" />
        </Link>
        {/* <UserMenu /> */}
      </div>
    </header>
  );
};

export default Header;
