import React from "react";
import { slide as Menu } from "react-burger-menu";
import { MenuItem } from "./MenuItem";
import "../styles/components/burgerMenu.css";

const BurgerMenu = () => {
  return (
    <Menu>
      {MenuItem.map((menu) => (
        <div key={menu.navItem}>
          <a className="menu-item" href={menu.href}>
            {menu.navItem}
          </a>
        </div>
      ))}
    </Menu>
  );
};

export default BurgerMenu;
