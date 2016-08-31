/* JS for Memory Game */

// Card declarations
var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";



// Game setup

function createBoard() {
    // Generate 4 cards
    for (i = 0; i < 4; i++) {
        console.log(i);
        var newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.innerHtml= 'hello';
        document.getElementById('game-board').appendChild(newCard);
    }
}

createBoard();
//var gameBoard = document.getElementById('game-board');





// Game logic
