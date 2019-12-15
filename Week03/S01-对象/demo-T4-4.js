function sum(){
  console.log("this(sum): ", this);
};
function fn(){
  console.log("this(fn): ", this);
};

var obj = {name: "iceman"};
Function.prototype.myCall = function(context){

};

console.log(fn.myCall(obj));
console.log(sum.myCall(obj));