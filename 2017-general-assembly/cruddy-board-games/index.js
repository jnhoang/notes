var express = require('express');
var path = require('path');
var fs = require('fs');
var ejsLayouts = require("express-ejs-layouts");
var bodyParser = require('body-parser');

var app = express();
app.use(ejsLayouts);

// this sets a static directory for the views
app.use(express.static(path.join(__dirname, 'static')));

// tell your app to use the module
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

// Read
app.get('/', function(req, res) {
  res.render('home', {games: getGames()});
});

app.get('/boardgames/:id', function(req, res) {
  var game = getGames()[req.params.id];
  game.id = req.params.id;
  res.render('boardgame-detail', {game: game});
});

// Create
app.get('/boardgames/new', function(req, res) {
  res.render('boardgame-create');
});

app.post('/boardgames', function(req, res) {
  var games = getGames();
  games.push(req.body);
  saveGames(games);

  var path = '/boardgames/' + (games.length - 1);
  res.redirect(path);
});

// Update
app.get('/boardgames/:id/edit', function(req, res) {
  var game = getGames()[req.params.id];
  game.id = req.params.id;
  res.render('boardgame-edit', {game: game});
});

app.put('/boardgames/:id', function(req, res) {
  console.log("body:", req.body);

  var games = getGames();
  games[req.params.id] = req.body;
  saveGames(games);

  res.send(req.body);
});

// Delete
app.delete('/boardgames/:id', function(req, res) {
  var games = getGames();

  // Set the index to undefined so every other position isn't screwed up.
  games[req.params.id] = undefined;
  saveGames(games);

  res.send(req.body);
});

// Read list of games from file.
function getGames() {
  var fileContents = fs.readFileSync('./games.json');
  var games = JSON.parse(fileContents);
  return games;
}

// Write list of games to file.
function saveGames(games) {
  fs.writeFileSync('./games.json', JSON.stringify(games));
}

var port = 3000;
console.log("http://localhost:" + port);
app.listen(port);
