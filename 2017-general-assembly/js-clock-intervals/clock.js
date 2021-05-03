document.addEventListener("DOMContentLoaded", function() {
	console.log("All DOM content has been loaded.");
	
	// global variable declarations
	var secsHand = document.getElementById('second');
	var minsHand = document.getElementById('minute');
	var hourHand = document.getElementById('hour');
	var today = new Date();
	var secs  = today.getSeconds();
	var mins  = today.getMinutes();
	var hours = (today.getHours()) % 12;
	
	// set correct time per variables and updates every 1 second
	correctStartTimes();
	setInterval(checkUpdates, 1000);

	//functions
	function hoursUpdate() {
		if (mins === 59 && secs === 0) {
			hours = (hours + 1) % 24;
		}
		var hourRotation = (hours / 12) * 360;
		rotateHandbyDegree(hourHand, hourRotation);
	}
	function minsUpdate() {
		if (secs === 0) {
			mins = (mins + 1) % 60;
		}
		var minsRotation = (mins * 6) % 360;
		rotateHandbyDegree(minsHand, minsRotation);
	}
	function secsRotation() {
		var secsDegree = (secs / 60) * 360 % 360;
		rotateHandbyDegree(secsHand, secsDegree);
		secs = (secs + 1) % 60;
	}
	function checkUpdates() {
		hoursUpdate();
		minsUpdate();
		secsRotation();
	}
	function rotateHandbyDegree(hand, degree) {
		hand.style.transform = 'rotate(' + degree + 'deg)';
	}
	function correctStartTimes() {
		hoursUpdate();
		minsUpdate();
		secsRotation();
	}
});