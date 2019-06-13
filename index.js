const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    console.log('ok');
})

// 设置默认端口为为500 
const port = process.env.port || 5000;

// 监听端口号
app.listen(port, ()=>{
    console.log(`the server is running at http://127.0.0.1:${port}`)
})