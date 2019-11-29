## IE 浏览器的盒模型有什么表现？

CSS代码用IE盒模型解析将会出现偏小的现象。

IE5.5 以前使用的是IE盒模型，其表现为Content的`width`和`height`讲`border`和`padding`计算在了里面。而现在普遍使用的W3C盒模型（IE6以上都使用的W3C盒模型）的`width`和`height`属性不包含`border`和`padding`。而`bix-sizing`允许开发者选择盒模型的解析方式，其中`box-sizing: border-box`就是IE盒模型的，可以避免`border`和`padding`将盒子撑开，即`width`和`height`就是从盒子外面皮开始算的最终大小。

## 让一个块级元素水平居中的方式有哪些？

1. 绝对位置的方法

已知块级元素的`width`,用`position: absolute`属性确定绝对位置，`left: 50%`将其定位到中间，并向左移动`width/2`.

```
.mydiv{ 
 
   width:200px;  
 
   position:absolute;  
 
   left:50%;  
 
   margin:-100px 0 0 -100px }
```

2. 使用`margin: 0 auto`自动左右居中。注意：一定要给该元素附上`width`属性，否则不会居中。

3. jQuery实现水平和垂直居中.

4. 使用`transform`。

## `display: none`; 和 `visibility: hidden`; 都是让元素隐藏，有什么区别？

1. `display:none`是彻底消失，不在文档流中占位，浏览器也不会解析该元素；`visibility:hidden`是视觉上消失了，可以理解为透明度为0的效果，在文档流中占位，浏览器会解析该元素；

2. 使用`visibility:hidde`n比`display:none`性能上要好，`display:none`切换显示时`visibility`，页面产生回流（当页面中的一部分元素需要改变规模尺寸、布局、显示隐藏等，页面重新构建，此时就是回流。所有页面第一次加载时需要产生一次回流），而`visibility`切换是否显示时则不会引起回流。

## 两列布局和三列布局

两列布局成果页面： <https://edwardlin-zlt.github.io/TW-homeworks/Week01/04-01_CSS基础二/0401_two_col.html>

三列布局成果页面: <https://edwardlin-zlt.github.io/TW-homeworks/Week01/04-01_CSS基础二/0401_three_col_2.html>

## overflow 的 auto、hidden、scroll 值分别代表什么？

`overflow`控制当内容溢出时的表现形式
* `auto` 自动，即内容若未溢出，则啥也不做;如果内容溢出，就增加滚动条，显示内容。
* `scroll` 滚动条一直有，不管内容有没有溢出
* `hidden` 将超出对象尺寸的内容进行裁剪，将不出现滚动条。

样例： <https://edwardlin-zlt.github.io/TW-homeworks/Week01/04-01_CSS基础二/0401_overflow_demo.html>