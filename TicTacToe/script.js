let boxes = document.querySelectorAll(".btn");
let resetButton = document.querySelector(".reset-button");
let newGameButton = document.querySelector(".new-game");
let winner = document.querySelector(".winner");

let turn0 = true;
let isWin = false;
let count = 0;

const winPatterns = [
  [0, 4, 8],
  [2, 4, 6],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");

    if (turn0) {
      box.innerText = "O";
      box.style.color = "green";
      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.color = "red";
      turn0 = true;
    }
    count++;

    box.disabled = true;

    checkWinner();
  });
});

function checkWinner() {
  for (let patterns of winPatterns) {
    let val1 = boxes[patterns[0]].innerText;
    let val2 = boxes[patterns[1]].innerText;
    let val3 = boxes[patterns[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        isWin = true;
        console.log("Winner " + val1);
        displayWinner(val1);
        endGame();
      } else if (count === 9) {
        endGame();
        break;
      }
    }
  }
}

function endGame() {
  if (count === 9 && isWin === false) {
    displayWinner();
    console.log("draw");
  } else {
    boxes.forEach((box) => {
      box.disabled = true;
    });
  }
}

resetButton.addEventListener("click", () => {
  freshGame();
});

newGameButton.addEventListener("click", () => {
  freshGame();
});

function freshGame() {
  count = 0;
  turn0 = true;
  isWin = false;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  winner.innerText = " ";
}

function displayWinner(val1 = "draw") {
  if (val1 === "draw") {
    winner.innerText = `Try again its a draw`;
  } else {
    winner.innerText = `Congratulations Winner is ${val1}`;
  }
}
