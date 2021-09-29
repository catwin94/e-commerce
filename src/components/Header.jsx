import React from "react";
import { Link } from "react-router-dom";
import PanierMenu from "../components/Panier_Menu/PanierMenu";
import PanierMenu2 from "../components/PanierMenu/PanierMenu";
import UserMenu from "../components/UserMenu";
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
        {/* <h1> _E-Commerce_ </h1> */}
      </div>
      <div className="menu">
        <PanierMenu />
        <PanierMenu2 />
        {/* <UserMenu /> */}
      </div>
    </header>
  );
};

export default Header;
