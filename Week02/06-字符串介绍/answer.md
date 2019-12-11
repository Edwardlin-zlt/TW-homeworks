## 完成下面程序，将name变量中的字母全部转为为大写，输出：'HELLO'。

```
var name = 'hello';
// write your code here...
```

1. `toUpperCase`

```
var name = 'hello';
console.log(name.toUpperCase());
```

2. `toLocaleUpperCase`

```
var  name = 'hello';
console.log(name.toLocaleUpperCase());
```

区别： `toUpperCase`会因为一些特殊的场景（比如土耳其:其编码和Unicode有区别）导致结果有问题。`toLocaleUpperCase`会避免这种问题。但是一般就用`toUpperCase`就行了。

## 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。

```
var sentence = 'good afternoon, mr mike.';
// write your code here...
```

1. 正则表达式法
  * `replace`: 第一个参数为正则表达式，指字符串开始的小写字符，或者是 前面是空格的小写字母; 第二个参数为调用函数，将匹配到的字符转换为大写。

```
function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}
```

2. `split`分割成单词再`join`

```
function firstToUpperCase(str) {
  words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
```

## 完成下面程序，将money变量中的金额提取出来，输出：20。

```
var money = '￥20';
// write your code here...
```

1. 正则表达式法

```
var money = '￥20';

function getMoneyNum(strMoney) {
  var money = strMoney.match(/\d+/); \\ /\d+\.\d+/g, 匹配小数
  return Number(money[0], 10);
}

console.log(getMoneyNum(money)); \\ 20
```

2. 如果数字在开头，可以直接`parseInt`或者`parseFloat`

```
var money = '20￥';

console.log(parseFloat(money)) \\ 20
console.log(parseInt(money)) \\ 20
```

## 编写函数 toCamelStyle, 满足以下输出结果:

```
function toCamelStyle() {
// write your code here...

}

toCamelStyle('abc_bcd');  // 输出 'abcBcd'
toCamelStyle('a_3_c_d_ef');  // 输出 'a3CDEf'
toCamelStyle('_a_b_c_d_ef');  // 输出 '_aBCDEf'
```

1. `split`处理单词

```
function toCamelStyle(rowStr) {
  if (rowStr.charAt(0) === "_") {
    tmpStr = rowStr.slice(1);
  } else {
    tmpStr = rowStr;
  }

  words = tmpStr.split("_");

  for (var i = 0; i < words.length; i++) {
    if (i === 0) {
      words[i] = words[i].toLowerCase();
    } else {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }

  if (rowStr.charAt(0) === "_") {
    words[0] = "_" + words[0];
  }
  return words.join("");
}

toCamelStyle("abc_bcd"); // 输出 'abcBcd'
toCamelStyle("a_3_c_d_ef"); // 输出 'a3CDEf'
toCamelStyle("_a_b_c_d_ef"); // 输出 '_aBCDEf'
```

2. 正则表达式

```
function toCamelStyle(rowStr) {
  newStr = rowStr
    // 开头的字符或者中间以'_'开头的字符
    .replace(/^[A-Za-z0-9]|_[A-Za-z0-9]/g, function(matchedLetter, index) {
      if (index === 0) {
        return matchedLetter.toLowerCase();
      } else {
        return matchedLetter.toUpperCase();
      }
    })
    .replace(/_/g, "");
  if (rowStr.charAt(0) === "_") {
    newStr = "_" + newStr;
  }
  return newStr;
}

toCamelStyle('abc_bcd');  // 输出 'abcBcd'
toCamelStyle('a_3_c_d_ef');  // 输出 'a3CDEf'
toCamelStyle('_a_b_c_d_ef');  // 输出 '_aBCDEf'
```