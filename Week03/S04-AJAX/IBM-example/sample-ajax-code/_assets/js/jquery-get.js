/*
callback is a simple function that will be run
when the the data is returned from the server
*/
var callback = function( data ) {
/*	
it just adds a little bit of text to the document
data is the JSON object returned by the server. 
*/
	$("#main").append($("<p />").text(data.sample.txt));
}
/*
Wire up the ajax call to this click event
*/
$("#activate").click(
	function(){
//call $.ajax with a configuration object		
		$.ajax({
//it's just a get request
			type: 'get',
//we're looking for this URL			
  			url: '_assets/data/json-1.json',
//Our cool callback function
			success: callback,
//it's going to be JSON			
			dataType: "json"
 		})
	}	
)
