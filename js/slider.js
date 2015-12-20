
var sliderLong = document.getElementsByClassName('slider-long')[0];
var images = sliderLong.children;
var animator = new Animator(sliderLong);
var active = 1;
var ml = 0;
var duration = 200;
var imageHeight = sliderLong.children[0].offsetHeight;
console.log(imageHeight);
var bullets=[];
var bulletcontainer=document.getElementsByClassName('bullets')[0];

for(var i = 1;i <= images.length;i++){
		 	bullets[i]=document.createElement('li');
		 	var t2=document.createTextNode(' ');
			bullets[i].setAttribute('id',i);
			bullets[i].addEventListener("click",function(){
				var mar = parseInt(window.getComputedStyle(sliderLong).getPropertyValue('margin-top'));
				if(mar%imageHeight==0){
					animator.stop();
					// clearInterval(sliderid);
						animator.animate('margin-top',(this.id-1)*-imageHeight,duration);
						active=this.id;
						bulletSlider();
						//sliderid=setInterval(slide,2000);
						}
			});
			bullets[i].appendChild(t2);
		 	bulletcontainer.appendChild(bullets[i]);
	}

function bulletSlider(){
	for(var a =1;a<=images.length;a++)
		document.getElementById(a).className = "";
		
	document.getElementById(active).className="active";
}

function slide(){
	bulletSlider();
	ml=(active-1)*-1*imageHeight;
	active = active == images.length?active=1:++active;
	animator.animate('margin-top',ml,duration);
}

bulletSlider();
//sliderid=setInterval(slide,2000);