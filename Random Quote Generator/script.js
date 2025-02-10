import codingQuotes from "./quotes.js";

const quoteText = document.querySelector(".quote-text");
const quoteAuthor = document.querySelector(".quote-author");
const newQuote = document.getElementById("new-quote");

// Adding copy to clipboard feature
const copyButton = document.getElementById("copy-quote");

copyButton.addEventListener("click", () => {
  const fullQuote = `"${quoteText.textContent}" ${quoteAuthor.textContent}`;
  navigator.clipboard.writeText(fullQuote)
    .then(() => alert("Quote copied!"))
    .catch(err => console.error("Failed to copy: ", err));
});

// Store the last quote index
let lastIndex = -1;

const randomQuoteGenerator = () => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * codingQuotes.length);
  } while (randomIndex === lastIndex); // Keep generating until it's different

  lastIndex = randomIndex; // Update lastIndex

  quoteText.textContent = codingQuotes[randomIndex].text;
  quoteAuthor.textContent = `- ${codingQuotes[randomIndex].author}`;
};

randomQuoteGenerator();

newQuote.addEventListener("click", randomQuoteGenerator);