const express = require('express');
const router = express.Router();
const users  = require('../../api/users/index')


//test mysql  
// conn.query('select * from users', (err, results) =>{
//     if (err)   console.log(err);
//     console.log(results)
// })

/**
 * $route /api/users/register  
 * @desc   用户注册接口
 * @access public
 **/ 
router.post('/register', users.register ) 
/**
 * $route /api/users/login 
 * @desc  用户登陆接口
 * @access public
 **/ 
router.get('/login', users.login)

module.exports = router;