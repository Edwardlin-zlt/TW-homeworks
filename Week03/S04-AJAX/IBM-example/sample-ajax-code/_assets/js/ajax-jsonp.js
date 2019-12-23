var callback = function( data ) {
	document.getElementById("main").innerHTML += "<p>"+ data.sample.txt +"</p>";
}
var jsonpSample = function(e){
//create a script element
	var jsonp = document.createElement("script");
//give it a source with the callback name appended in the querystring
	jsonp.src= "_assets/data/jsonp.php?callback=callback";
//add it to the doc
	document.body.appendChild(jsonp);
	e.preventDefault();
}
//wire up the event
document.getElementById("activate").addEventListener("click", jsonpSample, false);	
