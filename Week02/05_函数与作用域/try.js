var myFunc = new Function("num1, num2", "return num1+num2");
var myFunc2 = new Function("num1", "num2", "return num1+num2");

console.log(myFunc(1, 2));

console.log(myFunc2(2, 3));
