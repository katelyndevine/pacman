import React from "react";
import Pacman from "./Pacman";

function refreshPage() {
  window.location.reload();
}

const Game = () => {
  return (
    <div className="gameContainer">
      {/* <Pacman /> */}
      <h3 onClick={refreshPage} className="startBtn">
        START
      </h3>
      <div class="grid"></div>
      <h2 className="score">
        Score: <span id="score">0</span>
      </h2>
    </div>
  );
};

Pacman();

export default Game;
