function repeatStr(str, times) {
  result = "";
  for (var i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

var a = repeatStr('hello', 2);  //hellohello
var b = repeatStr('hello', 4);  //hellohellohellohello

console.log(a, b);