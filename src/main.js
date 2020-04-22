// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 设置反向代理，前端请求默认发送到 http://api.gomai.com/api
//var axios = require('axios')
import axios from 'axios'
import NavMenu from '@/components/NavMenu'
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfontType/iconfont.css'
import '@/assets/font_1744003_w94qbvgo9u/iconfont.css'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
// axios.defaults.baseURL = 'http://api.gomai.com/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type']='text/plain'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('NavMenu',NavMenu)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
