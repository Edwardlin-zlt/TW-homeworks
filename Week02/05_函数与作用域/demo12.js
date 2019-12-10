// function multiplicationCalculator(numbers) {
//   var result = 1;
//   for (number of arguments) {
//     result *= number;
//   }
//   return result;
// }

// function multiplicationCalculator(...numbers) {
//   var result = 1;
//   for (number of numbers) {
//     result *= number;
//   }
//   return result;
// }


function multiplicationCalculator(numbers) {
  var result = 1;
  console.log(numbers)
  for (number of numbers) {
    result *= number;
  }
  return result;
}


var a = multiplicationCalculator(3, 6); // 18
var b = multiplicationCalculator(3, 6, 2); // 36
var c = multiplicationCalculator(1, 2, 5, 6); // 60

console.log(a)
console.log(b)
console.log(c)