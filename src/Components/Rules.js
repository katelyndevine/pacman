import React from "react";
import pacmanEatsDots from "../images/pacmanEatingDots.gif";
import pacmanEatsGhost from "../images/pacmanEatsGhost.gif";
import pacmanWins from "../images/pacmanWins.gif";

const Rules = () => {
  return (
    <div id="rules">
      <div className="rules-Characters">
        <h1>characters / items</h1>
        <div className="characterShell">
          <div className="pacmanSquare"></div>
          <p> this is pacman (aka YOU)</p>
        </div>
        <div className="characterShell">
          <div className="ghosts">
            <div className="pink"></div>
            <div className="orange"></div>
            <div className="cyan"></div>
            <div className="red"></div>
          </div>
          <p>these are the ghosts</p>
        </div>
        <div className="characterShell">
          <div className="pacDots">
            <div className="pacDot"></div>
            <div className="pacDot"></div>
            <div className="pacDot"></div>
          </div>
          <p>these are pac-dots (yummy)</p>
        </div>
        <div className="characterShell">
          <div className="powerPellet"></div>
          <p>these are power pellets (extra yummy)</p>
        </div>
        <div className="characterShell">
          <span className="keyboardDirections">← ↑ → ↓</span>
          <p>you control pacman by using directional keys</p>
        </div>
      </div>
      <div className="rules-containers">
        <div className="rules-copy">
          <h1>the jist</h1>
          <p>
            Eat the pac-dots inside of the maze, while avoiding the colored
            ghosts.
          </p>
        </div>
        <img src={pacmanEatsDots} alt="Pacman GIF" />
      </div>
      <div className="rules-containers">
        <img src={pacmanEatsGhost} alt="Pacman GIF" />
        <div className="rules-copy">
          <h1>special abilities</h1>
          <p>
            Eating a power pellet will cause the ghosts to turn blue, allowing
            you to temporarily eat the ghosts for bonus points. Eating a ghost
            when they are blue will send them straight back to their ghosty lair
            of doom. Keep in mind ghosts will be vulnerable to your pacman might
            for only 10 seconds.
          </p>
        </div>
      </div>
      <div className="rules-containers">
        <div className="rules-copy">
          <h1>how to win</h1>
          <p>
            You have beat the game when all the pac-dots and power pellets have
            been consumed and no ghosts have captured you. Time to celebrate!
          </p>
        </div>
        <img src={pacmanWins} alt="Pacman GIF" />
      </div>
    </div>
  );
};

export default Rules;
