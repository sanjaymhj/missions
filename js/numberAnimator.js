function NumberAnimator(numberObj,duration){
	var currentValue=0;
	var maxValue = numberObj.innerHTML;
	var intervalId;
	var self = this;
	var step = maxValue/duration*200;
	var counterStarted = true;	

	this.startCount = function()
	{	
		intervalId = setInterval(function(){
			currentValue+=parseInt(step);
			if(currentValue >= maxValue-step)
			{
				step=1;
			}
			if(currentValue <= maxValue){
				numberObj.innerHTML = formatting(currentValue);
			}
			else
			{
				clearInterval(intervalId);
			}
		},100);
	}

	var formatting=function(val){
		return currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
}