import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/good/Home'
import my_integral from '@/views/integral/my_integral'
import integral_good from '@/views/integral/integral_good'
import in_index from '@/views/integral/in_index'
import soft_pf from '@/views/pf/soft_pf'
import al_exchange from '@/views/integral/al_exchange'
import mySale from '@/views/mySale/Index'
import publishIndex from '@/views/mySale/publish/PublishIndex'
import buyOrder from '@/views/buyOrder/Index'
import saleOrderIndex from '@/views/mySale/saleOrder/Index'
import test from '@/views/test/UploadTest'
Vue.use(Router)

export default new Router({
  mode:'history',
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
      path: '/test',
      name: 'test',
      component: test},
    {
      path: '/soft_pf',
      name: 'soft_pf',
      component: soft_pf},
      {
        path: '/buyOrder',
        name: 'buyOrder',
        component: buyOrder},
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
        },
        {
          path: '/al_exchange', 
          name: 'al_exchange',
          component: al_exchange 
        }

      ]
    },
    {
      path: '/mySale',
      name: 'mySale',
      component: mySale,
      children:[
          {
            path: '/mySale/publishIndex', 
            name: 'publishIndex',
            component: publishIndex 
          },
          {
            path: '/mySale/saleOrderIndex', 
            name: 'saleOrderIndex',
            component: saleOrderIndex 
           }]}
          ]})
