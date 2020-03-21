import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/good/Home'
import my_integral from '@/views/integral/my_integral'
import integral_good from '@/views/integral/integral_good'
import in_index from '@/views/integral/in_index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home},
      // 重定向,进入首页默认显示Home组件的内容
    {
      path: '/', 
      redirect: '/Home',
      component: Home 
    },
    {
      path: '/in_index', 
      name: 'in_index',
      component: in_index ,
      children:[
        {
          path: '/my_integral', 
          name: 'my_integral',
          component: my_integral 
        },
        {
          path: '/integral_good', 
          name: 'integral_good',
          component: integral_good 
        }
      ]
    },
  ],
  mode:"history"//把 Vue 中配置的路由从默认的 hash 模式切换为 histroy 模式
})
