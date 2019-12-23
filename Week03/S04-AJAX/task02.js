function myCallback(xhr) {
  alert(xhr.responseText);
}

var request = {
  request: function(url, type, callbackFunc, data) {
    url = url || "";
    type = type || "POST";
    callbackFunc = callbackFunc || function() {};
    data = data || null;

    var xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        callbackFunc(xhr);
      }
    };
    xhr.send(data);
  }
};

var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");

btn1.addEventListener("click", _ => {
  request.request("somefile.txt", "get", myCallback);
});

btn2.addEventListener("click", _ => {
  request.request("script.php", "post", myCallback);
});
