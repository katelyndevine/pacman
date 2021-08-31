import React from "react";
import pacmanGIF from "../images/pacman-gif.gif";

const Home = () => {
  return (
    <div id="home">
      <div className="homeContainer">
        <div className="rules">
          <h1>Welcome to Pacman! Here are the rules:</h1>
          <ul>
            <li>You control Pacman</li>
            <li>
              The goal is to eat all of the dots inside of the maze, while
              avoiding the colored ghosts.
            </li>
            <li>
              Eating a Power Pellet will cause the ghosts to turn blue, allowing
              you to temporaily eat them for bonus points.
            </li>
            <li>Most important rule: have fun!!!</li>
          </ul>
        </div>
        <div>
          <img src={pacmanGIF} alt="Pacman GIF" />
        </div>
      </div>
    </div>
  );
};

export default Home;
