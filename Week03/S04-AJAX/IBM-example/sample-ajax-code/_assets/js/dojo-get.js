var callback = function( data ) {
//note the document.getelementById alias
	dojo.byId("main").innerHTML += "<p>"+ data.sample.txt +"</p>";
}
var getData  = function(){
//xhrGet is for get requests
dojo.xhrGet({
	//the URL of the request
		url: "_assets/data/json-1.json",
		//Handle the result as JSON data
		handleAs: "json",
		//The success handler
		load: callback
	});
}
// use connect to attach events
dojo.connect( dojo.byId("activate"), "onclick", getData );