var request = function(options) {
  options = {
    url: options.url || "",
    method: options.method || "GET",
    headers: options.headers || {},
    data: options.data || null,
    onSuccess: options.success || function(result) {},
    onFailure: options.fail || function(error) {}
  };

  var xhr = new XMLHttpRequest();
  xhr.open(options.method, options.url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        options.onSuccess(xhr.responseText);
      } else {
        options.onFailure(xhr.status);
      }
    }
  };
  xhr.send(options.data);
};

var btn = document.getElementById("btn");
var options = {
  url: "./somefile.txt",
  method: "GET",
  success: function(result) {
    alert(result);
  }
};

btn.addEventListener("click", request(options));
