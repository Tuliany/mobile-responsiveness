import React from "react";
import "../styles/components/navbar.css";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="../../assets/hexagon.png" alt="company-logo" className="logo" />
      <div className="Search">
        <input className="InputField" dir="rtl" />
        <img
          src="../../assets/search.png"
          alt="search-icon"
          className="SearchIcon"
        />
      </div>
      <BurgerMenu />
    </div>
  );
};

export default Navbar;
