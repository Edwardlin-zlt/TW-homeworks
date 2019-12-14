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

---

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
