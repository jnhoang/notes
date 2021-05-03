// Implement a validation on ArticlePulse to require submitted comments 
// to be between 20 and 200 characters.+

// Test that it works. Use .catch() to send a message to the user. It can 
// just use res.send() for now if you want. If you have extra time, try to 
// make the message render on the page.

var comment = sequelize.define('comment' , {
	content: {
		type: DataTypes.STRING(200),
		validate: {
			charRange: function() {
				if (this.type.length < 20 || this.type.length > 200) {
					throw new Error('Comments must be greater than 20 \
						and less than 200 characters')
				}
			}

		}
	},

})


router.post('/', function(req, res) {
	// if comment doesn't pass validation, redirect to error screen
	
	// else, success and proceed as normal
})