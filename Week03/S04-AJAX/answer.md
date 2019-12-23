## 第一题 总结 Ajax 请求共有多少种回调呢？

AJAX 请求一共有八种回调(Callback)

1. onSuccess
2. onFailure
3. onUninitialized
4. onLoading
5. onLoaded
6. onInteractive
7. onComplete
8. onException

每一个都可以单词含义已经比较清楚了

## 第二题 编程实现，创建一个名为 ajax 的 XHR 对象.

```
 function myCallback(xhr) {
   alert(xhr.responseText);
 }
 ajax.request(“somefile.txt”, ”get”, myCallback);
 ajax.request(“script.php”, ”post”, myCallback, ”first=John&last=Smith”);
```

答案
样例链接 <https://edwardlin-zlt.github.io/TW-homeworks/Week03/S04-AJAX/task02.html>

```
var ajax = {
  request: function(url, type, callbackFunc, sendData) {
    url = url || "";
    type = type || "POST";
    callbackFunc = callbackFunc || function() {};
    sendData = sendData || undefined;

    var xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        callbackFunc(xhr);
      }
    };
    if (sendData) {
      xhr.send(sendData);
    } else {
      xhr.send();
    }
  }
};
```

## 第三题 造成跨域的原因有哪些？

1. 浏览器限制，目前所有浏览器都实现了**同源策略**规范。
2. 请求方式 Type 为 xhr。如果非 xhr，如 json，script 则也不会存在跨域问题
3. 请求方与服务方的源不同，即跨域，包括：

- 协议不同
- 域名不同
- 端口不同

## 第四题 有哪些办法可以解决跨域？

1. 对于浏览器限制的解决方案-关闭浏览器的同源策略

```
--args --disable-web-security --user-data-dir
```

设置浏览器的启动参数，将浏览器的同源策略取消。该方式要求所用的用户进行手动操作，肯定是不现实的。

2. 请求方式 Type 为 xhr 的解决方案

既然只有 Type 为 xhr 的请求才会存在跨域请求，那么我们是不是可以换一种请求方式呢。Jsonp 的实现就是这样。将原本 Type 是 xhr 的请求伪造成 script 请求。

Jsonp 的请求路径后面会自动带上 callback 参数，服务端可据此判断是否是 jsonp 请求，将返回值以 script 的形式进行封装。且服务端需要进行相应的改动。

- 弊端:
  - 服务器需要改动
  - 只支持 GET 方式 (因为获取 script 都是 GET 方式，前端指定请求方式也无效，还以 GET 方式发起的请求)

3. 增加如`Nginx`的反向代理，请求并不直接转发到服务器。

## 编程实现：有一个方法，可以避免每次请求重复去写创建 XHR 的整个过程，请求方法现只考虑 POST 和 GET，要求默认请求方法是 GET，如下：

```
/**
options = {
  url: "",
  method: "",
  headers: {},   // 传给
  data: "",     // 传给服务器的参数
  success: function(result) {},  // 请求成功后调用此方法
  fail: function(error) {}    // 请求失败或出错后调用此方法
}
**/
var request = function(options) {
   // code this here
}
```

答案：
样例链接： <https://edwardlin-zlt.github.io/TW-homeworks/Week03/S04-AJAX/task05.html>

```
var request = function(options) {
  options = {
    url: options.url || "",
    method: options.method || "GET",
    headers: options.headers || {},
    data: options.data || null,
    onSuccess: options.success || function(result) {},
    onFailure: options.fail || function(error) {}
  };

  var xhr = new XMLHttpRequest();
  xhr.open(options.method, options.url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        options.onSuccess(xhr.responseText);
      } else {
        options.onFailure(xhr.status);
      }
    }
  };
  xhr.send(options.data);
};
```
