import React from "react";
import Pacman from "./Pacman";

function refreshPage() {
  window.location.reload();
}

document.addEventListener("keydown", function (e) {
  // To make sure it freezes the scroll when
  // the first two keypresses are "ArrowUp"
  if (e.key === "ArrowUp" || e.key === "ArrowUp" || e.key === "ArrowDown") {
    e.preventDefault();
  }
});

Pacman();

const Game = () => {
  return (
    <div id="game">
      {/* <Pacman /> */}
      <h3 onClick={refreshPage} className="startBtn">
        START
      </h3>
      <div className="grid"></div>
      <h2 className="score">
        Score: <span id="score">0</span>
      </h2>
    </div>
  );
};

export default Game;
