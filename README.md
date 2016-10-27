Behaviors:

*Takes input string from form*

*DONE removes spaces and non-alpha characters from string*

*DONE counts up characters in only-alphachars string*

*DONE returns the edge length of the largest perfect square whose area is equal to or larger than # of characters in only-alphachars string*

*DONE rearranges chars according to square encoding method*

<!-- row 1: prints [0]th, [squareSize]th, [2 * squareSize]th, [3 * squareSize]th... characters up to [squareSize ^ 2]th
.
until out of chars. -->

<!-- 1, 9, 17, 25, 33, 41, 49, 57, 65,
2, 10, 18, 26,

start at (colNum)th, print every (squareSize)th until hit an empty,
start at (colNum + rowNum), print every (squareSize)th...
start at (colNum + rowNumb)* -->

*DONE Prints out new encoded string.*
