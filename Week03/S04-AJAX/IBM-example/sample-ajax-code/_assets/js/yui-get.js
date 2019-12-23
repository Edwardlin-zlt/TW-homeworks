// Create a new YUI instance and populate it with the required modules.
YUI().use('node','event', 'json', 'io', function (Y) {
		var callback = function( id, xhr ) {
			var data = Y.JSON.parse(xhr.responseText);
			Y.one('#main').append("<p>" + data.sample.txt +"</p>");
		}
		Y.one("#activate").on('click',
			function(){
				Y.io( '_assets/data/json-1.json', {
  					//this is actually the default
					method: 'get',
  					on:   {success: callback}
 				})
			}	
		)
 
});
