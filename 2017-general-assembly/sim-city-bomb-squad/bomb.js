document.addEventListener("DOMContentLoaded", function() {
	console.log("DOM loaded");
	var time = 3000; // display in seconds
	var countdownTimer = document.getElementById('timer');
	var wireColors = ['blue', 'red', 'green', 'white', 'yellow'];
	var wiresToCut = [];
	
	// generate which wires need to be cut randomly
	generateWires();

	// start the timer
	var Interval = setInterval(tick, 10);
	
	// add eventListener for changing image of wire to cut
	addAllEventListeners();
	
	//functions
	function generateWires() {
		for (var i = 0; i < wireColors.length; i++) {
			wiresToCut.push({color: wireColors[i], cut: Math.random() > 0.5 }); // cut will evaluate to T||F
		}													
	}
	function tick() {
		time -= 1;
		countdownTimer.innerText = time / 100;

		if(time <= 0) {
			clearInterval(Interval);
			gameOverConditions();
		}
	}
	function addAllEventListeners() {
		var wireImages = document.querySelectorAll('#box img');
		
		for (var i = 0; i < wireImages.length; i++) {
			wireImages[i].addEventListener('click', cutWire);
		}
	}
	function removeAllEventListeners() {
		var wireImages = document.querySelectorAll('#box img');
		
		for (var i = 0; i < wireImages.length; i++) {
			wireImages[i].removeEventListener('click', cutWire);
		}
	}
	function gameOverConditions() {
		clearInterval(Interval);
		document.getElementsByTagName('body')[0].classList.remove('unexploded');
		document.getElementsByTagName('body')[0].classList.add('exploded');
		removeAllEventListeners();	//wires can no longer be cut
	}
	function gameWinConditions() {
		clearInterval(Interval);
		document.getElementById('title').style.display = 'block';
		removeAllEventListeners();
	}
	function cutWire() {
		this.src = './img/cut-' + this.id + '-wire.png';
		
		if (wireIsGood(this.id)) {
			this.removeEventListener('click', cutWire); // don't allow multiple clicks
			
			if (hasWon) {
				gameWinConditions();
			}
		} else {
			gameOverConditions();
		}
	}
	// helper function for cutWire()
	function wireIsGood(color) {
		// iterate through each wire
		for (var i = 0; wiresToCut.length; i++) {
			// check if looking at the right color
			if (color === wiresToCut[i].color) {
				if (wiresToCut[i].cut) {
					wiresToCut[i].cut = false;
					return true;
				}
				return false;
			}
		}
	}
	// helper function
	function hasWon() {
		// check if no wires need to be cut (none have cut == true;)
		for (var i = 0; i < wiresToCut.length; i++) {
			if (wiresToCut[i].cut) {
				return false;
			}
			return true;
		}
	}

});

