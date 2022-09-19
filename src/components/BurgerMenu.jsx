import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../styles/components/burgerMenu.css";

const BurgerMenu = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/team">
        Team
      </a>
      <a className="menu-item" href="/work">
        Work with us
      </a>
    </Menu>
  );
};

export default BurgerMenu;
