import React from "react";
import Pacman from "./Pacman";

// Disable key up/down page scrolling
// (so the page doesn't scroll while playing pacman)
document.addEventListener("keydown", function (e) {
  if (
    e.key === "ArrowUp" ||
    e.key === "ArrowDown" ||
    e.key === "ArrowRight" ||
    e.key === "ArrowLeft"
  ) {
    e.preventDefault();
  }
});

function refreshPage() {
  window.location.reload();
}

Pacman();

const Game = () => {
  return (
    <div id="game">
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
