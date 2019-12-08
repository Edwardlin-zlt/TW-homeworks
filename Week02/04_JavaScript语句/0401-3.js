function sumExceptThree() {
  var re = 0;
  for (var i = 1; i <= 100; i++) {
    if (i % 10 === 3) {
      continue;
    }
    re += i;
  }
  return re;
}

console.log(sumExceptThree());
