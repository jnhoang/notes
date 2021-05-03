var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var db = require('../models');

passport.serializeUser(function(user, cb) {
	cb(null, user.id); // tells passport where the id field is
});
passport.deserializeUser(function(id, cb) {
	db.user.findById(id)		// find user in the db, & hand back 
	.then(function(user) {		// user object
		cb(null, user);
	})
	.catch(cb);

});
passport.use(new localStrategy({
	usernameField: 'email',
	password: 'password'
}, function(email, password, cb) {		// lookup login cred. that was handed
	db.user.findOne({					// compare it wth db info
		where: {email: email}
	})
	.then(function(user) {
		if(!user || !user.isValidPassword(password)) {
			cb(null, false);
		} else {
			cb(null, user);
		}

	})
	.catch(cb)
}));	

module.exports = passport;






