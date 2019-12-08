for (var i = 6; i > 0; i--) {
  var line = "";
  for (var j = 0; j < i; j++) {
    if (j === i - 1) {
      line += "*";
      break;
    }
    line += "* ";
  }
  console.log(line);
}
