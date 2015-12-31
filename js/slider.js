function Slider(durationLong){
	var sliderLong = document.getElementsByClassName('slider-long')[0];
	var slider = document.getElementsByClassName('slider')[0];
	var images = sliderLong.children;
	var animator = new Animator(sliderLong);
	var active = 1;
	var marginTop = 0;
	var duration = 200;
	slider.style['height'] = window.innerHeight +'px';
	var imageHeight = window.innerHeight;

	var bullets = [];
	var bulletcontainer = document.getElementsByClassName('bullets')[0];

	for(var i = 1;i <= images.length;i++){
		images[i-1].style.height = imageHeight + 'px';
		 	bullets[i] = document.createElement('li');
		 	var t2=document.createTextNode(' ');
			bullets[i].onclick = (function(bulletNumber){
			return function(){
				animator.stop();
				clearInterval(sliderid);
				active = bulletNumber;
				animator.animate('margin-top',(bulletNumber-1)*-imageHeight,duration);
				bulletSlider();
				sliderid=setInterval(slide,durationLong);
			};} )(i);
			bullets[i].appendChild(t2);
		 	bulletcontainer.appendChild(bullets[i]);
		}

	function bulletSlider(){
		for(var a =1;a <= images.length;a++)
			bullets[a].className = "";
		bullets[active].className="active";
	}

	function slide(){
		bulletSlider();
		marginTop=(active-1)*-1*imageHeight;
		active = active == images.length?active=1:++active;
		animator.animate('margin-top',marginTop,duration);
	}
	this.updateParameters = function(){
		imageHeight =window.innerHeight; 
		slider.style['height'] = imageHeight+'px';
		for(var i = 1;i <= images.length;i++){
			images[i-1].style.height = imageHeight + 'px';
		}
		
	}

	bulletSlider();
	sliderid=setInterval(slide,durationLong);
}
var missionSlider = new Slider(3000);
window.onresize = function(){
	missionSlider.updateParameters();
};
