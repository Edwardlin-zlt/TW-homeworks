try {
  func1();
} catch (err) {
  console.log("Func1 failed");
}

try {
  func2();
} catch (err) {
  console.log("Func2 failed");
}

try {
  func3();
} catch (err) {
  console.log("Func3 failed");
}

function func1() {
  console.log("Func1 have been executed");
}

var func2 = function() {
  console.log("Func2 have been executed");
};

var func3 = new Function("", "console.log('Func3 have been executed')");
