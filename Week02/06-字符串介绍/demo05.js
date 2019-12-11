var myString = "How much wood could a wood chuck chuck";
var myPattern = /.ood/;
var myResult = myString.match(myPattern);
console.log(myResult);
console.log(typeof myResult)
console.log(myResult.index)
