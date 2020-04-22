import axios from 'axios'
import Vue from 'vue';
//2.新创建一个vue实例
let v = new Vue();

import 'element-ui/lib/theme-chalk/index.css';
// 创建axios实例
const service = axios.create({
  baseURL: "http://api.gomai.com/api", // api的base_url    
  // baseURL: "http://localhost:10010/api",
  timeout: 30000 // 请求超时时间
})
const redirect_uri = "http://www.gomai.com/Login";
service.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json',
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  return Promise.reject(error);
})
// respone拦截器
service.interceptors.response.use(
  res => {
    console.log(res,'dd')
    let result = res.data || null;
    if (!result) {
      return Promise.reject();
    }
    if (result.code == 0 || result == "") {
      return result.data;
    } else if (result.code == -1) {
      v.$notify.error({
        title: '错误',
        message: '请求错误'
      });
    } else {
      v.$notify.error({
        title: '错误',
        message: result.message || '请求错误'
      });
      return Promise.reject(result);
    }
  },
  error => {
    if(error.response.status == 401){
      v.$notify.error({
        title: '错误',
        message: '登录状态错误！请重新登录'
      });
      window.location.href = redirect_uri;
      this.$router.push({path:'/Login'})
    }
    console.log('err' + error) // for debug   
    v.$notify.error({
      title: '错误',
      message: '请求错误'
    });
    console.log("请求错误");
    return Promise.reject(error)
  })
/**
 * 封装并导出get方法、post方法。
 */
export default {
  get(url, params) {
    console.log(params)
    return service.get(url, {params:params})
  },

  post(url, params) {
    return service.post(url, params)
  },
}
// /**
//  * 获取页面地址参数
//  * @param name(需要获取的参数名)
//  * @returns {*}
//  */
// const getUrlParam = function (name) {
//   var pattern = new RegExp("[?&]" + name + "=([^&]+)", "g");
//   var matcher = pattern.exec(window.location);
//   var items = null;
//   if (matcher != null) {
//     try {
//       items = decodeURIComponent(decodeURIComponent(matcher[1]));
//     } catch (e) {
//       try {
//         items = decodeURIComponent(matcher[1]);
//       } catch (e) {
//         items = matcher[1];
//       }
//     }
//   }
//   return items;
// }