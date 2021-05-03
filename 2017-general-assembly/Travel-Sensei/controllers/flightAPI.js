require('dotenv').config();
var express = require('express');
var QPXApi = require('qpx-api');
 
var QPXApiClient = new QPXApi({
  api_key: process.env.TRAVEL_KEY,
  timeout: 9000 // timeout in milleseconds 
});

var router = express.Router();
router.route('/:cityName/flightdata')
  .get(function(req, res) {
    var location = req.params.cityName;
    var code;
    if(location == "nagoya"){
        code = "NGO"
    }else{
        code = "NRT"
    }

    var data = {
        passengers: { adultCount: 1 },
        slice: [
            {
            origin: "SEA",
            destination: code,
            date: "2017-5-5"
            }
        ],
        "solutions": 10
    };
    
        QPXApiClient.search(data, function (err, jsonResponse) {
            var airObj =  {   
                price : jsonResponse.trips.tripOption[0].pricing[0].saleTotal,
                company: jsonResponse.trips.data.carrier[0].name,
                data : jsonResponse.trips.tripOption[0].slice[0].segment[0].duration
            } 
        return res.send({airObj});
    });
  });

module.exports = router;