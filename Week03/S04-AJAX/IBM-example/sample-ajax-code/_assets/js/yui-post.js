YUI().use('node','event', 'json', 'io', function (Y) {
		var myMessages = {
			positive : "Today is a good day",
			negative : "Today stinks",
			meh : "meh"
		}																		 
		var callback = function( id, xhr ) {
			var data = Y.JSON.parse(xhr.responseText);
			Y.one('#main').append("<p>" + data.positive +"</p>");
		}
		var errorHandler = function( id, xhr){
			throw new Error("There was an error. The error status was " + xhr.statusText +".")
		}
		Y.one("#activate").on('click',
			function(){
				Y.io( '_assets/data/post-responder.php', {
					method: 'post',
					//use the Y.JSON utility to convert messages to a string
					data : Y.JSON.stringify(myMessages),
					//all response methods are encapsulated in
					//the on object
  					on:   {success: callback,
						failure: errorHandler }
 				})
			}	
		)
 
});
