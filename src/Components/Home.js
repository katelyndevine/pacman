import React from "react";
import pacmanGIF from "../images/pacman-gif.gif";
import pacmanLogo from "../images/pacman-logo2.png";
import js from "../images/JS.png";
import html from "../images/html.png";
import css from "../images/css.png";
import reactLogo from "../images/react.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home">
      <div className="homeLeft">
        <img src={pacmanLogo} alt="Pacman Logo" className="pacmanLogoLarge" />
        <h2>Dive into some nostaglia and play a classic game of Pacman!</h2>
        <h5>
          This project was created for fun during a week-long{" "}
          <a href="https://mintbean.io/" target="blank" id="mintbean">
            Mintbean
          </a>{" "}
          Hackathon event. Technologies used:{" "}
        </h5>
        <div className="technologies">
          <img src={html} alt="HTML5 Logo" className="technology" />
          <img src={css} alt="CSS3 Logo" className="technology" />
          <img src={js} alt="JavaScript Logo" className="technology" />
          <img src={reactLogo} alt="React Logo" className="technology" />
        </div>
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
