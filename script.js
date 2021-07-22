let quotes = [];
let newAuthor = "";
let blockquoteDOM = document.getElementById("blockquote");
let authorDOM = document.getElementById("author");
let getQuoteBtn = document.getElementById("getQuoteBtn");
let i = 0;

class Quote {
  constructor(text, author) {
    this.conText = text;
    this.conAuthor = author;
  }
}

getQuoteBtn.addEventListener("click", getQuote);

function getQuote() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => response.json())
    .then(function (data) {
      quotes.push(data);
      let newQuote = new Quote(
        quotes[i].data[0].quoteText,
        quotes[i].data[0].quoteAuthor
      );
      i++;
      renderQuote(newQuote);
    });
}
function renderQuote(quote) {
  blockquoteDOM.textContent = quote.conText;
  authorDOM.textContent = quote.conAuthor;
}
