const url = "https://type.fit/api/quotes";
const engLangButton = document.querySelector(".eng-lang");
const belLangButton = document.querySelector(".bel-lang");
const switchJokeButton = document.querySelector(".switch-joke");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

// async function getData() {
//   const res = await fetch(url);
//   const data = await res.json();

//   showDataEng(data);
// }

// function showDataEng(data) {
//   let randomNum = Math.ceil(Math.random() * data.length);
//   console.log(randomNum);
//   quote.textContent = data[randomNum].text;
//   author.textContent = data[randomNum].author;
// }

// getData(); // first launch after opening the page
// switchJokeButton.addEventListener("click", getData);

// belarus JSON

async function getQuotes() {
  const quotes = "script/data.json";
  const res = await fetch(quotes);
  const data = await res.json();
  showDataBel(data);
}
function showDataBel(data) {
  let randomNum = Math.ceil(Math.random() * data.length);
  console.log(randomNum);
  quote.textContent = data[randomNum].text;
  author.textContent = data[randomNum].author;
}

getQuotes();
switchJokeButton.addEventListener("click", getQuotes);
