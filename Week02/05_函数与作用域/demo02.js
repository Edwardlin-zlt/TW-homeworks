function myConcat(separator) {
  var result = "";
  for (var i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

console.log(myConcat(";", "ahah", "Amons", "Youtube", "js"));