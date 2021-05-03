console.log("JS file is connected to HTML! Woo!")

var gameBoard = document.getElementById('game-board');
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

createBoard();


function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
	
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	var cardData = this.getAttribute('data-card');
	if (cardData === 'queen') {
		this.innerHTML = '<img src="img/queen.png">';
	} else if (cardData === 'king') {
		this.innerHTML = '<img src="img/king.png">';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		resetCardImg();
		cardsInPlay = [];
	}
}
function resetCardImg() {
	setTimeout(function () {
		var cardsToReset = document.getElementsByClassName('card');
		for (var i = 0; i < cardsToReset.length; i++) {					
			cardsToReset[i].innerHTML = '';
		}}, 1000);
}

function isMatch(twoCardArr) {
	var message = document.getElementById('message');
	if (twoCardArr[0] === twoCardArr[1]) {
		message.textContent = 'Match!';
	} else {
		message.textContent = 'No Match';
	}
	resetMessage();
}
function resetMessage() {
	setTimeout(function(){ 
		message.textContent = ''; 
	}, 1000);
}