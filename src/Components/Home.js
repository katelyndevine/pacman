import React from "react";
import pacmanGIF from "../images/pacman-gif.gif";
import pacmanLogo from "../images/pacman-logo2.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home">
      <div className="homeLeft">
        <img src={pacmanLogo} alt="Pacman Logo" className="pacmanLogoLarge" />
        <h2>Dive into some nostaglia and play a classic game of Pacman!</h2>
        <div className="homeButtons">
          <Link to="rules" className="homeBtn" spy={true} smooth={true}>
            RULES
          </Link>
          <Link to="game" className="homeBtn" spy={true} smooth={true}>
            PLAY
          </Link>
        </div>
      </div>
      <div className="homeRight">
        <img src={pacmanGIF} alt="Pacman GIF" />
      </div>
    </div>
  );
};

export default Home;
