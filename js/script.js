var author;
var quote;
var totalLength;

var randomQuote = {
  init: function() {
    randomQuote.getQuote();
  },

  getQuote: function() {
    $.getJSON("https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json", function(json) {
      author = JSON.stringify(json.author);
      quote = JSON.stringify(json.quote);
      randomQuote.removeQuotes();
      $("#quoteAuthor").html(author);
      $("#quoteText").html(quote);
      tweet.init();
    });
  },

  removeQuotes: function() {
    author = author.substring(1, author.length - 1);
    return author;
  }
};

var tweet = {
  init: function() {
    tweet.checkLength();
  },

  checkLength: function() {
    totalLength = author.length + quote.length;
    console.log(totalLength);
    if (totalLength < 141) {
      console.log("Let's tweet this!");
    }
    else {
      tweet.shortenQuote();
    }
  },

  shortenQuote: function() {
    console.log("We've gotta work on this one...");
  }
}

$(document).ready(randomQuote.init);
