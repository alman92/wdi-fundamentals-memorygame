/* JS for Memory Game */

// Card declarations

var cards = ['queen', 'queen', 'king', 'king'];

var cardInPlay = [];



// Game setup

// TODO scoreboard and reset button
// TODO random card placement
// TODO more than 4 cards?

function createBoard() {
    // Generate 4 cards
    for (var i = 0; i < cards.length; i++) {
        var newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.setAttribute('data-card', cards[i]); // Identify the card
        document.getElementById('game-board').appendChild(newCard);
        newCard.addEventListener('click', isTwoCards);
    }
}



// Game logic

function isTwoCards() {
    cardInPlay.push(this.getAttribute('data-card'));
    if ((this.getAttribute('data-card') === 'king')) {
        this.innerHTML = '<img src="PNG-cards-1.3/king_of_spades2.png" alt="King of Spades" />';
    } else if ((this.getAttribute('data-card') === 'queen')) {
        this.innerHTML = '<img src="PNG-cards-1.3/queen_of_spades2.png" alt="Queen of Spades" />';
    }
    console.log(cardInPlay.length);
    if (cardInPlay.length === 2) {
        isMatch(cardInPlay);
        cardInPlay = [];
    }
};

function isMatch(cardInPlay) {
    if (cardInPlay[0] === cardInPlay[1]) {
        alert("It's a match!");
        console.log("Success!");
    } else {
        alert("Please try again.");
        console.log("Not a match.");
        resetBoard();
    }

}

function resetBoard() {
    document.getElementById('resetButton').removeAttribute('class', 'hidden');
    for (var i = 0; i < cards.length; i++) {
        document.getElementsByClassName('card')[i].innerHTML = '';
    }
}

createBoard();
