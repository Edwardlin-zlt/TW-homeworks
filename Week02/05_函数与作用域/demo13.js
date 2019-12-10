var add = function(m) {
  var temp = function(n) {
    return add(m + n);
  };

  temp.toString = function() {
    return m;
  };

  return temp;
};

a = add(3)(4);

console.log(a);

console.log(add(3)(4));
