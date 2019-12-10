var x = 10;
var y = 8;

function calculator(operator) {
  switch (true) {
    case operator === "+":
      console.log(x + y);
      break;
    case operator === "-":
      console.log(x - y);
      break;
    case operator === "*":
      console.log(x * y);
      break;
    case operator === "/":
      console.log(x / y);
      break;
    case operator === "%":
      console.log(x % y);
      break;
  }
}

var operators = ["+", "-", "*", "/", "%"];
for (operator of operators) {
  calculator(operator);
}
