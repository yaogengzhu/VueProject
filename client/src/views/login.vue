<template>
  <div id="login">
    <div class="form">
      <p class="title">果蔬后台管理系统</p>
      <el-form  label-width="120px" class="loginForm">
        <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="loginForm.uesrname" palceholder="请输入用户名"></el-input>
        </el-form-item>
         <el-form-item label="密码" prop="passwod">
            <el-input type="password" v-model="loginForm.passwod" palceholder=”请输入密码“></el-input>
        </el-form-item>
         <el-form-item size="large" >
            <el-button type="primary">登陆</el-button>
        </el-form-item>
         <el-form-item >
             没有账号<el-link type="primary">立即注册</el-link>
        </el-form-item>
     </el-form>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        uesrname: "",
        password: "",
      }  
    };
  },
  methods: {
  }
};
</script>

<style scoped>
#login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url("../assets/bg.png") no-repeat center;
}
.form {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 680px;
  height: 520px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 3px 3px 10px 10px rgba(0, 0, 0, 0);
}
.title {
  padding: 30px 0;
  font-size: 30px;
  text-align: center;
  color: #378fb8;
  background-color: #f5f5f5;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
/* 表单样式 */
.loginForm{
    padding: 50px 40px 0 0 ;
}
.el-form-item{
    height: 50px;
}
.el-input{
    height: 50px;
    width: 90%;
}
.el-button--primary {
    color: #FFF;
    font-size: 18px;
    background-color: #409EFF;
    border-color: #409EFF;
    width: 90%;
}

</style>
