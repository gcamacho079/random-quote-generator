var author;
var quote;

$(document).ready(function() {
  console.log("HI!");
  $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
    author = JSON.stringify(json.author);
    quote = JSON.stringify(json.quote);
    author = author.substring(1, author.length - 1);
    console.log(author);
    $("#quoteAuthor").html(author);
    console.log(quote);
    $("#quoteText").html(quote);
  });

});
