import React from "react";
import "../styles/navbar.css";
import BurgerMenu from "./BurgerMenu";
import Divider from "./Divider";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="../../assets/hexagon.png" alt="company-logo" className="logo" />
      <input className="InputField" dir="rtl" />
      <img
        src="../../assets/search.png"
        alt="search-icon"
        className="SearchIcon"
      />
      <BurgerMenu />
    </div>
  );
};

export default Navbar;