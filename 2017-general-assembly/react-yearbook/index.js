var express = require('express');
var request = require('request');
var app = express();

app.use(express.static(__dirname + '/public/'));

app.get('/api/people', function(req, res) {
  request('https://randomuser.me/api?seed=wdi&results=50', function(err, response, data) {
    res.send(JSON.parse(data).results);
  });
});

app.get('/api/people/:idx', function(req, res) {
  var idx = parseInt(req.params.idx);
  request('https://randomuser.me/api?seed=wdi&results=50', function(err, response, data) {
    var people = JSON.parse(data);
    if (idx >= 0 && idx < people.results.length) {
      res.send(people.results[idx]);
    } else {
      res.send({error: 'No result found'});
    }
  });
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
