var ajax = function( opts ) {
    opts = {
        type: opts.type || "POST",
		url: opts.url || "",
        onSuccess: opts.onSuccess || function(){},
		data: opts.data || "xml"
    };
/*
Support for the original ActiveX object in older versions of Internet Explorer
This works all the way back to IE5.
*/
	if ( typeof XMLHttpRequest == "undefined" ) {
		XMLHttpRequest = function () {
    		try { 
				return new ActiveXObject("Msxml2.XMLHTTP.6.0"); 
			}
      		catch (e) {}
    		try { 
				return new ActiveXObject("Msxml2.XMLHTTP.3.0"); 
			}
      		catch (e) {}
    		try { 
				return new ActiveXObject("Msxml2.XMLHTTP"); 
			}
      		catch (e) {}
    		throw new Error("No XMLHttpRequest.");
    	};
	}
	var xhr = new XMLHttpRequest();
    xhr.open(opts.type, opts.url, true);
    xhr.onreadystatechange = function(){
        if ( xhr.readyState == 4 ) {
			switch (opts.data){
				case "json":
					opts.onSuccess(xhr.responseText);
					break;
				case "xml":
					opts.onSuccess(xhr.responseXML);
					break;
				default : 
					opts.onSuccess(xhr.responseText);;
			}          
        }
    };
    xhr.send(null);
}
var ajaxSample = function(e){
	var callback = function( data ) {
		document.getElementById("main").innerHTML += "<p>"+data.getElementsByTagName("data")[0].getAttribute("value")+"</p>";
	}
	ajax({
	    type: "GET",
        url: "_assets/data/ajax-1.xml",
        onSuccess: callback,
		data: "xml"
	 })
	e.preventDefault();
}
document.getElementById("activate").addEventListener("click", ajaxSample, false);	
