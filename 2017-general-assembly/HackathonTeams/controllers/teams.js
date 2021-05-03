// requires & global variables
var express = require('express');
var router = express.Router();
var db = require('.././models'); // so does this look up db? 
// how does it know to connect with specific db? exact naming?
// called teams.js here, table is called teams in db

// set & use statements

// routes

// all teams page
router.get('/', function(req, res) {
	db.teams.findAll() // teams refers to db table name
	.then(function(result) {
		res.render('teams', { teams: result }); // result of findAll()?
	})
	.catch(function(error) {
		res.send('there has been an error');
	});
});

// sign up new team page (form)
router.get('/new', function(req, res) {
	res.render('newTeam');
});

// show new team
router.get('/:name', function(req, res) {
	var team = db.teams.find({
		where: { teamName: req.params.name }
	}).then(function(team) {
		res.render('singleTeam', { teams: team });
	});
});

// post new team
router.post('/', function(req, res) {
	console.log(req.body)
	db.teams.create(req.body)
	.then(function(newTeam) {
		res.redirect('/teams');
	});
});

// delete team
router.delete('/:name', function(req, res) {
	db.teams.destroy({
		where: { teamName: req.params.name }
	}).then(function() {
		res.send({ message: 'successful delete' })
	});
});

// edit team id page
router.get('/:name/edit', function(req, res) {
	var team = db.teams.find({
		where: { teamName: req.params.name }
	}).then(function(team) {
		res.render('editTeam', { teams: team })
	});
});
router.put('/:name', function(req, res) {
	console.log(req.body)
	db.teams.update({
		teamName: req.body.teamName,
		teamMembers: req.body.teamMembers
	}, {
		where: { teamName: req.params.name }
	}).then(function(teamUpdated) {
		res.send({ message: 'Success' });
	});
});


// listen/ export
module.exports = router;



