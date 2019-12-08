for (var i = 1; i < 10; i++) {
  var line = "";
  for (var j = 1; j <= i; j++) {
    str = i + "*" + j + "=" + i * j + " ";
    line += str;
  }
  console.log(line);
}
