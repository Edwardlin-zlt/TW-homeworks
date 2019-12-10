function add(num1) {
  var sum = 0;
  sum += num1;

  function tmp(num2) {
    if (arguments.length === 0) {
      return sum;
    } else {
      sum += num2;
      return tmp;
    }
  }

  return tmp;
}

console.log(add(1)(2)());
console.log(add(1)(2)(3)(4)());
