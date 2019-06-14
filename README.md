# vue项目后台接口

- author： **yaogengzhu**

### 所使用的技术框架为

- [X] `express` 
- [x] `mysql`

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


