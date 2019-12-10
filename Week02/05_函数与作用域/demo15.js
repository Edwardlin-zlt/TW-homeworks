function add(num){
    var _add = function(args){
        num+=args;
        return _add;
    }
    _add.toString = _add.valueOf = function(){
        return num;
    }
    return _add;
}


console.log(add(1)(2));
console.log(add(1)(2)(3)(4));
