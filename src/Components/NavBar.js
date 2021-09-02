import React from "react";
import { Link } from "react-scroll";
import pacmanLogo from "../images/pacman-logo2.png";

const NavBar = () => {
  return (
    <div className="navContainer">
      <ul className="navbar">
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            <img src={pacmanLogo} alt="Pacman Logo" className="pacmanLogo" />
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="rules" spy={true} smooth={true}>
            Rules
          </Link>
        </li>
        <li>
          <Link to="game" spy={true} smooth={true}>
            Play
          </Link>
        </li>
        <li>
          <Link to="footerContainer" spy={true} smooth={true}>
            Engineer
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
