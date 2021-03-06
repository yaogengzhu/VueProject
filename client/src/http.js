import axios  from 'axios';

import { Message, Loading } from 'element-ui';


let loading;
// 开始加载中
function startLoading(){
     loading = Loading.service({
        lock: true,
        text: '玩命加载中',
        background: 'rgba(0, 0, 0, 0.5'
    })
}

function endLoading(){
    // 直接close可以结束加载动画
    loading = Loading.close();
}

// 请求拦截 
axios.interceptors.request.use( config =>{
    // 加载动画 
    startLoading();
    return config;
}, error =>{
    return Promise.reject(error);
})

// 相应拦截 
axios.interceptors.response.use( response =>{
    // 结束动画
    endLoading();
    return response;
}, error => {
    // 错误提醒
    endLoading();
    Message.error(error.response.data);
    return Promise.reject(error);
})

export default axios;