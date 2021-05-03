function Car(make, model, year, color, seats) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.seats = seats;

	this.previousOwners = [];
	this.owner = manufacturer;
	this.running = false;

	this.sell = function(newOwner) {
		this.previousOwners.push(this.owner);
		this.owner = newOwner;
	}
	this.paint = function(newColor) {
		this.color = newColor;
	}
}
Car.prototype.passengers = [];

Car.prototype.pickUp = function(name) {
	if (this.running) {
		console.log("driving to pickup " + name);
		passengers.push(name);
		return true;
	} else {
		console.log("unable to pickup " + name + ":car not running");
		return false;
	}
}
Car.prototype.dropOff = function(name) {
	if (this.passengers.includes(name) && this.running) {
		var toDropOff = this.passengers.indexOf(name);
		this.passengers = this.passengers.splice(toDropOff, 1);
		console.log("driving to drop off " + name);
		return true;
	} else {
		console.log("unable to drop off: unknown passenger or car not running");
		return false;
	}
}
Car.prototype.passengerCount = function() {
	console.log(this.passengers.length);
}

Car.prototype.start = function() {
	this.running = true;
}
Car.prototype.off = function() {
	this.running = false;
}
Car.prototype.driveTo = function(destination) {
	if (this.running) {
		console.log("driving to " + destination);
	} else {
		console.log("car does not move");
	}
}
Car.prototype.park = function() {
	if (!this.running) {
		console.log("parked!!");
		return true;
	} else {
		console.log("unable to park while car is on");
	}
}















