import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login';
import NotFound from '@/views/404';
import Register from '@/views/register';
import Home from '@/views/home';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '*',
      name:'404pages',
      component:NotFound
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path: '/register',
      name:'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
