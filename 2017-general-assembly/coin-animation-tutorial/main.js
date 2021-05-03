$('document').ready() {
	var coinImage = new Image();
	coinImage.src = 'coin-sprite-animation.png';

	function sprite(options) {
		var that = {};

		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;

		return that;
	}
}