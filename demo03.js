function rate(level) {
  var max = 5;
  var result = "";
  for (var i = 0; i < level; i++) {
    result += "@";
  }
  for (var j = 0; j < max - level; j++) {
    result += "*";
  }
  return result;
}

console.log(rate(3));
