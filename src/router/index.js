import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/good/Home/Home'
import my_integral from '@/views/integral/my_integral'
import integral_good from '@/views/integral/integral_good'
import in_index from '@/views/integral/in_index'
import soft_pf from '@/views/pf/soft_pf'
import mySale from '@/views/mySale/Index'
import publishIndex from '@/views/mySale/publish/PublishIndex'
import buyOrder from '@/views/buyOrder/Index'
import saleOrderIndex from '@/views/mySale/saleOrder/Index'
import test from '@/views/test/UploadTest'
import  goodDetail from '@/views/good/GoodDetail/GoodDetail'
import goodSearch from '@/views/good/goodSearch/GoodSearch'
import igDetail from '@/views/integral/integral_good_in/ig_detail'
import reportPf from '@/views/pf/report_pf'
import generateOrder from'@/views/buyOrder/generateOrder/Index'
import orderTemp from'@/views/buyOrder/Temp'
import Login from '@/views/user/Login'
import Register from '@/views/user/Lr/Register'
import evModel from '@/views/evaluate/evMyev/evModel'
import myEvModel from '@/views/evaluate/evMyev/myEvModel'
import mEvDetail from '@/views/evaluate/mEvDetail'
import returnDetail from '@/views/buyOrder/ReturnDetail'
import orderDetail from'@/views/buyOrder/OrderDetail'
import MyHomeIndex from'@/views/user/MyHome/MyHomeIndex'
import AddNewAddress from'@/views/user/MyHome/Address/AddNewAddress'
import EditNewAddress from'@/views/user/MyHome/Address/EditNewAddress'
Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/AddNewAddress',
      name: 'AddNewAddress',
      component: AddNewAddress},
      {
        path: '/EditNewAddress',
        name: 'EditNewAddress',
        component: EditNewAddress},
    {
      path: '/mEvDetail',
      name: 'mEvDetail',
      component: mEvDetail},
      {
        path: '/MyHomeIndex',
        name: 'MyHomeIndex',
        component: MyHomeIndex},
      {
        path:'/orderDetail',
        name: 'orderDetail',
        component: orderDetail
        },
     {
      path: '/evModel',
      name: 'evModel',
      component: evModel},
      {
        path: '/myEvModel',
        name: 'myEvModel',
        component: myEvModel},
    {
      path: '/Login',
      name: 'Login',
      component: Login},
      {
        path: '/Register',
        name: 'Register',
        component: Register},
    {
      path: '/goodDetail',
      name: 'goodDetail',
      component: goodDetail},
      {
        path:'/orderTemp',
        name: 'orderTemp',
        component: orderTemp
        },
       {path:'/returnDetail',
        name: 'returnDetail',
        component: returnDetail
        },
      {
      path:'/generateOrder',
      name: 'generateOrder',
      component: generateOrder
      },
    {
      path: '/reportPf',
      name: 'reportPf',
      component: reportPf
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home},
      // 重定向,进入首页默认显示Home组件的内容
      // 订单生成页
    // {
    //   path: '/generateOrder', 
    //   name: 'generateOrder',
    //   component: generateOrder 
    // },
      {
      path: '/', 
      redirect: '/Home',
      component: Home 
    },
    {
      path: '/igDetail', 
      name: '/igDetail',
      component: igDetail
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
          path: '/goodSearch',
          name: 'goodSearch',
          component: goodSearch},
    {
      path: '/in_index', 
      name: 'in_index',
      component: in_index ,
      redirect:'my_integral',
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
    {
      path: '/mySale',
      name: 'mySale',
      component: mySale,
      children:[
        {
          path: '/', 
          redirect: '/mySale/publishIndex',
          component: publishIndex 
        },
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
