$(document).ready(function () {
  $("#sentenceForm").submit(function (event) {
    event.preventDefault();
    const sentence = ($("#sentence").val()).split(' ');
    const shortSentence = sentence.filter(word => word.length > 2);
    console.log(shortSentence);
    const reverseSentence = shortSentence.reverse();
    console.log(reverseSentence);
    $("#result").text(reverseSentence.join(' '));
  });
});