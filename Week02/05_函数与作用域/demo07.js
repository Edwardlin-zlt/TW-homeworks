function repeatStr(str, times){
    result = ""
    for (var i = 0; i<times; i++){
        result += str
    }
    return result
}

console.log(repeatStr('hello', 2));
console.log(repeatStr('hello', 4));
