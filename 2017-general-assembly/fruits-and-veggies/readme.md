#Fruits and Veggies

The goal of this assignment is to build a simple game to help people learning to differentiate between fruits and vegetables. 

The app should be built entirely using AngularJS (no jQuery).

##Getting Started

* Fork and clone this repository
* Run `npm install` to install dependencies
  * `npm start` - start the BrowserSync server
  * `npm run lint:css` - lint CSS
  * `npm run lint:js` - lint JS

##Requirements

A 3 column layout using Bootstrap has been created for you.

####Column 1: Fruits
* Empty when the app loads
* Each item has a right arrow which when clicked will remove the item and move it back to the middle column (column 2)

####Column 2: Fruits and Veggies
* Contains all of the fruits and vegetables when the app loads (combined and shuffled randomly)
* Each item has a left and a right arrow
    * Left arrow removes the item from this list and puts it in the left (Fruit) list.
    * Right arrow removes the item from this list and puts it in the right (Vegetables) list.

####Column 3: Vegetables
* Empty when the app loads
* Each item has a left arrow which when clicked will remove the item and move it back to the middle column (column 2)

Once all fruits / vegetables are sorted (the middle list is empty) all incorrect items in the other two lists should be highlighted in red. If all of the items are in the correct list the app should tell the user that they won.

###Hints
* All 3 lists should be in the same controller. ng-repeat is your best friend.
* A test file is provided for you, which only has a few fruits and veggies. This will make testing easier, because `fruit_and_veggies.js` has quite a few fruits and veggies!

##Final Product

![Mockup](mockup.jpg)

##Bonuses

* Add an up / down arrow to each list item in the fruits and vegetable list (not the middle list) which when clicked will move the item up / down the list.
* Require the user to alphabetize the list after sorting in to vegetables / fruits.

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
