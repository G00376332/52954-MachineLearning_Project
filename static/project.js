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

// This function will change the background image in the banner on the home page. It will have an animation effect.// Script file for MLS project 2020
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

var showIndex = 0;

function showSlides() {
  var i;
  var img = ["url(images/w1.jpg) no-repeat center","url(images/w2.jpg) no-repeat center", "url(images/w3.jpg) no-repeat center"];
  for (i = 0; i < img.length; i++) {
    document.getElementById("idx-banner").style.background = "none";
  }
  showIndex++;
  if (showIndex > img.length) {showIndex = 1}    
  document.getElementById("idx-banner").style.background = img[showIndex-1]; 
  // Change image every 10 seconds. Match time with banner animation time in css file for smooth effect.
  setTimeout(showSlides, 10000); 
}

// This function will change the text in the banner on the home page. It will have an animation effect.

var textIndex = 0;

function showIdxText() {
  // Create an array with text to loop through.
  var txt = ["Your partner in power prediction","Our Promise", "Your Satisfaction","Our Quality","Your Profit","20 Years of Experience","14 Wind Farms Worldwide","Leader in modeling"];
  textIndex++;
  if (textIndex > txt.length) {textIndex = 1}
  document.getElementById("idx-text").innerHTML = txt[textIndex-1];
  // Change the text every 5 seconds. Make the time half of banner animation time in CSS file for the nicer swap effect.
  setTimeout(showIdxText, 5000); 
}


// Prediction tool section

// Get the modal
var modal = document.getElementById('tool');

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// This function will handle api for power prediction
 function doPredict() {
	 var speed = parseFloat(document.getElementById('speed').value);
	 if ((speed >= 1 && speed <= 25) && (typeof speed === 'number')){ 
		 $.getJSON("/api/outputnn/" + speed, function (data) {
			document.getElementById('nn').value =data.outputnn;
			//display predicted value in the console log 
			console.log("Entered speed " + speed + " m/s will produce predicted power by NN model of " + data.outputnn +" MW");
		 }
		 );
		 $.getJSON("/api/outputpoly/" + speed, function (data) {
			document.getElementById('poly').value =data.outputpoly;
			//display predicted value in the console log 
			console.log("Entered speed " + speed + " m/s will produce predicted power by Polynomial model of " + data.outputpoly + " MW");
		 }
		 );
	 }
	 else{
		alert ("Entered value is not in 1-25 range or is not a number!\nPlease enter a correct value."); 
	 }
  }

// Get the button
var topButton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// website content

about='' +
'<div id="banner">&nbsp;</div>'+
'<!-- About_Project -->'+
'<div class="txt-container" id="about">'+
'	<div class="title">'+
'		<h2>About Project</h2>'+
'	</div>'+
'	<div id="main-text">'+
'		<p>The goal of this project is to produce a model that accurately predicts wind turbine power output from wind speed values, as in the data set powerproduction.csv.'+
'		The part of the project was to create a web service that will respond with predicted power values based on speed values sent as HTTP requests.'+
'		There are many models available in machine learning that fit this purpose better or worse. Two models were chosen for this project. The one was a Polynomial Regression model and the other one Neural Network regression based model.'+
'		The both models perform very well in this task.'+
'		<br>'+
'		<br>'+
'		<h3>Polynomial Regression Model</h3>'+
'		<br>'+
'		<div id="cert_l" align="center">'+
'			<img src="images/chartpoly.jpg" alt="Poly" style="width:800px">'+
'		</div>'+
'		<br>'+
'		<h3>Regression-based Neural Networks Model</h3>'+
'		<br>'+
'		<div id="cert_l" align="center">'+
'			<img src="images/chartNN.jpg" alt="Poly" style="width:800px">'+
'		</div>'+
'		<br>'+
'	</div>'+
'</div>';
