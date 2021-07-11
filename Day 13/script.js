let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

randomQuote();
async function randomQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = `- ${data.author}`;
}

document.querySelector(".reload-btn").addEventListener("click", randomQuote);
