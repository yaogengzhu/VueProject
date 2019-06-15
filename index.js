const express = require('express');
const app = express();
// 引入中间件 
const bodyParser = require('body-parser');
// 创建 application/json 解析
app.use(bodyParser.json())
// 创建 application/x-www-form-urlencoded 解析
app.use(bodyParser.urlencoded({ extended: false }))

// 引入route 
const users = require("./routes/users/index");
// 注册中间件 
app.use('/api/users', users);

// 设置默认端口为为500 
const port = process.env.port || 5000;

// 监听端口号
app.listen(port, () => {
    console.log(`the server is running at http://127.0.0.1:${port}`)
})