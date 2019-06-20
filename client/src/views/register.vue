<template>
    <div id="register">
        <div class="register-box">
            <p>果蔬管理系统注册</p>
            <!-- 表单部分 -->
            <el-form :model="registerForm" :rules="rules" ref="registerForm" label-width="100px" class="registerForm">
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="registerForm.username"></el-input>
                </el-form-item>
                 <el-form-item label="邮箱" prop="email">
                    <el-input type="text" v-model="registerForm.email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="registerForm.password"></el-input>
                </el-form-item>
                 <el-form-item label="确认密码" prop="confirmPassword">
                    <el-input type="password" v-model="registerForm.confirmPassword"></el-input>
                </el-form-item>
                <!-- 登陆 -->
                <el-form-item>
                    <el-button type="primary" class="registerBtn">立即注册</el-button>
                </el-form-item>
                <el-form-item>
                   已有账号<el-link type="success" @click="jumpToLogin">立即登陆</el-link>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'register',
    data(){
        var confirmPassword1 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.registerForm.password) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        return {
            registerForm:{
                username:'',
                password:'',
                email:'',
                confirmPassword:''
            },
            rules:{
                username:[
                    { required: true,  message: '请输入用户名', trigger: 'blur'},
                    { min: 2, max: 6, message: '用户名长度在2-6个字之间', trigger: 'blur'}
                ],
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur'},
                    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur'}
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, message: '请最少输入6位数密码', trigger: 'blur'}
                ],
                confirmPassword: [
                    { required: true, message: '请再次输入用户名密码', trigger: 'blur'},
                    { validator: confirmPassword1, trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        // 跳转登陆
        jumpToLogin() {
            // console.log(this.axios)
            this.$router.push('/login');
        }   
    }
}
</script>

<style scoped>
#register{
    position: relative;
    width: 100%;
    height: 100%;
    background:url('../assets/bg.png') no-repeat center;
}
.register-box{
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    margin: auto;
    width: 500px;
    max-height: 520px;
    border-radius: 30px;
    background-color: #fff;
    border: 1px solid #fff;
}
.register-box p{
    font-size: 25px;
    color: #378fb8;
    padding:30px 0 ;
    text-align: center;
    background-color: #fafafa;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
}
/* 表单部分 */
.el-form{
    margin:10px 0;
}
.el-form-item{
    padding: 5px 0;
}
.el-input{
    width: 85%;
}
.registerBtn{
    width: 85%;
}
</style>
