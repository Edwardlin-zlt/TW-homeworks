## 用 NPM 初始化一个项目，并安装 express 模块，贴出 package.json 的内容。

### NPM 初始化

在模块目录下`npm init`

### 安装 `express`

安装语法

```
> npm install <Module Name> [-g]
```

* `g` switch toggle 全局或本地安装
  * 全局: 安装在用户根目录或者系统特定目录，所有其他Module都可以使用
  * 本地: 直接安装在该项目目录下

### `package.json`

```
  {
    "name": "npm-general",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "express": "^4.17.1"
    }
  }
```

实例: <./index.js>