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

module.exports = router;