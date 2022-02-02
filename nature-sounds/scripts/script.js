//switch main image

const btnsBird = document.querySelector(".btns-bird");
const btnBird = document.querySelectorAll(".btn-bird");
let mainImage = document.querySelector(".main-image");

function changeImage(event) {
  mainImage.style.backgroundImage = `none`;
  let dataAttribute = event.target.dataset.bird;
  if (event.target.classList.contains("btn-bird")) {
    mainImage.style.backgroundImage = `url("./assets/img/${dataAttribute}.jpg")`;
  }
}

btnsBird.addEventListener("click", changeImage);
