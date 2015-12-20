var number1Container = document.getElementById("counter");
var number = document.getElementsByClassName("number");
console.log(number1Container.offsetTop);
var counterStarted = false;
var startPos = number1Container.offsetTop + number1Container.offsetHeight/2;
var numberAnimate1 = new NumberAnimator(number1Container,number[0],1000);
var numberAnimate2 = new NumberAnimator(number1Container,number[1],1000);
var numberAnimate3 = new NumberAnimator(number1Container,number[2],1000);
var numberAnimate4 = new NumberAnimator(number1Container,number[3],1000);

window.onscroll = function(){
	if(!counterStarted && document.body.scrollTop > startPos){
		numberAnimate1.startCount();
		numberAnimate2.startCount();
		numberAnimate3.startCount();
		numberAnimate4.startCount();
	}
};

