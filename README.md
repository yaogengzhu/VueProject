# vue项目后台接口

- author： **yaogengzhu**

### 所使用的技术框架为

- [X] `express` 
- [x] `mysql`

### 开发过程中使用的一些插件已经express的中间件 
- [x] `md5`   加密  (看到很久没有更新，故本次不采用md5)
- [x] `bcrypt` 本次采用`bcrypt`加密方式
- [x] `body-parser` 请求体解析中间件  [参考](https://www.jianshu.com/p/ea0122ad1ac0)
- [x] `moment` 时间处理插件

## 开发过程细节介绍

### package.json 文件中细节处理 
```js
"scripts": {
    // 在实际上线的时候，直接npm run start  
    "start": "node index.js",
    // 当然也可以用npm run server 来启动，后者使用的是nodemon ，文件一旦被修改，就会立即重启项目
    "server":"nodemon index.js"
}
```

### 创建route基本结构（api)
```js
const express = require('express');
const router = express.Router();

// 引入conn  
const conn = require('../../db/db');
console.log(conn)

// $route /api/users/login
// @desc 用户登陆接口
// @access public
router.get('/login',(req, res) =>{
    res.json({
        name:"zs",
        aeg:12
    })
})
// 导出router 
module.exports = router;
```

在index.js 中的使用方式 
```js
// 引入route 
const users = require('./routers/api/user');
// 注册中间件 
app.use('/api/users',users);
```

### 如何使用mysql  
在使用以下步骤时，请注意本地是否已经安装好了`mysql`,并且是否创建好数据库，我用的是`navicat`的可视化工具。

在使用mysql之前需要下载依赖 

- npm i mysql 

```js
const mysql = require('mysql');

// 配置数据库 
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678',
    database:'nodeApi',
})
// 连接数据库 
conn.connect();
// 此处不做关闭数据库处理
// 导出conn
module.exports = conn;
``` 




### 如何使用`bcrypt`方式加密 
我在以前都是使用的md5的方式进行密码加密，由于md5存在一定的风险，而且这个这个依赖已经很久没有更新了，故本次采用的是`bcrypt`方式加密。

对比md5,bcypt有的优势：虽然对同一个密码，每次生成的hash不一样，但是hash中包含了salt（hash产生过程：先随机生成salt，salt跟password进行hash）；在下次校验时，从hash中取出salt，salt跟password进行hash；得到的结果跟保存在DB中的hash进行比对，compareSync中已经实现了这一过程：bcrypt.compareSync(password, hashFromDB);


#### 使用方式 
useage(command)

- 下包 `npm i bcrypt`

```js
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
```

to hash a password 
#### 如何加密密码 

```js
//方式1：
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
//方式2 
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.
});
```

**以上两种方式都可以达到相同的加密结果** 

#### 如何校验密码 
to check password 
```js
// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    // 密码正确，会返回的res为true
    // res == true
});
bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
    // 密码不对，则返回的res 为false
    // res == false
});
```

值得注意的是：“比较”功能可以对抗定时攻击（使用所谓的“恒定时间”算法）。通常，如果密码，加密密钥或加密哈希与安全性相关，则不要使用常规JavaScript字符串比较函数来比较密码，加密密钥或加密哈希值。

### 除了使用以上方式，还可以使用`promise`方式进行加密 
bcrypt使用global.Promise中可用的任何Promise实现。 NodeJS> = 0.12内置了一个本机Promise实现。但是，这应该适用于任何Promises / A +兼容的实现。

接受回调的异步方法，如果Promise支持可用，则在未指定回调时返回Promise。

**useage**
```js
bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
    // Store hash in your password DB.
});
```

使用`promise`方式验证密码是否一致
```js
// Load hash from your password DB.
// myPlaintextPassword 为密码， hash为加密后的密码
bcrypt.compare(myPlaintextPassword, hash).then(function(res) {
    // res == true
});
bcrypt.compare(someOtherPlaintextPassword, hash).then(function(res) {
    // res == false
});
```

[更多方式可以参考官网](https://www.npmjs.com/package/bcrypt)