var author;
var quote;

var randomQuote = {
  init: function() {
    randomQuote.getQuote();
    console.log("HELLOW!")
  },

  getQuote: function() {
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
      author = JSON.stringify(json.author);
      quote = JSON.stringify(json.quote);
      randomQuote.authorUnquote();
      console.log(author);
      $("#quoteAuthor").html(author);
      console.log(quote);
      $("#quoteText").html(quote);
    });
  },

  authorUnquote: function() {
    author = author.substring(1, author.length - 1);
    return author;
  }
};

$(document).ready(randomQuote.init);
