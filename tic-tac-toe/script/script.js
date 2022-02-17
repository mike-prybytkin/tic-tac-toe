const wrapperBox = document.querySelector(".wrapper-box");
const whoIsMove = document.querySelector(".who-is-move");
// const box = document.querySelectorAll(".box");
let move = 0;

wrapperBox.addEventListener("click", (e) => {
  if (e.target.className === "box") {
    if (move % 2 === 0) {
      e.target.innerHTML = "X";
      move++;
    } else {
      e.target.innerHTML = "O";
      move++;
    }
  }
});

// text who-is-move

function whoMove() {
  if (move % 2 === 0) {
    whoIsMove.innerHTML = "X";
  } else {
    whoIsMove.innerHTML = "O";
  }
}
wrapperBox.addEventListener("click", whoMove);
