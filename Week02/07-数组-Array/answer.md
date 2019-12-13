## 第一题 有哪些创建数组的方法？

1. 隐式创建

```
var arr=["Audi","BMW","Volvo"];
```

2. 直接实例化

```
var arr=new Array("Audi","BMW","Volvo");
```

3. 创建数组并给数组元素赋值

```
var arr=new Array();
arr[0]="Edward";
arr[1]="Amons";
arr[2]="Lin";
```

## 第二题 判断下列变量是不是数组类型。

```
var a = '[a, b, c, d]'; // 字符串类型 String
var b = [1, 2, 3, 4]; // 数组类型
```

## 第三题 编写程序，将下面数组中的每一项都乘以2。

```
var a = [1,2,3,4,5];
// should output [2,4,6,8,10]
```

答案: 

```
var a = [1,2,3,4,5];
var b = [];
a.forEach(itm => b.push(itm * 2));
console.log(b);
```

## 第四题 编写程序，按下面的要求输出结果。

```
var colors = ["Red", "Green", "White", "Black"];
// case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
```
答案:

```
var colors = ["Red", "Green", "White", "Black"];

console.log(colors.join(" ")); // case 1 output: 'Red Green White Black'
console.log(colors.join("+")); // case 2 output: 'Red+Green+White+Black'
console.log(colors.join()); // case 3 output: 'Red,Green,White,Black'
```

## 第五题 编写程序，将下面数组中的数字按从大到小的顺序排序。

```
var a = [5,1,8,10,4];
// should output: [10,8,5,4,1]
```

答案:

```
var a = [5,1,8,10,4];
console.log(a.sort((a, b) => b - a))
```

## 第六题 编程程序，找出下列数组中出现频率最高的元素。

```
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// should output: 'a'
```

1. 字典,遍历元素方法 

```
var a = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// should output: 'a'

function findMaxFreqEle(arr) {
  var maxEle = null;
  var maxNum = 0;
  var countDic = {};

  for (ele of arr) {
    countDic[ele] ? countDic[ele]++ : (countDic[ele] = 1);
    if (countDic[ele] > maxNum) {
      maxEle = ele;
      maxNum = countDic[ele];
    }
  }
  return maxEle;
}

console.log(findMaxFreqEle(a));
```

2. `reduce(callback[, initialValue])`

```
var a = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function findMaxFreqEle(arr) {
  var maxEle = arr[0];
  var maxNum = 1;

  var countDic = arr.reduce(function(tmpDic, curEle) {
    tmpDic[curEle] ? tmpDic[curEle]++ : (tmpDic[curEle] = 1);

    if (tmpDic[curEle] > maxNum) {
      maxNum = tmpDic[curEle];
      maxEle = curEle;
    }
    return tmpDic;
  }, {});
  return maxEle;
}

console.log(findMaxFreqEle(a));
```

3. 复杂字典版(字典和查找最大值分开)

```
var a = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// should output: 'a'

function findMaxFreqEle(arr) {
  if (!arr.length) return;
  var countDic = {};

  for (var i = 0, l = arr.length; i < l; i++) {
    if (!countDic[arr[i]]) {
      // 初始化某一项数组元素在对象中计数
      countDic[arr[i]] = 1;
    } else {
      countDic[arr[i]]++;
    }
  }

  // 找出频率最高的元素
  var keys = Object.keys(countDic);
  var maxNum = 0;
  var maxEle;
  for (var i = 0, l = keys.length; i < l; i++) {
    if (countDic[keys[i]] > maxNum) {
      maxEle = keys[i];
      maxNum = countDic[maxEle];
    }
  }
  return maxEle;
}

console.log(findMaxFreqEle(a));
```
