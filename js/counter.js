var numberContainer = document.getElementsByClassName("number");
var counterStarted = false;
var startPos = numberContainer[0].offsetTop - numberContainer[0].offsetHeight;
var numberAnimate1 = new NumberAnimator(numberContainer[0],10000);
var numberAnimate2 = new NumberAnimator(numberContainer[1],10000);
var numberAnimate3 = new NumberAnimator(numberContainer[2],10000);
var numberAnimate4 = new NumberAnimator(numberContainer[3],10000);

window.onscroll = function(){
	if(!counterStarted && document.body.scrollTop > startPos){
		numberAnimate1.startCount();
		numberAnimate2.startCount();
		numberAnimate3.startCount();
		numberAnimate4.startCount();
		counterStarted=true;
	}
};