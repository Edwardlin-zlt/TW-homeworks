## 当不确定值是什么的时候，直接用`String()`它总会返回字符串。

```
var a = null;
var b = undefined;
var c = "haha"
var d = true;
var e = 23;

var f = [a, b, c, d, e];

for (item of f) {
  console.log(String(item));
}
```
