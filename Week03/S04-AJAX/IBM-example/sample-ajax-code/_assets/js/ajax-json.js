var ajax = function( opts ) {
    opts = {
        type: opts.type || "POST",
		url: opts.url || "",
        onSuccess: opts.onSuccess || function(){},
		data: opts.data || "xml"
    };
	var xhr = new XMLHttpRequest();
    xhr.open(opts.type, opts.url, true);
    xhr.onreadystatechange = function(){
        if ( xhr.readyState == 4 ) {
			switch (opt.sdata){
				case "json":
					opt.onSuccess(xhr.responseText);
					break;
				case "xml":
					opt.onSuccess(xhr.responseXML);
					break;
				default : 
					opt.onSuccess(xhr.responseText);;
			}          
        }
    };
    xhr.send(null);
}
var jsonSample = function(e){
	var callback = function( data ) {
		//here, the data is actuall a string
		//we use JSON.parse to turn it into an object
		data = JSON.parse(data);
		/*
		we can then use regular JavaScript object references
		to get at our data. 
		*/
		document.getElementById("main").innerHTML += "<p>"+ data.sample.txt +"</p>";
	}
	ajax({
	    type: "GET",
        url: "_assets/data/json-1.json",
        onSuccess: callback,
		data : "json"
	 })
	e.preventDefault();
}
var init = function(){
	document.getElementById("activate").addEventListener("click", jsonSample, false);	
}
document.addEventListener("DOMContentLoaded", init, false);