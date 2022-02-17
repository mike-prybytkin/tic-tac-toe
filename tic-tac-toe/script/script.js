const wrapperBox = document.querySelector(".wrapper-box");
const whoIsMove = document.querySelector(".who-is-move");
const message = document.querySelector(".message");
const wrapperModalResult = document.querySelector(".wrapper-modal-result");
const closeButton = document.querySelector(".close-button");
const audio = new Audio();
let recordingFile = `./assets/audio/fireworks.mp3`;
let move = 0;
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
    message.innerHTML = `"${winner.toUpperCase()}" won... Try once more!`;
    wrapperModalResult.style.display = "block";
  } else {
    message.innerHTML = `"${winner.toUpperCase()}" won in ${move} moves!`;
    wrapperModalResult.style.display = "block";
    winRingtone();
  }
};

// fireworks audio

const winRingtone = () => {
  audio.src = recordingFile;
  audio.currentTime = 0;
  audio.play();
  audio.loop = true;
};

// close modal window and reload web-page

const closeModal = () => {
  wrapperModalResult.style.display = "none";
  location.reload();
};

closeButton.addEventListener("click", closeModal);
wrapperModalResult.addEventListener("click", closeModal);

// change 'O' or 'X' who-is-move

function whoMove() {
  move % 2 === 0 ? (whoIsMove.innerHTML = "X") : (whoIsMove.innerHTML = "O");
}
wrapperBox.addEventListener("click", whoMove);
