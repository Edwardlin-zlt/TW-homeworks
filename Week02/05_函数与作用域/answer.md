## 第一题: 创建函数有哪些方法？分别有什么特点？

JS中函数创建一共有三种方式

1. **函数声明**：由一系列`function`关键字组成，依次为: 
    * 函数的名称
    * 函数的参数列表,包围在括号中由逗号分隔
    * 定义函数的`JavaScript`语句，用大括号`{}`括起来
    * **特点**：由该方法创建的函数可以被函数提升，其他方法创建的都不行。</Week02/05_函数与作用域/demo05.js>

例如:
```
function funcName(arg1, arg2) {
    JavaScript Statements
}
```

2. **函数表达式**: 由函数表达式创建的函数可以是匿名的（没有名字），也可以提供函数名，并且可以用在函数内部代指其本省，或者在调试器堆栈跟踪中识别该函数。
    * 特点:直接将函数赋值给一个变量。

    * 匿名函数

    ```
    var square = function(number) { return number*number };
    ```

    * 提供函数名并在其自身内部进行调用

    ```
    var factorial = function fac(n) { return n<2 ? 1 : n*fac(n-1) };
    ```

3. **函数对象方式**: 由`new`关键字构造函数进行创建。`var variableName = new Function("args...", "statements")`
    * 特点: 采用构造函数的方法，创造出来的函数是一个对象。其创建的时候使用字符串来作为参数进行创建。

例如: 
```
var myFunc = new Function("num1, num2", "return num1+num2");
\\ or
var myFunc2 = new Function("num1", "num2", "return num1+num2");

console.log(myFunc(1, 2)); \\ 3
console.log(myFunc2(2, 3)); \\ 5
```

## 第二题： 见如下代码，b会打印出什么？

```
(function() {
   var a = b = 5;
})();
 
console.log(b); // 5
```

JS中赋值从右向左结合.`var a=b=5;` 等价于 `var a=(b=5);` 可以理解为 `b=5` 并未被声明，被理解为全局变量。
所以最后控制台打印`5`

## 第三题：编写一个函数，实现一个输出 n (n > 0，否则返回原字符串)遍连接后的 str 功能，如下：

```
var a = repeatStr('hello', 2);  //hellohello
var a = repeatStr('hello', 4);  //hellohellohellohello
```

答案：
```
function repeatStr(str, times) {
  result = "";
  for (var i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

var a = repeatStr('hello', 2);  //hellohello
var b = repeatStr('hello', 4);  //hellohellohellohello

console.log(a, b);
```

## 第四题： 以下代码的执行结果是：

```
function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}
 
test();
```

结果

```
undefined
2
```

原因：

1. `console.log(a)`会输出`undefined`: **JavaScript仅提升声明而不提升初始化**。如果你先使用的变量，再声明并初始化它，变量的值将是`undefined`。
变量可以在声明之前进行初始化和使用。但是如果没有初始化，就不能使用它们。

```
console.log(a); // undefined
a = 1;
var a;
```

```
a = 1;
console.log(a); // 1
var a;
```

```
console.log(a); // 报错
a = 1;
```

2. `console.log(foo());`输出`2`

**JavaScript**函数提升,函数调用正常执行。函数和变量相比，会被优先提升。这意味着函数会被提升到更靠前的位置。

## 第五题: 以下代码的执行结果分别是：

```
function foo(){
    return 1;
}
var foo;
console.log(typeof foo); // function
```

结果为`function`. 虽然函数与变量声明都会置顶，但是变量声明更置顶，所以重名的变量与函数，最终是指向一个函数。

```
function foo(){
    return 1;
}
var foo = 1;
console.log(typeof foo); // number
```

结果为`number`. 提升变量声明但并不会提升初始化，所以上面的代码可以理解为:

```
function foo() {
    return 1;
}
var foo; // 实际无用; 
foo = 1;
console.log(typeof foo)
```

*TODO*这里还是有点小疑问，为什么function更置顶，但是按照从上往下运行的逻辑，下面的变量声明不是会覆盖上面的函数声明吗？是不是应该理解为提升的时候，如果有同名的变量声明和函数声明，取函数声明。

## 第六题 编写一个函数，实现一个乘法计算器：无论输入多少个数字参数，最终都返回参数的乘积。例如：

```
var a = multiplicationCalculator(3, 6); // 18
var b = multiplicationCalculator(3, 6, 2); // 36
var c = multiplicationCalculator(1, 2, 5, 6); // 60
.........
```

* 方法一：使用`arguments`对象

```
function multiplicationCalculator(numbers) {
  var result = 1;
  for (number of arguments) {
    result *= number;
  }
  return result;
}
```

* 方法二: 使用`剩余参数`

```
function multiplicationCalculator(...numbers) {
  var result = 1;
  for (number of numbers) {
    result *= number;
  }
  return result;
}
```

## 第七题： 编写一个函数，实现如下语法的功能：var a = add(2)(3)(4); // 9，提示：2 + 3 + 4 = 9

```
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
```

* 通过闭包将起始数或者后面的和存到返回的函数中
* 通过返回的函数闭包实现柯里化函数
* 通过`toString`属性的定义返回最后的结果。

* `toString`对于对象的作用： 如果对象具有 toString() 方法，则调用这个方法。如果它返回一个原始值，js将这个值转换为字符串（如果本身不是字符串的话），并返回这个字符串结果；如果对象没有 toString() 方法，或者这个方法并不返回一个原始值，那么js会调用 valueOf() 方法。如果存在这个方法，则js调用它。如果返回值是原始值，js将这个值转换为字符串（如果本身不是字符串的话），并返回这个字符串结果；否则，js无法从 toString() 或 valueOf() 获得一个原始值，因此这时它将抛出一个类型错误异常。


## 改错

3. 第三题的 repeatStr 函数的函数体的 `}` ??

```
function repeatStr(str, times) {
  result = "";
  for (var i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

var a = repeatStr('hello', 2);  //hellohello
var b = repeatStr('hello', 4);  //hellohellohellohello

console.log(a, b);
```

6. 第六题，在执行multiplicationCalculator()时候，程序返回的是1。

```
function multiplicationCalculator(...numbers) {
  if (numbers.length === 0) {return "Caution: Nothing to execute the action!"};
  var result = 1;
  for (number of numbers) {
    result *= number;
  }
  return result;
}

var a = multiplicationCalculator(3, 6); // 18
var b = multiplicationCalculator(3, 6, 2); // 36
var c = multiplicationCalculator(1, 2, 5, 6); // 60

console.log(a, b, c);
```