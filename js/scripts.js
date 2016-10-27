//frontend

$(document).ready(function() {
  //form submission
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    //input may be anything, non alpha characters will be removed
    var input = $("#inputText").val();
    //result will be the new, encoded string
    var result = encodeSquare(input);
    $("#result").text(result);
  });
});

//backend

var encodeSquare = function(text) {
  //textStripped is the input text minus spaces and non alpha characters
  var textStripped = text.replace(/[\s\W]+/g, "");
  //textCharCount is the length of textStripped
  var textCharCount = textStripped.length;
  //squareSize is the largest perfect square that textStripped will fill completely, with overflow allowed up until the next largets perfect square - 1.
  var squareSize = Math.ceil(Math.sqrt(textCharCount));

  //encodedText will be used for output, and will have characters added in the new order inside the loop
  var encodedText = "";
  //first for loop simulates columns of the square
  for (colNum = 1; colNum <= squareSize; colNum ++) {
    console.log("colNum is now " + colNum);
    // inner for loop simulates rows
    for (rowNum = 1; rowNum < textCharCount; rowNum ++) {
      console.log("rowNum is now " + rowNum);
      console.log("current character is " + textStripped.charAt(((colNum - 1) + ((rowNum - 1) * squareSize))));
      //if we've reached an empty character past the end of textStripped, do nothing and since the index will be >= textCharCount, go back to the outer loop to increment colNum by 1 and restart
      if (!(textStripped.charAt(((colNum - 1) + ((rowNum - 1) * squareSize))))) {
        console.log("reached a falsey character in 'textStripped'");
      } else {
        //if we haven't reached the end of the textStripped, add the current character to the end of encodedText
        console.log("adding " + textStripped[(colNum - 1) + ((rowNum - 1) * squareSize)] + " to encodedText");
        encodedText += textStripped[(colNum - 1) + ((rowNum - 1) * squareSize)];
      };
    };
  };
  console.log(encodedText);
  return encodedText;
};
