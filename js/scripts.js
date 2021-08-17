$(document).ready(function () {
  $("#deckForm").submit(function (event) {
    event.preventDefault();
    $("#result").children("li").remove();
    const rank = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
    const suit = ["hearts", "diamonds", "spades", "clubs"];

    suit.forEach(suit => {
      rank.forEach(rank => {
        $("ul#result").append("<li>" + rank + " of " + suit + "</li>");
      });  
    });
    $("#result").show();
  });
});