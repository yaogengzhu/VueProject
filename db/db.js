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