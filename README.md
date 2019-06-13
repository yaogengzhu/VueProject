## vue项目后台接口

- author： **yaogengzhu**

所使用的技术框架为
- [] `express` 




### 开发过程细节介绍

### package.json 文件中细节处理 
```js
"scripts": {
    // 在实际上线的时候，直接npm run start  
    "start": "node index.js",
    // 当然也可以用npm run server 来启动，后者使用的是nodemon ，文件一旦被修改，就会立即重启项目
    "server":"nodemon index.js"
}
```
