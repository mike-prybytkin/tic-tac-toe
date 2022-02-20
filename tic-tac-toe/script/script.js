const wrapperBox = document.querySelector(".wrapper-box");
const boxes = document.querySelectorAll(".box");
const totalItem = document.querySelectorAll(".total-item");
const whoIsMove = document.querySelector(".who-is-move");
const message = document.querySelector(".message");
const wrapperModalResult = document.querySelector(".wrapper-modal-result");
const fireworks = document.querySelector(".fireworks");
const closeButton = document.querySelector(".close-button");
const songs = ["fireworks", "click", "kva-kva-kvaa-fail"];
let move = 0;
let counterGame = 1;
let result = "";
const audio = new Audio();

wrapperBox.addEventListener("click", (e) => {
  if (e.target.className === "box" && !e.target.textContent) {
    move % 2 === 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "O");
    move++;
    audioPlayer(songs[1]);
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
    audioPlayer(songs[2]);
  } else {
    message.innerHTML = `"${winner.toUpperCase()}" win in ${move} moves!`;
    wrapperModalResult.style.display = "block";
    fireworks.style.display = "block";
    audioPlayer(songs[0]);
  }
  winnerLocalStorage(winner);
};

// save value in Local Storage

const totalGameLength = 10;
const winnerLocalStorage = (win) => {
  let date = new Date().toLocaleTimeString();
  if (win === "nobody") {
    localStorage.setItem(
      `Play ${counterGame}`,
      `"${win.toUpperCase()}" win... ${date}`
    );
  } else {
    localStorage.setItem(
      `Play ${counterGame}`,
      `Winner is "${win.toUpperCase()}". In ${move} moves! ${date}`
    );
  }
  counterGame++;
  if (counterGame > totalGameLength) {
    counterGame = 1;
  }

  getTotalValue();
};

// get value from Local Storage and show in module window

const getTotalValue = () => {
  totalItem.forEach((el, i) => {
    localStorage.getItem(`Play ${i + 1}`) === null
      ? (el.innerHTML = "- - -")
      : (el.innerHTML = localStorage.getItem(`Play ${i + 1}`));
  });
};

// audio player
const audioPlayer = (song) => {
  audio.src = `./assets/audio/${song}.mp3`;
  audio.currentTime = 0;
  setTimeout(() => audio.play(), 100);
};

// close modal window and reset game

const closeModal = () => {
  wrapperModalResult.style.display = "none";
  fireworks.style.display = "none";
  result = "";
  boxes.forEach((el) => {
    el.innerHTML = "";
  });
  resetMove();
  audioPlayer(songs[1]);
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
