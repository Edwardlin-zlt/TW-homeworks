## 第一题 创建对象有哪些方式？

1. 对象字面量 使用`{name: value}` 形式直接创建对象

这种方式直接通过花括号将对象的属性包起来，使用name/value的方式创建对象属性，每个属性之间用逗号隔开。

注意：最后一个属性后面最好不要加逗号，在一些旧的浏览器上会出错。

```
var obj = {
  Name: "Amons",
  Company: "ThoughtWorks",
  Age: 100,
  Ability: function() {
    console.log("Hello");
  },
  isMale: true,
  Hobby: ["Coding", "Games"],
  Pets: { Name: "fatCat", Age: 12 }
};
```

2. 构造函数 `new`关键字

```
var o = new Object(); //创建一个空对象，等同于 var o = {};
var d = new Date(); // 创建一个表示当前时间的对象
var r = new RegExp(); // 创建一个正则表达式的对象
var f = new Function(); // 创建一个匿名函数对象
```

## 第二题 编程程序，完成下列需求：

* 创建一个空对象，变量名为 user；
* 添加一个 name 属性，并设置值为 John；
* 添加一个 surname 属性，并设置其值为 Mike；
* 将 name 属性的值改为 Peter;
* 删除 user 的 name 属性；

```
var user = {};
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete(user.name);
```

## 第三题 代码如下：

```
var a = {
   name: "xiaoming",
   age: 32  
};
var b = a;
b.age = 18;
console.log(a.age); // 打印出什么值？为什么？
```

打印`18`。第一行将对象赋值给了变量`a`,第二行将`a`赋值给`b`实际上是将`a`所有的地址值赋值给了`b`，即`a``b`变量都指向同一个地址，即同一个对象; 第三行将`b`所指向的对象`age`属性更改为`18`;所以第四行即便打印的是`a`的`age`属性，其实是和`b`的`age`属性是一样的。

栈区的`a``b`变量名所储存的地址值相同，都指向堆区同一个对象，对任意一个变量属性的修改都是对同一个对象属性的修改。

## 第四题 有如下几段，请分别指出代码中 console 打印的值和为什么打印该值？

```
var name = 'window-Jack';
var person = {
 name : 'person-Rose',
 greeting: function() {
   console.log('Hi! I\'m ' + this.name + '.');
 }
}
var greeting = person.greeting;
greeting();
```

打印`Hi! I'm window-Jack.`。

原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象。举例来说，上面例子的foo属性，实际上是以下面的形式保存的。

```
{
  foo: {
    [[value]]: 5
    [[writable]]: true
    [[enumerable]]: true
    [[configurable]]: true
  }
}
```

如果对象`value`是一个函数，储存的将会是函数在堆内存的地址。如果将其通过赋值语句，如本题的`var greeting = person.greeting;`，变量名将直接获得函数的地址值。此时的通过变量名绑定的地址来调用函数，上下文环境将是`window`本身（本例中），`this`将代表`window`，直接返回`window`中`name`变量的值。

===

```
var name = 'window-Jack';
var person = {
 name : 'person-Rose',
 greeting: function() {
   console.log('Hi! I\'m ' + this.name + '.');
 }
}
var greeting = person.greeting.bind(person);
greeting();
```

打印`Hi! I'm person-Rose.`

> `bind`方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

所以上述代码中的`person`对象作为`greeting`新函数的`this`。在调用的时候，`this.name`就是`person.name`。

===

```
var name = 'window-Jack';
var person = {
 name : 'person-Rose',
 greeting: function() {
   console.log('Hi! I\'m ' + this.name + '.');
 }
}
person.greeting.apply(this);
```

打印`Hi! I'm window-Jack.`

> apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。

`apply`方法的参数`this`是`window`，所以greeting方法执行的时候，其`this`值是`window`。

===

```
var name = 'window-Jack';
var person = {
 name : 'person-Rose',
 greeting: function() {
   console.log('Hi! I\'m ' + this.name + '.');
 }
}
person.greeting.call(this);
```

打印`Hi! I'm window-Jack.`

原理同上，`all()`方法的作用和 `apply()` 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。

## 第五题 编写程序，实现下列需求：计算下面 fruit 对象共有多少个水果，应该输出 50。

```
var fruit = {
   apple: 20,
   pear: 20,
   peach: 10
};

fruit.countAll = function() {
  s = 0;
  for (name in fruit) {
    s += fruit[name];
  }
  return s;
}();
```

## 第六题 什么是 JSON？JSON 和 JavaScript 的关系以及 JSON 的适用场景是什么？

> JSON 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 null 。

### JSON 和 JavaScript 的关系

它基于 JavaScript 语法，但与之不同：JavaScript不是JSON，JSON也不是JavaScript。但其实基本上和JavaScript的对象差不多。

不同点：

1. JSON的属性名称必须是双引号括起来的字符串；最后一个属性后不能有逗号。

2. 禁止出现前导零（ JSON.stringify 方法自动忽略前导零，而在 JSON.parse 方法中将会抛出 SyntaxError）；如果有小数点, 则后面至少跟着一位数字。

3. 只有有限的一些字符可能会被转义；禁止某些控制字符； Unicode 行分隔符 （U+2028）和段分隔符 （U+2029）被允许 ; 字符串必须用双引号括起来。</Week03/S01-对象/demo-t6-1.js>

### JSON的适用场景

1. 网站表示和传输数据
2. 软件配置文件
3. 轻量级数据储存与交换

## 第七题 阅读推荐链接的文章，复习 JavaScript 对象基础，并总结为一篇文章，发布到简书上，并贴上链接。

<https://www.jianshu.com/p/89de340ecddd>