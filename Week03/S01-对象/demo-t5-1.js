var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};

fruit.countAll = function() {
  s = 0;
  for (name in fruit) {
    s += fruit[name];
  }
  return s;
}();


console.log(fruit.countAll);