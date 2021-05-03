// requres and global variables

var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var sequelize = require ('sequelize');

var app = express();

// get and use statements

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));

app.use('/teams', require('./controllers/teams'));

// routes

app.get('/', function(req, res) {
	res.render('home');
});


// listen
app.listen(3000);