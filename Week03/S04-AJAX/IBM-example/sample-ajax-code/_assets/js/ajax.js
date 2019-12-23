/*
Here's a basic Ajax function
*/
var ajax = function( opts ) {
/*
We have an options argument. 
In addition, we want to have some smart defaults.
*/
    opts = {
		//Is it a Get or Post
        type: opts.type || "POST",
        //What URL are we going to hit?
		url: opts.url || "",
		//What do we do with the data
        onSuccess: opts.onSuccess || function(){},
		//what kind of data do we expect?
		data: opts.data || "xml"
    };
//create a new XMLHttpRequest	
	var xhr = new XMLHttpRequest();
//Open the connection to the server	
    xhr.open(opts.type, opts.url, true);
/*
When the ready state changes
fire this function
*/
    xhr.onreadystatechange = function(){
//readyState 4 is "done"		
        if ( xhr.readyState == 4 ) {
/*
do some simple data processing
There are two components to the returned object-
responseXML and resonpseText. 
Depending on what we're doing we'll need one or the other.
*/
			switch (opts.data){
				case "json":
					//json is text
					opts.onSuccess(xhr.responseText);
					break;
				case "xml":
					//XML retains the structure/DOM 
					//It's passed in whole. 
					opts.onSuccess(xhr.responseXML);
					break;
				default : 
					//Everything else will get TXT
					opts.onSuccess(xhr.responseText);;
			}          
        }
    };
	//close the connection
    xhr.send(null);
}
//here's our simple function
var ajaxSample = function(e){
//Simple callback adds some text to the page	
	var callback = function( data ) {
		document.getElementById("main").innerHTML += 
			"<p>"+data.getElementsByTagName("data")[0].getAttribute("value")+"</p>";
	}
//And here's our ajax call	
	ajax({
	    type: "GET",
        url: "_assets/data/ajax-1.xml",
        onSuccess: callback,
		data : "xml"
	 })
//prevent the default action	
	e.preventDefault();
}
//Wire everything up
document.getElementById("activate").addEventListener("click", ajaxSample, false);	
