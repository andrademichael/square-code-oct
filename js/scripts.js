//frontend

$(document).ready(function() {
  //form submission
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    //input should be integer only
    var input = $("#inputText").val();
    //result will be a boolean
    var result = encodeSquare(input);
    $("#result").text(result);
  });
});

//backend

var encodeSquare = function(text) {
  var textStripped = text.replace(/[\s\W]+/g, "");
  console.log(textStripped);
  var textCharCount = textStripped.length;
  console.log(textCharCount);
  var squareSize = Math.ceil(Math.sqrt(textCharCount));
  console.log(squareSize);

  var encodedText = "";
  debugger;
  for (rowNum = 0; rowNum < squareSize; rowNum ++) {
    console.log("rowNum is now " + rowNum);
    for (colNum = 0; colNum < squareSize; colNum ++) {
      console.log("colNum is now " + colNum);
      if (!(textStripped[rowNum + colNum])) {
        console.log("reached a falsey character in 'textStripped'");
        break
      } else {
      encodedText += (textStripped[rowNum + colNum]);
      };
    };
  };
  console.log(encodedText);
  return encodedText;
};
