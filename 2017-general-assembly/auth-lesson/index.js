// global variables & requires
require('dotenv').config();
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var bcrypt = require('bcrypt');
var flash = require('connect-flash');
var passport = require('./config/passportConfig.js');
var isLoggedin = require('./middleware/isLoggedin');
var app = express();

// set and use statements
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(ejsLayouts);
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	res.locals.alerts = req.flash();
	next();
})

// controllers
app.use('/auth', require('./controllers/auth'));


// routes
app.get('/', function(req, res) {
	res.render('home');
});

app.get('/profile', isLoggedin, function(req, res) {
	res.render('profile');
});


// listen
app.listen(3000);















