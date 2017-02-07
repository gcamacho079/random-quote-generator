var author;
var quote;
var quoteIdentifier;
var totalLength;
var tweetableQuote;

var randomQuote = {
  init: function() {
    randomQuote.getQuote();
  },

  getQuote: function() {
    $.getJSON("https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json", function(json) {
      author = JSON.stringify(json.author);
      quote = JSON.stringify(json.quote);
      quoteID = JSON.stringify(json.id);
      quoteID = parseInt(quoteID);
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
    if (totalLength < 137) {
      $("#twitter-button").show();
      console.log(quote + " - " + author);
    }
    else {
      $("#twitter-button").hide();
    }
  }
};

$(document).ready(randomQuote.init);
