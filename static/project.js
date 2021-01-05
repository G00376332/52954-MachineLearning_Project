// Script file for MLS project 2020
// Final Machinelearning and Statistic Project 2020
// Student: Maciej Burel
// Student ID: G00376332
// Sources for some part of the script: https://www.w3schools.com/

function indexMain(){
	showSlides();
	showIdxText();
}

//Those function will pick the right content on the website and change some webpage properties

function aboutProject() {
	document.getElementById("head-title").innerHTML = "About Project";
	document.body.style.backgroundColor = "#79C255";
	document.getElementById("footer").style.backgroundColor = "#79C255"
	document.getElementById("topBtn").style.backgroundColor = "darkblue";
	document.getElementById("main").innerHTML = about;
}

// This function will change the background image in the banner on the home page. It will have an animation effect.