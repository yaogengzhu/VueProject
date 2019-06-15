// 引入加密模式 
const md5 = require('md5');
const moment = require('moment');

// 引入conn  
const conn = require('../../db/db');

const register = async(req, res) => {
    let params = req.body;
    console.log(params);
    res.json({msg:'ok'})
}

const login = async (req, res) => {
    console.log('login');
}


module.exports = {
    register,
    login
}


