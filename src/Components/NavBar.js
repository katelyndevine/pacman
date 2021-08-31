import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        {/* <NavLink to="/" className="navLink">
          Home
        </NavLink> */}
        <NavLink to="/" className="navLink">
          Play
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
