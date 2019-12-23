/*
this is the object we're going to post
*/
var myMessages = {
	positive : "Today is a good day",
	negative : "Today stinks",
	meh : "meh"
}																		 
var callback = function( data ) {
	$("#main").append($("<p />").text(data.positive));
}
/*
Setting up a simple error handler.
It doesn't do much. 
I't just nice to illustrate error handling.
*/
var errorHandler = function( xhr, textStatus, errorThrown ){
	throw new Error("There was an error. The error status was " + textStatus );
}
/*
Here's where the action happens.
Attach an event to out simple button.
*/
$("#activate").click(
	function(){
//call $.ajax with a configuration object		
		$.ajax({
			//we're sending data to the server   
			type: 'POST',
			//this is our URL
			url: '_assets/data/post-responder.php',
			/*
			This is our data, JSON stringified
			jQuery expects to use native JSON
			or JSON2.js in unsupported browsers
			*/
			data: JSON.stringify(myMessages),
			//Here's where we set up our callback function
			success: callback,
			//The data expected from the server
			dataType: "json",
			//And our simple error handler
			error : errorHandler
			}
		)
	}
);
