var factorial = function fac(n) {
  return n < 2 ? 1 : fac(n - 1) * n;
};

console.log(factorial(5));
