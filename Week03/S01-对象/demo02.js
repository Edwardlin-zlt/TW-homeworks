function addCurring(firstValue) {
  result = firstValue;
  function innerCurring(val) {
    result += val;
    return result;

    this.toString = function() {
      return result;
    };
  }
  return innerCurring;
}

console.log(addCurring(1)(2));
