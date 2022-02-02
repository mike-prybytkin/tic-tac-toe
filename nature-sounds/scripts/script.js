// --- control player ---

const audio = new Audio();
let recordingFile = `./assets/audio/solovey.mp3`; // default bird sound
const audioLogo = document.querySelector(".audio-logo");

function controlLogoPlayer() {
  //switch logo and add class "pause"
  audioLogo.classList.toggle("pause");
}

function controlPlayer() {
  //player controls

  if (audioLogo.classList.contains("pause")) {
    audio.src = recordingFile;
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
  }
}

audioLogo.addEventListener("click", controlLogoPlayer);
audioLogo.addEventListener("click", controlPlayer);

//--- switch another bird ---

const btnsBird = document.querySelector(".btns-bird");
const btnBird = document.querySelectorAll(".btn-bird");
const mainImage = document.querySelector(".main-image");

function changeBird(event) {
  let dataAttribute = event.target.dataset.bird;
  if (event.target.classList.contains("btn-bird")) {
    mainImage.style.backgroundImage = `url("./assets/img/${dataAttribute}.jpg")`; //URL image
    recordingFile = `./assets/audio/${dataAttribute}.mp3`; // URL bird sound
    audioLogo.classList.remove("pause");
    audio.pause();
  }
}

btnsBird.addEventListener("click", changeBird);

//--switch buttons colour--

btnsBird.addEventListener("click", (event) => {
  btnBird.forEach((el) => el.classList.remove("active"));
  event.target.classList.add("active");
});
