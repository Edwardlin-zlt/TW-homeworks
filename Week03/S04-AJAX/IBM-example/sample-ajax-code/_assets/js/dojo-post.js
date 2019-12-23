var myMessages = {
	positive : "Today is a good day",
	negative : "Today stinks",
	meh : "meh"
}
var callback = function( data ) {
	dojo.byId("main").innerHTML += "<p>"+ data.positive +"</p>";
}
var errorHandler = function(){
	throw new Error("We dun goofed.")
}
var postData  = function(){
 //not surprisingly xhrPost is for POST
 dojo.xhrPost({
	// The URL of the request
	url: "_assets/data/post-responder.php",
	//this will be json
	handleAs: "json",
	//set the headers properly
	headers: { "Content-Type": "application/json; charset=uft-8"},
	//use dojo's JSON utility
	postData: dojo.toJson(myMessages),
	// The success handler
	load: callback,
	// The error handler
	error: errorHandler
  });
}
// use connect to attach events
dojo.connect( dojo.byId("activate"), "onclick", postData );