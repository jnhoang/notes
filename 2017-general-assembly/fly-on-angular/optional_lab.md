#Combining Angular and Express

Using the Airplanes API starter, create an Angular CRUD app that does the following.

##Requirements

* Displays all airplanes contained by our API
 -- * Each airplane should have a link to a show page
  
  * Each airplane should also have an image (will involve altering the Airplane schema)
 
  * There should be a search bar that can filter the list of airplanes
* Allows creation of new airplanes

##Getting Started

* Work with 1-2 other people if desired
* Ensure that the API endpoints are working as expected, using a client like Postman
* Think about the design of the app and the components necessary
  * Views (via the Angular router)
  * Resources (via Angular resource)
  * Organization (data, controllers, services)
  * Forms (search bar, new airplane)
* Make it look good (CSS)
* Work incrementally and save work frequently (via git)

##Bonuses

* Instead of displaying every airplane, add pagination to the application
  * This will involve accessing `req.query` and limit/offset
  * This *may* involve altering the search bar
