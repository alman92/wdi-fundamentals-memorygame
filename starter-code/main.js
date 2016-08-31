/* JS for Memory Game */

// Card declarations

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var score = 0;

var maxScore = cards.length / 2;



// Game setup

// TODO random card placement
// TODO more than 4 cards?

function createBoard() {
    // setup scoreboard
    document.getElementById('score').innerHTML = score;
    document.getElementById('maxScore').innerHTML = maxScore;

    shuffle(cards);

    // Generate 4 cards
    for (var i = 0; i < cards.length; i++) {
        var newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.setAttribute('data-card', cards[i]); // Identify the card
        document.getElementById('game-board').appendChild(newCard);
        newCard.addEventListener('click', isTwoCards);
    }

    // Activate reset button
    document.getElementById('restartButton').addEventListener('click', restartGame);
}



// Game logic

function isTwoCards() {
    // check if card is already flipped
    if (this.innerHTML) {
        return;
    } else {
        // show card value (aka flip card)
        cardsInPlay.push(this.getAttribute('data-card'));
        if ((this.getAttribute('data-card') === 'king')) {
            this.innerHTML = '<img src="PNG-cards-1.3/king_of_spades2.png" alt="King of Spades" />';
        } else if ((this.getAttribute('data-card') === 'queen')) {
            this.innerHTML = '<img src="PNG-cards-1.3/queen_of_spades2.png" alt="Queen of Spades" />';
        }
        // If two cards are in play, check if they match
        if (cardsInPlay.length === 2) {
            isMatch(cardsInPlay);
            // Reset cards in play to 0
            cardsInPlay = [];
        }
    }
};

function isMatch(cardsInPlay) {
    // if both cards in play match, update score
    if (cardsInPlay[0] === cardsInPlay[1]) {
        score++;
        document.getElementById('score').innerHTML = score;
        // check if game is completed
        if (score === maxScore) {
            console.log('You won!');
        }
    } else {
        console.log("Not a match.");
        // wait 2 seconds before resetting incorrect cards
        setTimeout(function() {
            resetBoard();
        }, 2000);
    }

}

function resetBoard() {
    for (var i = 0; i < cards.length; i++) {
        document.getElementsByClassName('card')[i].innerHTML = '';
    }
}

function restartGame() {
    // Reset score to 0
    score = 0;
    document.getElementById('score').innerHTML = score;

    // Flip all cards
    resetBoard();
}

createBoard();



// Other Functions

function shuffle() {

    // while there are remaining unshuffled elements
    for (var i = cards.length - 1; i > 0; i--) {

        // pick a remaining element
        var randomIndex = Math.floor(Math.random() * (i + 1));

        // swap the element with the current element
        var temp = cards[i];
        cards[i] = cards[randomIndex];
        cards[randomIndex] = temp;
    }
    return cards;
}
