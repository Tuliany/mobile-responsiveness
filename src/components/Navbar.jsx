import React from "react";
import "../styles/components/navbar.css";
import BurgerMenu from "./BurgerMenu";
import { useMediaQuery } from "react-responsive";
import { MenuItem } from "./MenuItem";

const Navbar = () => {
  const desktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <>
      <div className="navbar">
        <img
          src="../../assets/hexagon.png"
          alt="company-logo"
          className="logo"
        />
        <input className="inputField" dir="rtl" aria-label="search" />
        <img
          src="../../assets/search.png"
          alt="search-icon"
          className="searchIcon"
        />
        {desktop ? (
          <div className="flexMenu">
            {MenuItem.map((menu) => (
              <div key={menu.navItem}>
                <a className="menu-item" href={menu.href}>
                  {menu.navItem}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <BurgerMenu />
        )}
      </div>
    </>
  );
};

export default Navbar;