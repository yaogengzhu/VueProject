# vue项目详解

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```


### 如何使用elementUi 

- 第一步 `npm i element-ui`
- 第二步 使用 `elementUi`
```js
// 引入element ui组件 
import ElementUI from 'element-ui';
// 引入element ui 组件的样式
import 'element-ui/lib/theme-chalk/index.css';
// 将elementui 挂载到vue上
vue.use(ElementUI);
```

### login 登陆验证如何实现的呢？
Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可。

具体实例介绍
```html
<!-- 此处使用了 :rules="rules" 验证规则   ref="loginForm"  :model="loginForm" 表示验证的对象 -->
 <el-form  label-width="120px" class="loginForm" :model="loginForm" :rules="rules" ref="loginForm">
     <!-- prop 表示需要校验的字段名 -->
        <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名" autofocus></el-input>
        </el-form-item>
         <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" @keyup.enter.native="submitForm('loginForm')"></el-input>
        </el-form-item>
         <el-form-item size="large" >
            <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
        </el-form-item>
         <el-form-item >
             没有账号<el-link type="primary">立即注册</el-link>
        </el-form-item>
    </el-form>
```
数据校验业务操作
```js
data() {
    return {
        // 表单的数据对象
      loginForm: {
        username: "",
        password: "",
      },
      // 验证规则（注意书写）切记莫写错 
      rules:{
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password:[
          // 校验字段
          {required: true, message: '请输入用户密码', trigger: 'blur'},
          // 校验类型
        ]
      }
    };
  },
  methods: {
      // 登陆按钮的验证规则方法
       submitForm(formName) {
        console.log('ok')
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 校验成功，进行下一步
            if(this.loginForm.username === 'admin' && this.loginForm.password === '123456') {
              this.$message({
                // 可点击关闭
                showClose:true,
                message:'登陆成功',
                type:'success'
              })
            } else {
              this.$message({
                 showClose:true,
                message:'登陆失败',
                type:'error'
              })
            }
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
  }
  ```
