const url = "https://type.fit/api/quotes";
const engLang = document.querySelector(".eng-lang");
const belLang = document.querySelector(".bel-lang");
const languages = document.querySelector(".languages");
const langButt = document.querySelectorAll(".lang-butt");
const switchJokeButton = document.querySelector(".switch-joke");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const mainImg = document.querySelector(".main-img");

async function getData() {
  const res = await fetch(url);
  const data = await res.json();

  showDataEng(data);
}

function showDataEng(data) {
  if (engLang.classList.contains("active-lang")) {
    let randomNumEng = Math.ceil(Math.random() * data.length);
    quote.textContent = data[randomNumEng].text;
    author.textContent = data[randomNumEng].author;
  }
}

getData(); // first launch after opening the page
switchJokeButton.addEventListener("click", getData);
engLang.addEventListener("click", getData);

// switch page lang

languages.addEventListener("click", (event) => {
  langButt.forEach((el) => el.classList.remove("active-lang"));
  event.target.classList.add("active-lang");
});

const engButtText = "say something smart";
const belButtText = "скажы што разумнае";
function Translate(lang) {
  if (lang === "bel") {
    switchJokeButton.textContent = belButtText;
  } else {
    switchJokeButton.textContent = engButtText;
  }
}

engLang.addEventListener("click", () => Translate("eng"));
belLang.addEventListener("click", () => Translate("bel"));

// belarus JSON

async function getQuotes() {
  const quotes = "script/data.json";
  const res = await fetch(quotes);
  const data = await res.json();
  showDataBel(data);
}
function showDataBel(data) {
  if (belLang.classList.contains("active-lang")) {
    let randomNumBel = Math.ceil(Math.random() * data.length);
    quote.textContent = data[randomNumBel].text;
    author.textContent = data[randomNumBel].author;
  }
}

getQuotes();
switchJokeButton.addEventListener("click", getQuotes);
belLang.addEventListener("click", getQuotes);

// switch image

function switchImage() {
  let randomNumImg = Math.ceil(Math.random() * 17);
  // 17 - number of pictures in a folder "img"
  mainImg.style.backgroundImage = `url("./assets/img/${randomNumImg}.png")`; //URL image
}
switchImage();
switchJokeButton.addEventListener("click", switchImage);
engLang.addEventListener("click", switchImage);
belLang.addEventListener("click", switchImage);
