import React from "react";
import pacmanGIF from "../images/pacman-gif.gif";

const Rules = () => {
  return (
    <div id="rules">
      <div className="rules-Characters">
        <h1>characters / items</h1>
        <div className="characterShell">
          <div className="pacmanSquare"></div>
          <p> this is pacman.</p>
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
          <p>these are pacdots</p>
        </div>
        <div className="characterShell">
          <div className="powerPellet"></div>
          <p>These are power pellets.</p>
        </div>
        <div className="characterShell">
          <span className="keyboardDirections">← ↑ → ↓</span>
          <p>You control pacman...</p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
