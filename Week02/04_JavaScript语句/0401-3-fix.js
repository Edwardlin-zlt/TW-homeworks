function sumExceptThree() {
  var returnValue = 0;
  for (var i = 1; i <= 100; i++) {
    if (i % 10 !== 3) {
      returnValue += i;
    }
  }
  return returnValue;
}

console.log(sumExceptThree());
