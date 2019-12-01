## 为了更好的向前兼容不同的浏览器，编写CSS3时都有哪些前缀？分别对应什么浏览器？

前缀列表：
* -ms- 兼容IE浏览器
* -moz- 兼容firefox
* -o- 兼容opera
* -webkit- 兼容chrome 和 safari

## 说说你理解的伪类和伪元素分别是什么？

### 伪类
先来看看MDN文档：
> [A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s).](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) | CSS 伪类是一种加在选择器之后的关键字，通过这种关键字，我们可以指定被选择元素的特殊状态。

> [In CSS, a pseudo-class selector targets elements depending on their state rather than on information from the document tree.](https://developer.mozilla.org/en-US/docs/Glossary/Pseudo-class) | 在CSS中，伪类选择器通过元素状态而非元素在文档树中的信息来选择元素对象。

#### Syntax
```
element:pseudo-class {
    property: value;
}
```

### 伪元素
> [A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s).](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) | 伪元素是一种帮助你处理被选择元素的特定部分的关键字。

#### Syntax
```
element::pseudo-element {
    property: value;
}
```
### 区别
1. 伪类选状态，伪元素选特定部分
2. 伪类用`:`隔开原选择器和伪类，伪元素用`::`隔开原选择器和伪类,但由于浏览器的强大容错，即使不规范用错`:`一般也可以被识别。

## 分清 Transform 、Transition、 Animations 三兄弟,并阐述它们分别的用处？

`transform`、`transition`、`animation`分别代表着转换、过渡以及动画。

### `transform`转换

`transform`的转换，并不是动态的，而是**最终时刻的状态**。

* 功能 `values`
    * 移动 `translate`
        * `transform: translate(x, y)` 向X方向（右）移动x，向Y方向（下）移动y
        * `transform: translateX(x)`
        * `transform: translateY(y)`
    * 缩放 `scale`
        * `transform: scale(x, y)` 对象元素在X，Y方向分别缩放x比例和y比例。（若只有一个值，则X，Y方向同时缩放该值
        * `transform: scaleX(x)`
        * `transform: scaleY(y)`
    * 旋转 `rotate`
        * `transform: rotate(x-deg)` 注: 括号中`x`后面的`deg`是单位。被选择元素旋转x度,其旋转中心为元素的中心。
        * `transform-origin`.通过对该属性的赋值，可以改变其旋转时，环绕的中心。默认为`transform-origin: center center`
        * `transform: rotateX(x-deg)` 元素绕**X轴**旋转，要点立体想象力哦，就是把放在桌上的一张纸固定一条边，揭起来变成空间的一张纸，其纸面与桌面成角为x度。
        * `transform: rotateY(x-deg)` 元素绕**Y轴**旋转。
        * Ref: <https://www.cnblogs.com/yanggeng/p/11275771.html>
    * 扭曲/斜切 `skew`
        * `transform: skew(x-deg[, y-deg])` 第一个参数对应X轴，第二个参数对应Y轴。如果第二个参数未提供，则值为0，也就是Y轴方向上无斜切。skew是用来对元素进行扭曲变行，第一个参数是水平方向扭曲角度，第二个参数是垂直方向扭曲角度。其中第二个参数是可选参数，如果没有设置第二个参数，那么Y轴为0deg。同样是以元素中心为基点，我们也可以通过transform-origin来改变元素的基点位置。
        * `transfrom: skewX(x-deg)`
        * `transform: skewY(x-deg)`
    * 注意：CSS可以是三维的，即还有**Z轴**。但由于不太常用，所有暂不列出

### `transition` 过渡 

`transition`为我们添加了某种过渡效果，可以从一种样式转变到另一个的时候，无需使用`Flash`动画或`JavaScript`。它与`animation`的区别在于，`transition`是为变化的过程添加动画，所以必须要有一个事件去触发元素某个样式的值的变化。[引用自简书](https://www.jianshu.com/p/0e0e1903b80d)

单单在给一个元素赋值`transition`并没有什么用，一般是在CSS中，同一个元素在不同的状态下有不同的属性值，比如
```
.box{
  width: 100px;
}

.box:hover {
  width: 20px;
  transition: all 1s linear 0.2s;
}
```    
即，当鼠标悬停在`.box`元素上时，经过`0.2s`的延迟后，在接下来的`1s`内，会线性过渡到`width: 20px`。

Example: <https://edwardlin-zlt.github.io/TW-homeworks/Week01/05-01_CSS基础/transition_try.html>

#### `transition`的属性和值

* `transition`	简写属性，用于在一个属性中设置四个过渡属性。
* `transition-property`	规定应用过渡的 CSS 属性的名称。
* `transition-duration`	定义过渡效果花费的时间。默认是 0。
* `transition-timing-function`	规定过渡效果的时间曲线。默认是 "ease"。
   * `linear`	规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
   * `ease`	规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
   * `ease-in`	规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
   * `ease-out`	规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
   * `ease-in-out`	规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
   * `cubic-bezier(n,n,n,n)`	在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。
* `transition-delay`	规定过渡效果何时开始。默认是 0。

### `animation` 动画

#### 基本使用

* 首先使用 `@keyframes` 创建动画。
```
@keyframes ani-name {
    from {property: value;}
    to {property: value;}
}
```

其实就是定义关键帧，可以使用`0-100%`定义多个关键帧，实现对动画的精细控制。而上面的关键字`from`和`to`其实分别就代表`0%`与`100%`

```
@keyframes ani-name {
    0% {property: value;}
    25% {property: value;}
    50% {property: value;}
    75% {property: value;}
    100% {property: value;}
}
```

* 创建好了动画，就要对选择器选择元素使用`animation`属性进行调用动画

语法: `animation: name duration timing-function delay iteration-count direction;`

Example: <https://edwardlin-zlt.github.io/TW-homeworks/Week01/05-01_CSS基础/animation_try.html>

#### 直接拿来用的CSS动画

<https://github.com/daneden/animate.css>

#### animation 属性是一个简写属性，用于设置六个动画属性

* `animation-name` 规定需要绑定到选择器的 keyframe 名称
* `animation-duration` 规定完成动画所花费的时间，以秒或毫秒计
* `animation-timing-function` 规定动画的速度曲线.
* `animation-delay` 规定在动画开始之前的延迟.
* `animation-iteration-count` 规定动画应该播放的次数.
* `animation-direction` 规定是否应该轮流反向播放动画.

注意: 一定要设置`animation-duration`,否则动画时常为`0`,动画不会播放。

语法: `animation: name duration timing-function delay iteration-count direction;`

默认值: `animation: none 0 ease 0 1 normal`

#### 各个属性可取的值

* animation-name
    * `@keyframes` 定义的一个动画名称
* animation-duration
* animation-timing-function
    * linear 动画从头到尾的速度是相同的。
    * ease 默认。动画以低速开始，然后加快，在结束前变慢。
    * ease-in 动画以低速开始。
    * ease-out 动画以低速结束。
    * ease-in-out 动画以低速开始和结束。
    * cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。
* animation-delay
* animation-iteration-count
    * n 定义动画播放次数的数值。
    * infinite 规定动画应该无限次播放。
* animation-direction
    * normal 默认值。动画应该正常播放。
    * alternate 动画应该轮流反向播放。

## animation-fill-mode属性值：

* none: 默认值，播放完动画后，画面停在起始位置
* forwards: 播放完动画，停在animation定义的最后一帧
* backwards: 如果设置了animation-delay，在开始到delay这段时间，画面停在第一帧。如果没有设置delay，画面是元素设置的初始值。
* both，向前和向后填充模式都被应用。

