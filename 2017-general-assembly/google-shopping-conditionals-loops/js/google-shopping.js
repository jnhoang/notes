var data = require('../products.json');

// Write your solutions below

// Count of all results with the kind: shopping#product
var counter = 0;
data.items.forEach(function (theProductObject, i) {
	if (theProductObject.kind) {
		counter++;
	}
});
// info also stored as "currentItemCount"
console.log("shopping#product: " + counter + "\n");

// Prints titles of items on backorder
data.items.forEach(function(theProductObject, i) {
	if (theProductObject.product.inventories[0].availability === "backorder") {
		console.log ("Items on backorder: " + theProductObject.product.title);
	}	
});
console.log("\n");

// print titles of items with more than one image link
data.items.forEach(function(theProductObject, i) {
	if (theProductObject.product.images.length > 1) {
		console.log("Items with multiple images: " + theProductObject.product.title);
	}
});
console.log("\n");

//Print all Canon products in the items
data.items.forEach(function(theProductObject, i) {
	if (theProductObject.product.brand === "Canon") {
		//if Canon product && is sold by eBay
		console.log("Canon product: " + theProductObject.product.title);	
	}
});
console.log("\n");

//Print all Canon products sold on eBay
data.items.forEach(function(theProductObject, i) {
	if (theProductObject.product.brand === "Canon" && 
		theProductObject.product.author.name.substring(0, 4) === "eBay") {
		console.log("Canon product sold by eBay: " + theProductObject.product.title);
		console.log("Sellar: " + theProductObject.product.author.name);
		}
});
console.log("\n");

//Print all products with their brand, price, and an image link
data.items.forEach(function(theProductObject, i) {
	console.log("Brand: " + theProductObject.product.brand);
	console.log("Price: " + theProductObject.product.inventories[0].price);
	console.log("Image: " + theProductObject.product.images[0].link + "\n");
})
console.log("\n");










