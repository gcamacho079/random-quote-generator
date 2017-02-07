var author;
var quote;
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
      randomQuote.removeQuotes();
      $("#quoteAuthor").html(author);
      $("#quoteText").html(quote);
      randomQuote.tweetabilityCheck();
    });
  },

  removeQuotes: function() {
    author = author.substring(1, author.length - 1);
    return author;
  },

  tweetabilityCheck: function() {
    totalLength = author.length + quote.length;
    console.log(totalLength);
    if (totalLength < 137) {
      tweetableQuote = quote + " - " + author;
      $("#twitter-button").show();
      console.log(tweetableQuote);
    }
    else {
      $("#twitter-button").hide();
    }
  }
};

var tweet = {
  init: function() {
    tweet.makeLink();
  },

  makeLink: function() {
  }
};

$(document).ready(randomQuote.init);
