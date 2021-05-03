require('dotenv').config();
var express = require('express');
var Yelp = require('yelp');
var yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
})

var router = express.Router();

// /GET, search yelp for destination

router.route('/data/:cityName')
  .get(function(req, res) {
    var location = req.params.cityName;
    yelp.search({
      term: 'food',
      location: location,
      limit: 6,           // only 5 results returned
      sort: 2             // 2 = highest rated results
    })
    .then(function(foodData) {
      var yelpFoodArr = foodData.businesses;
      yelp.search({
        term: 'local flavor',
        location: location,
        limit: 6,
        sort: 2
      }).then(function(localData){
        var yelpLocalArr = localData.businesses;
        return res.send({yelpFoodArr: yelpFoodArr, yelpLocalArr: yelpLocalArr});
      })
      .catch(function(err){
        return res.send({message: 'error while searching for businesses' })
      })  
    })
    .catch(function(err) {
      return res.send({message: 'error while searching for food'})
    });
});
module.exports = router;