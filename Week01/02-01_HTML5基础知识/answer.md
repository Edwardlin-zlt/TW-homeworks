## 音频与视频的常用属性和方法是哪些？分别有什么作用？

* `<video>/<audio>`标签是html5提供的展示视频/音频的标准模式
    * 当前支持三种视频格式：`Ogg`，`MPEG 4`，`WebM`
    * 方法
        * `addTextTrack()`	向音频/视频添加新的文本轨道
        * `canPlayType()`	检测浏览器是否能播放指定的音频/视频类型
        * `load()`	重新加载音频/视频元素
        * `play()`	开始播放音频/视频
        * `pause()`	暂停当前播放的音频/视频
    * 常用属性
        * `src` 视频源
        * `height` 视频播放器的高度
        * `width` 视频播放器的宽度
        * `controls` 如果出现该属性，则向用户显示控件，比如播放按钮
        * `autoplay` 如果出现该属性，则视频在就绪后马上播放。
        * `preload` 如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。
        * `loop` 如果出现该属性，则当媒介文件完成播放后再次开始播放。
    * 事件
        * `abort`	当音频/视频的加载已放弃时
        * `canplay`	当浏览器可以播放音频/视频时
        * `canplaythrough`	当浏览器可在不因缓冲而停顿的情况下进行播放时
        * `durationchange`	当音频/视频的时长已更改时
        * `emptied`	当目前的播放列表为空时
        * `ended`	当目前的播放列表已结束时
        * `error`	当在音频/视频加载期间发生错误时
        * `loadeddata`	当浏览器已加载音频/视频的当前帧时
        * `loadedmetadata`	当浏览器已加载音频/视频的元数据时
        * `loadstart`	当浏览器开始查找音频/视频时
        * `pause`	当音频/视频已暂停时
        * `play`	当音频/视频已开始或不再暂停时
        * `playing`	当音频/视频在已因缓冲而暂停或停止后已就绪时
        * `progress`	当浏览器正在下载音频/视频时
        * `ratechange`	当音频/视频的播放速度已更改时
        * `seeked`	当用户已移动/跳跃到音频/视频中的新位置时
        * `seeking`	当用户开始移动/跳跃到音频/视频中的新位置时
        * `stalled`	当浏览器尝试获取媒体数据，但数据不可用时
        * `suspend`	当浏览器刻意不获取媒体数据时
        * `timeupdate`	当目前的播放位置已更改时
        * `volumechange`	当音量已更改时
        * `waiting`	当视频由于需要缓冲下一帧而停止
    * 所有属性
        * `audioTracks`	返回表示可用音轨的 AudioTrackList 对象
        * `autoplay`	设置或返回是否在加载完成后随即播放音频/视频
        * `buffered`	返回表示音频/视频已缓冲部分的 TimeRanges 对象
        * `controller`	返回表示音频/视频当前媒体控制器的 MediaController 对象
        * `controls`	设置或返回音频/视频是否显示控件（比如播放/暂停等）
        * `crossOrigin`	设置或返回音频/视频的 CORS 设置
        * `currentSrc`	返回当前音频/视频的 URL
        * `currentTime`	设置或返回音频/视频中的当前播放位置（以秒计）
        * `defaultMuted`	设置或返回音频/视频默认是否静音
        * `defaultPlaybackRate`	设置或返回音频/视频的默认播放速度
        * `duration`	返回当前音频/视频的长度（以秒计）
        * `ended`	返回音频/视频的播放是否已结束
        * `error`	返回表示音频/视频错误状态的 MediaError 对象
        * `loop`	设置或返回音频/视频是否应在结束时重新播放
        * `mediaGroup`	设置或返回音频/视频所属的组合（用于连接多个音频/视频元素）
        * `muted`	设置或返回音频/视频是否静音
        * `networkState`	返回音频/视频的当前网络状态
        * `paused`	设置或返回音频/视频是否暂停
        * `playbackRate`	设置或返回音频/视频播放的速度
        * `played`	返回表示音频/视频已播放部分的 TimeRanges 对象
        * `preload`	设置或返回音频/视频是否应该在页面加载后进行加载
        * `readyState`	返回音频/视频当前的就绪状态
        * `seekable`	返回表示音频/视频可寻址部分的 TimeRanges 对象
        * `seeking`	返回用户是否正在音频/视频中进行查找
        * `src	设置或返回音频`/视频元素的当前来源
        * `startDate`	返回表示当前时间偏移的 Date 对象
        * `textTracks`	返回表示可用文本轨道的 TextTrackList 对象
        * `videoTracks`	返回表示可用视频轨道的 VideoTrackList 对象
        * `volume`	设置或返回音频/视频的音量

* `<source>` 为媒介元素（比如 `<video>` 和 `<audio>`）定义媒介资源。允许您规定可替换的视频/音频文件供浏览器根据它对媒体类型或者编解码器的支持进行选择。
    * 就是说可以提供多个源，一个挂了还有另一个
    * 属性
        * `src` 媒体源
        * `type` MIME类型

## Web 存储的方法各自有什么特点？

首先，**Web 储存**分为了两种方法，他们分别是`localStorage`和`sessionStorage`.
`localStorage`这种储存方法没有时间限制，可以将数据存在本地。而`sessionStorage`则是只在一次网络会话过程中保存数据，
如果这次会话结束，那么数据就没有了。

## `Canvas` 画布与 `SVG` 的区别是什么？

Ref: <https://www.w3school.com.cn/html5/html_5_canvas_vs_svg.asp>

Canvas 和 SVG 都允许您在浏览器中创建图形，但是它们在根本上是不同的。

### SVG
SVG 是一种使用 XML 描述 2D 图形的语言。

SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。

在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。

### Canvas
Canvas 通过 JavaScript 来绘制 2D 图形。

Canvas 是逐像素进行渲染的。

在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

### Canvas 与 SVG 的比较
下表列出了 canvas 与 SVG 之间的一些不同之处。

* Canvas
    * 依赖分辨率
    * 不支持事件处理器
    * 弱的文本渲染能力
    * 能够以 .png 或 .jpg 格式保存结果图像
    * 最适合图像密集型的游戏，其中的许多对象会被频繁重绘
* SVG
    * 不依赖分辨率
    * 支持事件处理器
    * 最适合带有大型渲染区域的应用程序（比如谷歌地图）
    * 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
    * 不适合游戏应用

