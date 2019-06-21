// 引入加密模式 
// const md5 = require('md5');
const bcrypt = require('bcrypt');
const moment = require('moment');

// bcrypt的基本用法 
// bcrypt.genSalt(10, function(err, salt) {
//     if (err) throw err;
//     bcrypt.hash('myPlaintextPassword', salt, function(err, hash) {
//         if (err) throw hash; 
//         console.log(hash);
//     });
// });

// promise用法
// bcrypt.hash('11111', 10).then(function(hash) {
//     // Store hash in your password DB.
//     console.log(hash);
//     bcrypt.compare('11111',hash).then( res =>{
//         console.log(res)
//     })
// });



// 引入conn  
const conn = require('../../db/db');

const register = async (req, res) => {
    // 判读用户名是否已经存在   (处理用户的唯一性)
    // let userStr = 'select * from users where username = ?';
    // conn.query(userStr, req.body.username, (err, results) => {
    //     if (err) throw err;
    // })
    // 设置用户数据存储的空对象
    let userObj = {};
    userObj.username = req.body.username;
    userObj.email = req.body.email;
    // console.log(userObj);
    // 处理时间 
    userObj.date = moment().format('YYYY-MM-DD hh:mm:ss');
    // 处理密码 
    bcrypt.hash(req.body.password, 10).then(hash => {
        userObj.password = hash;
        // 操作数据库 
        let str = 'insert into users set?';
        conn.query(str, userObj, (err, results) => {
            if (err) throw err;
            // console.log(results);
            // 可以通过影响行数来判断是否写入 
            if (results.affectedRows) {
                res.status(200).json({
                    msg: '注册成功',
                    status: 200,
                    data: { username: userObj.username, email: userObj.email }
                })
            }
        })
    })

    // 方式2 
    // bcrypt.genSalt(10, (err, salt) => {
    //     if (err) throw err;
    //     bcrypt.hash(req.body.password, salt, (err, hash) => {
    //         if (err) throw err;
    //         userObj.password = hash;
    //         // 在成功的处理密码后在执行
    //         res.json(userObj);
    //     })

    // })
}

const login = async (req, res) => {
    console.log('login');
}

// 路由守卫 



module.exports = {
    register,
    login
}


