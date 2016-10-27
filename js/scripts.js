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
  for (colNum = 1; colNum <= squareSize; colNum ++) {
    console.log("colNum is now " + colNum);
    for (rowNum = 1; rowNum < textCharCount; rowNum ++) {
      console.log("rowNum is now " + rowNum);
      console.log("current character is " + textStripped.charAt(((colNum - 1) + ((rowNum - 1) * squareSize))));
      if (!(textStripped.charAt(((colNum - 1) + ((rowNum - 1) * squareSize))))) {
        console.log("reached a falsey character in 'textStripped'");
      } else {
      console.log("adding " + textStripped[(colNum - 1) + ((rowNum - 1) * squareSize)] + " to encodedText");
      encodedText += textStripped[(colNum - 1) + ((rowNum - 1) * squareSize)];
      };
    };
  };
  console.log(encodedText);
  return encodedText;
};
