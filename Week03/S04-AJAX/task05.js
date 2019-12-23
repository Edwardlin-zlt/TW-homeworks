var ajax = function(options) {
  options = {
    url: options.url|| "",
    method: options.method || "GET",
    headers: options.headers || {},
    data: options.data || null,
    onSuccess: options.success || function(result) {},
    onFailure: options.fail || function(error) {},
  }

  var xhr = new XMLHttpRequest();
  xhr.open(opts.type, opts.url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        options.onSuccess(xhr.responseText);
      } else {
        options.onFailure(xhr.status);
      }
    }
  };
  xhr.send(data);
};