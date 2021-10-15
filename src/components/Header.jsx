import React from "react";
import { Link } from "react-router-dom";
import PanierMenu from "./PanierMenu/PanierMenu";
import logo from "../assets/statics/icon_logo.png";
import logoName from "../assets/statics/logo2.png";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header sticky">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
          <img className="logoName" src={logoName} alt="" />
        </Link>
      </div>
      <div className="menu">
        <PanierMenu />
        {/* <UserMenu /> */}
      </div>
    </header>
  );
};

export default Header;
