function NumberAnimator(container,statObj,duration){
	var val=0;
	var maxVal = statObj.innerHTML;
	var intervalId;
	var self = this;
	var step = maxVal/duration;		

	this.startCount = function()
	{	
		intervalId = setInterval(function(){
			val += 1;
			if(val <= maxVal){
				statObj.innerHTML = formatting(val);
			}
			else
			{
				statObj.innerHTML = formatting(val);
				clearInterval(intervalId);
			}
		},50);
	}

	var formatting=function(val){
		return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
}