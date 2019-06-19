import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http'

Vue.prototype.axios = axios;

// 引入element ui组件 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// 使用elementUi
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
