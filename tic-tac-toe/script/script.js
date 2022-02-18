const wrapperBox = document.querySelector(".wrapper-box");
const boxes = document.querySelectorAll(".box");
const whoIsMove = document.querySelector(".who-is-move");
const message = document.querySelector(".message");
const wrapperModalResult = document.querySelector(".wrapper-modal-result");
const fireworks = document.querySelector(".fireworks");
const closeButton = document.querySelector(".close-button");
const audio = new Audio();
let recordingFile = `./assets/audio/fireworks.mp3`;
let move = 0;
let counterGame = 1;
let result = "";

wrapperBox.addEventListener("click", (e) => {
  if (e.target.className === "box" && !e.target.textContent) {
    move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
    move++;
    check();
  }
});

const check = () => {
  const box = document.getElementsByClassName("box");
  const winnerArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winnerArray.forEach((_, i) => {
    if (
      box[winnerArray[i][0]].innerHTML === "X" &&
      box[winnerArray[i][1]].innerHTML === "X" &&
      box[winnerArray[i][2]].innerHTML === "X"
    ) {
      result = "x";
      prepareResult(result);
    } else if (
      box[winnerArray[i][0]].innerHTML === "O" &&
      box[winnerArray[i][1]].innerHTML === "O" &&
      box[winnerArray[i][2]].innerHTML === "O"
    ) {
      result = "o";
      prepareResult(result);
    } else if (move === 9 && result === "") {
      result = "nobody";
      prepareResult(result);
    }
  });
};

// show winner

const prepareResult = (winner) => {
  if (winner === "nobody") {
    message.innerHTML = `"${winner.toUpperCase()}" win... Try once more!`;
    wrapperModalResult.style.display = "block";
  } else {
    message.innerHTML = `"${winner.toUpperCase()}" win in ${move} moves!`;
    wrapperModalResult.style.display = "block";
    fireworks.style.display = "block";
    winRingtone();
  }
  winnerLocaStorage(winner);
};

const winnerLocaStorage = (win) => {
  const totalGameLength = 10;
  if (win === "nobody") {
    localStorage.setItem(
      `Play ${counterGame}`,
      `"${win.toUpperCase()}" win...`
    );
  } else {
    localStorage.setItem(
      `Play ${counterGame}`,
      `Winner is "${win.toUpperCase()}". In ${move} moves!`
    );
  }
  counterGame++;
  if (counterGame > totalGameLength) {
    counterGame = 1;
  }
};

// fireworks audio

const winRingtone = () => {
  audio.src = recordingFile;
  audio.currentTime = 0;
  audio.play();
  audio.loop = true;
};

// close modal window and reset game

const closeModal = () => {
  wrapperModalResult.style.display = "none";
  fireworks.style.display = "none";
  result = "";
  audio.pause();
  boxes.forEach((el) => {
    el.innerHTML = "";
  });
  resetMove();
};

closeButton.addEventListener("click", closeModal);
wrapperModalResult.addEventListener("click", closeModal);

// reset move

const resetMove = () => {
  move = 0;
  whoMove();
};

// change 'O' or 'X' who-is-move

function whoMove() {
  move % 2 === 0 ? (whoIsMove.innerHTML = "X") : (whoIsMove.innerHTML = "O");
}
wrapperBox.addEventListener("click", whoMove);
