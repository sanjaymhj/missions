function Animator(element) {
	this.el = element;
	var self = this;
	var intervalid;

	this.animate = function(cssProperty, value, duration) {
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		initial = parseInt(initial);


		var step = (value - initial) / (duration / 50);
		var counter = 0;
		intervalid = setInterval(function() {
			counter++;
			element.style[cssProperty] = parseInt(style.getPropertyValue(cssProperty))+step + 'px';
			
			if (counter >= duration/50)
				clearInterval(intervalid);
		}, 50);
	}
	this.stop = function(){
		clearInterval(self.intervalId);
		console.log("cleared");
	}

}