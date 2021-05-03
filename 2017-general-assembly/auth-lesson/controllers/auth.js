var express = require('express');
var db = require('../models');
var passport = require('../config/passportConfig.js');

var router = express.Router();

// routes
router.get('/login', function(req, res) {
	res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
	successRedirect:'/',
	successFlash: 'Good job, you logged in',
	failureRedirect: '/auth/login',
	failureFlash: 'Invalid Credentials'
}));

router.get('/signup', function(req, res) {
	res.render('auth/signup');
});

router.post('/signup', function(req, res) {
	console.log(req.body);

	db.user.findOrCreate({
		where: {email: req.body.email},
		defaults: {
			username: req.body.username,
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			password: req.body.password
		}
	})
	.spread(function(user, wasCreated) {	// note promise for findOrCreate is .spread()
		if(wasCreated) {
			//good
			passport.authenticate('local', {
				successRedirect: '/',
				successFlash: 'Account created and logged in'
			})(req, res);
		} else {
			// bad
			req.flash('error', 'Email already exists');
			res.redirect('/auth/login');
		}
	})
	.catch(function(err) {
		req.flash('error', err.message);
		res.redirect('/auth/signup');
	});
});

router.get('/logout', function(req, res) {
	req.logout();
	req.flash('success', 'You are logged out');
	res.redirect('/');
});







// export
module.exports = router;






