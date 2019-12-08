var x = 10;
var y = 8;

function calculator(operator) {
  if (operator === "+") {
    console.log(x + y);
  } else if (operator === "-") {
    console.log(x - y);
  } else if (operator === "*") {
    console.log(x * y);
  } else if (operator === "/") {
    console.log(x / y);
  } else if (operator === "%") {
    console.log(x % y);
  }
}

var operators = ["+", "-", "*", "/", "%"];
for (operator of operators) {
  calculator(operator);
}
