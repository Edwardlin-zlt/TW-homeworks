
function multiplicationCalculator(...numbers) {
  if (numbers.length === 0) {return "Caution: Nothing to execute the action!"};
  var result = 1;
  for (number of numbers) {
    result *= number;
  }
  return result;
}

var a = multiplicationCalculator(3, 6); // 18
var b = multiplicationCalculator(3, 6, 2); // 36
var c = multiplicationCalculator(1, 2, 5, 6); // 60

console.log(a, b, c);
console.log(multiplicationCalculator());