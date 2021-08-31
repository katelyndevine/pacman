export default function Pacman() {
  document.addEventListener("DOMContentLoaded", () => {
    // const grid = document.querySelector(".grid");
    const scoreDisplay = document.getElementById("score");
    const width = 28; // 28 x 28 = 784 squares
    let score = 0;

    //layout of grid and what is in the squares

    // prettier-ignore
    const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ];

    // let arry = [1, 2, 2, 4, 6];

    // legend:
    // 0: pac-dot
    // 1: wall
    // 2: ghost-lair
    // 3: power-pellet
    // 4: empty

    const squares = [];

    // create board
    function createBoard() {
      const grid = document.querySelector(".grid");

      for (let i = 0; i < layout.length; i++) {
        const square = document.createElement("div");
        grid.appendChild(square);
        squares.push(square);

        // add full layout to board
        if (layout[i] === 0) {
          squares[i].classList.add("pac-dot");
        } else if (layout[i] === 1) {
          squares[i].classList.add("wall");
        } else if (layout[i] === 2) {
          squares[i].classList.add("ghost-lair");
        } else if (layout[i] === 3) {
          squares[i].classList.add("power-pellet");
        } else if (layout[i] === 4) {
          squares[i].classList.add("empty");
        }
      }
    }

    createBoard();

    let pacmanCurrentIdx = 385;

    squares[pacmanCurrentIdx].classList.add("pac-man");

    // move pac-man
    function movePacman(e) {
      squares[pacmanCurrentIdx].classList.remove("pac-man");

      switch (e.keyCode) {
        case 37: // arrow left
          // if pacman is anywhere but the left-most column
          // && the space to the left is not a wall, move left
          if (
            pacmanCurrentIdx % width !== 0 &&
            !squares[pacmanCurrentIdx - 1].classList.contains("wall") &&
            !squares[pacmanCurrentIdx - 1].classList.contains("ghost-lair")
          )
            pacmanCurrentIdx -= 1;

          // check if pacman is at the left exit
          if (pacmanCurrentIdx - 1 === 363) {
            pacmanCurrentIdx = 391;
          }
          e.preventDefault();
          e.stopPropagation();
          break;
        case 38: //arrow up
          // is pacman is anywhere but the top row
          // && the space above is not a wall, move up
          if (
            pacmanCurrentIdx - width >= 0 &&
            !squares[pacmanCurrentIdx - width].classList.contains("wall") &&
            !squares[pacmanCurrentIdx - width].classList.contains("ghost-lair")
          )
            pacmanCurrentIdx -= width;
          e.preventDefault();
          e.stopPropagation();
          break;
        case 39: // arrow right
          // if pacman is anywhere by the right-most column
          // && space to right is not wall, move right
          if (
            (pacmanCurrentIdx + 1) % width !== 0 &&
            !squares[pacmanCurrentIdx + 1].classList.contains("wall") &&
            !squares[pacmanCurrentIdx + 1].classList.contains("ghost-lair")
          )
            pacmanCurrentIdx += 1;

          // check if pacman is at the right exit
          if (pacmanCurrentIdx + 1 === 392) {
            pacmanCurrentIdx = 364;
          }
          e.preventDefault();
          e.stopPropagation();
          break;
        case 40: // arrow down
          // if pacman is anwehere but the bottom row
          // && space below is not a wall, move down
          if (
            pacmanCurrentIdx + width < width * width &&
            !squares[pacmanCurrentIdx + width].classList.contains("wall") &&
            !squares[pacmanCurrentIdx + width].classList.contains("ghost-lair")
          )
            pacmanCurrentIdx += width;
          e.preventDefault();
          e.stopPropagation();
          break;
      }

      squares[pacmanCurrentIdx].classList.add("pac-man");

      pacDotEaten();
      powerPelletEaten();
      checkForGameOver();
      checkForWin();
    }

    document.addEventListener("keyup", movePacman);

    //  if pacman eats a pac-dot
    function pacDotEaten() {
      if (squares[pacmanCurrentIdx].classList.contains("pac-dot")) {
        score++;
        scoreDisplay.innerHTML = score;
        squares[pacmanCurrentIdx].classList.add("eatenPacDot");
        squares[pacmanCurrentIdx].classList.remove("pac-dot");
      }
    }

    // if pacman eats a power-pellet
    function powerPelletEaten() {
      if (squares[pacmanCurrentIdx].classList.contains("power-pellet")) {
        score += 10;
        ghosts.forEach((ghost) => (ghost.isScared = true));
        setTimeout(unScareGhosts, 10000);
        squares[pacmanCurrentIdx].classList.remove("power-pellet");
        squares[pacmanCurrentIdx].classList.add("eatenPacDot");
      }
    }

    // ghosts no longer blue
    function unScareGhosts() {
      ghosts.forEach((ghost) => (ghost.isScared = false));
    }

    // ghost template
    class Ghost {
      constructor(className, startIdx, speed) {
        this.className = className;
        this.startIdx = startIdx;
        this.speed = speed;
        this.currentIdx = startIdx;
        this.timerId = NaN;
        this.isScared = false;
      }
    }

    const ghosts = [
      new Ghost("blinky", 349, 250),
      new Ghost("pinky", 377, 400),
      new Ghost("inky", 350, 300),
      new Ghost("clyde", 378, 500),
    ];

    // draw ghosts onto grid
    ghosts.forEach((ghost) => {
      squares[ghost.currentIdx].classList.add(ghost.className);
      squares[ghost.currentIdx].classList.add("ghost");
    });

    function getCoordinates(index) {
      return [index % width, Math.floor(index / width)];
    }

    // move ghosts randomly
    ghosts.forEach((ghost) => moveGhost(ghost));

    function moveGhost(ghost) {
      const directions = [-1, +1, width, -width];
      let direction = directions[Math.floor(Math.random() * directions.length)];

      const getOutOfLairDirections = [-width];
      let getOutOfLairDirection =
        getOutOfLairDirections[
          Math.floor(Math.random() * getOutOfLairDirections.length)
        ];

      ghost.timerId = setInterval(function () {
        if (
          squares[ghost.currentIdx].classList.contains("ghost-lair") &&
          !squares[ghost.currentIdx + getOutOfLairDirection].classList.contains(
            "wall"
          ) &&
          !squares[ghost.currentIdx + getOutOfLairDirection].classList.contains(
            "ghost"
          )
        ) {
          squares[ghost.currentIdx].classList.remove(ghost.className);
          squares[ghost.currentIdx].classList.remove("ghost", "scared-ghost");
          ghost.currentIdx += getOutOfLairDirection;
          squares[ghost.currentIdx].classList.add(ghost.className, "ghost");
        } else if (
          !squares[ghost.currentIdx + direction].classList.contains("wall") &&
          !squares[ghost.currentIdx + direction].classList.contains("ghost")
        ) {
          // if ghosts next movement does NOT contain wall or ghost, move there
          // you can go here
          // remove all ghost related classes
          squares[ghost.currentIdx].classList.remove(ghost.className);
          squares[ghost.currentIdx].classList.remove("ghost", "scared-ghost");

          // check if the new space is closer
          let [ghostX, ghostY] = getCoordinates(ghost.currentIdx);
          let [pacmanX, pacmanY] = getCoordinates(pacmanCurrentIdx);
          let [ghostNewX, ghostNewY] = getCoordinates(
            ghost.currentIdx + direction
          );

          function isXCoordCloser() {
            if (Math.abs(ghostNewX - pacmanX) < Math.abs(ghostX - pacmanX)) {
              return true;
            } else return false;
          }

          function isYCoordCloser() {
            if (Math.abs(ghostNewY - pacmanY) < Math.abs(ghostY - pacmanY)) {
              return true;
            } else return false;
          }

          if (isXCoordCloser() || isYCoordCloser()) {
            ghost.currentIdx += direction;
            squares[ghost.currentIdx].classList.add(ghost.className, "ghost");
          } else {
            squares[ghost.currentIdx].classList.add(ghost.className, "ghost");
            direction =
              directions[Math.floor(Math.random() * directions.length)];
          }

          // ghost.currentIdx += direction;
          // re-draw ghost into the new square
          // squares[ghost.currentIdx].classList.add(ghost.className, "ghost");
        }
        // else try a new direction
        else
          direction = directions[Math.floor(Math.random() * directions.length)];
        // if ghost is scared/vulnerable/blue
        if (ghost.isScared) {
          squares[ghost.currentIdx].classList.add("scared-ghost");
        }

        // if ghost is scared and pacman runs into it
        if (
          ghost.isScared &&
          squares[ghost.currentIdx].classList.contains("pac-man")
        ) {
          squares[ghost.currentIdx].classList.remove(
            ghost.className,
            "ghost",
            "scared-ghost"
          );
          ghost.currentIdx = ghost.startIdx;
          score += 100;
          squares[ghost.currentIdx].classList.add(ghost.className, "ghost");
        }
        checkForGameOver();
      }, ghost.speed);
    }

    // check for game over
    function checkForGameOver() {
      if (
        squares[pacmanCurrentIdx].classList.contains("ghost") &&
        !squares[pacmanCurrentIdx].classList.contains("scared-ghost")
      ) {
        ghosts.forEach((ghost) => clearInterval(ghost.timerId));
        document.removeEventListener("keyup", movePacman);
        // setTimeout(function () {
        //   alert("Game Over!");
        // }, 500);
        scoreDisplay.innerHTML = "GAME OVER!";
      }
    }

    // check for win
    function checkForWin() {
      let pacDotAmt = document.getElementsByClassName("pac-dot").length;
      console.log("pacDot amount = ", pacDotAmt);

      if (!pacDotAmt) {
        ghosts.forEach((ghost) => clearInterval(ghost.timerId));
        document.removeEventListener("keyup", movePacman);
        scoreDisplay.innerHTML = `${score}, YOU WON!`;
      }
    }
  });
}
