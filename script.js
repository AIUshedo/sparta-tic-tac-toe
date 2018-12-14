$(function() {



var winConditions = [
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6]
]
var winner = false;
  var currentPlayer = true;
  var $gridSquares = $("td");

  for (var i = 0; i < $gridSquares.length; i++) {
    $gridSquares.eq(i).on("click", squareClicked);
      }
function squareClicked() {
  var clicked = $(this);
  if (currentPlayer){
    placeX(clicked);
  } else {
    placeO(clicked);
  }
}

function placeX(clicked) {
  clicked.addClass("X");
  clicked.html("X");
  console.log(clicked.attr("class"));
  currentPlayer = false;
  checkwin();

}
  function placeO(clicked) {
    if (clicked.attr("class") != null) {
      console.log("This square is full!");
      return;
    } else {
       clicked.addClass("O");
       clicked.html("O");
       console.log(clicked.attr("class"));
       currentPlayer = true;
       checkwin();
     }
  }
function checkWin() {
  for (var i = 0; i < winConditions.length; i++) {
    if ($gridSquares.eq(winConditions[i][0]).html() == "X" &&
    $gridSquares.eq(winConditions[i][1]).html() == "X" &&
    $gridSquares.eq(winConditions[i][2]).html() == "X") {
        console.log("X has won!");
    } else if (($gridSquares.eq(winConditions[i][0]).html() == "O" &&
    $gridSquares.eq(winConditions[i][1]).html() == "O" &&
    $gridSquares.eq(winConditions[i][2]).html() == "O") {
        console.log("O has won!");
      }

  }
}

})

})
}
});
