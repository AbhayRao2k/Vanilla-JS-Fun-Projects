import codingQuotes from "./quotes.js";

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const newQuote = document.getElementById("new-quote");

const randomQuoteGenerator = () => {
  const randomIndex = Math.floor(Math.random() * codingQuotes.length);

  quoteText.textContent = codingQuotes[randomIndex].text;
  quoteAuthor.textContent = codingQuotes[randomIndex].author;
};

randomQuoteGenerator()

newQuote.addEventListener("click", randomQuoteGenerator);