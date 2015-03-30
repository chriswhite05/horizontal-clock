	var timeContainer = document.getElementsByClassName("clock-container")[0];
	var hourBar = document.getElementsByClassName("clock-hours")[0];
	var hourTime = document.getElementsByClassName("clock-hours")[0].getElementsByClassName("digits")[0];
	var minuteBar = document.getElementsByClassName("clock-minutes")[0];
	var minuteTime = document.getElementsByClassName("clock-minutes")[0].getElementsByClassName("digits")[0];
	var secondBar = document.getElementsByClassName("clock-seconds")[0];
	var secondTime = document.getElementsByClassName("clock-seconds")[0].getElementsByClassName("digits")[0];

	var time;
	var hoursWidth;
	var minutesWidth;
	var secondsWidth;
	var hours;
	var minutes;
	var seconds;
	var timeContainerWidth;

	updateClock();



function updateClock() {

	time = new Date();
	hours = ("0" + time.getHours()).slice(-2);
	minutes = ("0" + time.getMinutes()).slice(-2);
	seconds = ("0" + time.getSeconds()).slice(-2);

	
	hourTime.innerHTML = hours;
	minuteTime.innerHTML = minutes;
	secondTime.innerHTML = seconds;
	
	
	
	try {
timeContainerWidth = window.getComputedStyle(timeContainer, null).getPropertyValue('width');
} catch(e) {
 timeContainerWidth = timeContainer.currentStyle.width;
} 

timeContainerWidth = parseInt(timeContainerWidth.replace("px", ""), 10);
	
	timeContainerWidth = timeContainerWidth - 105;
	
	hoursWidth = ((hours / 24) * timeContainerWidth) + 105;
	minutesWidth = ((minutes / 60) * timeContainerWidth) + 105;
	secondsWidth = ((seconds / 60) * timeContainerWidth) + 105;

	
	hourBar.style.width = hoursWidth;
	minuteBar.style.width = minutesWidth;
	secondBar.style.width = secondsWidth;


	setTimeout(updateClock, 500);
}