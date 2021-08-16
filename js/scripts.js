$(document).ready(function () {
  $("#deckForm").submit(function (event) {
    event.preventDefault();
    $("#result").children("li").remove();
    const ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
    const hearts = [];
    const spades = [];
    const clubs = [];
    const diamonds = [];
    ranks.forEach(element => {
      hearts.push(element.concat(" of hearts"));
    });
    ranks.forEach(element => {
      spades.push(element.concat(" of spades"));
    });
    ranks.forEach(element => {
      clubs.push(element.concat(" of clubs"));
    });
    ranks.forEach(element => {
      diamonds.push(element.concat(" of diamonds"));
    });
    const deck = hearts.concat(diamonds, spades, clubs);
    deck.forEach(element => {
      $("ul#result").append("<li>" + element + "</li>")
    });
    $("#result").show();
  });
});