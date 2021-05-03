$('document').ready( function() {
	console.log('everything loaded');
	$('.deleteLink').on('click', function(e) {
		e.preventDefault();

		var teamElement = $(this);
		var teamUrl = teamElement.attr('href');
		console.log(teamElement);

		$.ajax({
			method: 'DELETE',
			url: teamUrl,
		}).done(function(data) {
			teamElement.remove();
			window.location = '/teams';
		});
	});

	$('.put-form').on('submit', function(e) {
		e.preventDefault();
		var teamElement = $(this);
		console.log(teamElement);
		var teamUrl = teamElement.attr('action');
		var teamData = teamElement.serialize();

		$.ajax({
			method: 'PUT',
			url: teamUrl,
			data: teamData
		}).done(function(data) {
			teamElement.remove();
			window.location = '/teams';
		});
	});





})