## 创建函数有哪些方法？分别有什么特点？

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

## 见如下代码，b会打印出什么？

```
(function() {
   var a = b = 5;
})();
 
console.log(b); // 5
```

JS中赋值从右向左结合.`var a=b=5;` 等价于 `var a=(b=5);` 可以理解为 `b=5` 并未被声明，被理解为全局变量。
所以最后控制台打印`5`

## 编写一个函数，实现一个输出 n (n > 0，否则返回原字符串)遍连接后的 str 功能，如下：

```
var a = repeatStr('hello', 2);  //hellohello
var a = repeatStr('hello', 4);  //hellohellohellohello
```

答案：
```
function repeatStr(str, times){
    result = ""
    for (var i = 0; i<times; i++){
        result += str
    }
    return result
```

## 以下代码的执行结果是：

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
