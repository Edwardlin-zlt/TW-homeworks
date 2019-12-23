function saveStorage(id) {
  var item = document.getElementById(id);
  var str = item.value;
  console.log(str);
  sessionStorage.setItem("message", str);
}

function loadStorage(id) {
  var item = document.getElementById(id);
  var msg = sessionStorage.getItem("message");
  item.innerHTML = msg;
}
