# 理解为什么需要块级作用域？如果没有，可能会出现哪些问题，请举例说明。

> REF: https://blog.csdn.net/zhouziyu2011/article/details/68484534

## 为什么需要块级作用域

ES5只有**全局作用域**和**函数作用域**，没有**块级作用域**。块级作用域解决了下列问题，并且让代码行为更加符合预期。

### 先看看会带来的问题：

  * 变量提升导致内层变量可能会覆盖外层变量

    ```
    var i = 5;
    function func() {
      console.log(i);
      if (true) {
        var i = 6;
      }
    }
    func(); // undefined
    ```

  * 用来计数的循环变量泄露为全局变量

    ```
    for (var i = 0; i < 10; i++) {  
      console.log(i);  
    }  
    console.log(i);  // 10
    ```

## ES6的块级作用域及其用法

ES6允许块级作用域的任意嵌套。外层作用域无法读取内层作用域的变量。

```
{{{{
  {let i = 6;}
  console.log(i);  // 报错
}}}}
```

内层作用域可以定义外层作用域的同名变量。

```
{{{{
	let i = 5;
	{let i = 6;}
}}}}
```

块级作用域的出现使得立即执行函数不再需要。

立即执行函数：

```
(function() {
	var i = 5;
})();
```

块级作用域：

```
{
	let i = 5;
}
```

### 块级作用域与函数作用域

ES5规定，函数只能在顶层作用域和函数作用域之外声明，不能在块级作用域中声明。

```
if (true) {
	function func() {}
}
try {
	function func() {}
} catch {
}
```

上面两种函数声明在ES5中都是非法的，但是浏览器没有遵守这一规定，还是支持在块级作用域中声明函数，因此以上两种情况实际都能运行，不会报错；但是，在严格模式下，还是会报错。

```
'use strict':
if (true) {
	function func() {} // 报错
}
```

ES6引入了块级作用域，明确允许在块级作用域中声明函数。

```
'use strict':
if (true) {
	function func() {} // 不报错
}
```

ES6还规定，在块级作用域中，函数声明的行为类似于let，在块级作用域之外不可引用。

ES6中，函数声明会提升到函数作用域的头部。

```
function func() {
	console.log('out');
}
(function() {
	if (false) {
		function func() {
			console.log(‘in’);
		}
	}
	func();
})();
```

在ES5中输出：in

在ES6中输出：out

但是，以上代码在Chrome中运行会报错，实际运行的是以下代码：

```
function func() {
	console.log(‘out’);
}
(function() {
	var func = undefined;
	if (false) {
		function func() {
			console.log(‘in’);
		}
	}
	func();
})();
```

考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数，若确实需要，也应该写成函数表达式，而不是函数声明语句。

```
{
	let funcName = function func() {
		console.log(‘in’);
	};
};
```

注意：ES6的块级作用域允许声明函数只在使用大括号的情况下成立，如果未使用大括号，会报错。

```
'use strict':
if (true) {
	function func1() {} // 不报错
}
if (true)
	function func2() {} // 报错
```