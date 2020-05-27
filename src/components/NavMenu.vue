<template>
  <div id="box">
     <!-- router:是否使用vue_router模式，启动该模式会在激活导航时以index作为path进行路由跳转-->
     <!--style="padding-left:58px;font-size:10px;height:20px;" -->
     <!-- style="width:1150px;float:right;height:20px; -->
     <img src="../assets/logo.png" width="50px" height="50px" id="img">
     <i @click="logout()"  id="out" class="el-icon-switch-button"><span id="out1">登出</span></i>
     <el-menu
      :default-active="path"
      router
      mode="horizontal"
      background-color="white"
      text-color="#222"
      active-text-color="#dd3035"
      class="el-menu1"
    > 
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" class="el-menu2"
       >
       <i :class="item.icon"></i>
       <span class="sp">{{item.navItem}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
      return {
        navList: [
          {name: '/Login', navItem: '登录|注册',icon:'iconfont icon-denglu'},
          // {name: '/Logi', navItem: '首页',icon:'iconfont icon-shouye'},
          {name: '/Home', navItem: '首页',icon:'iconfont icon-shouye'},
          {name: '/buyOrder', navItem: '我的购买',icon:'iconfont icon-yigoumai'},
          {name: '/mySale', navItem: '我的卖出',icon:'iconfont icon-maichu'},
           {name: '/in_index', navItem: '积分商城',icon:'iconfont icon-ziyuan'},
          //  {name: '/Logi', navItem: '积分商城',icon:'iconfont icon-ziyuan'},
          {name: '/MyHomeIndex', navItem: '个人主页',icon:'iconfont icon-icon-'},
          {name: '/soft_pf', navItem: '反馈',icon:'iconfont icon-fankui'}
        ],
       url: '../assets/logo.png',
       path:''
      }
},
methods:{
   logout() {
            this.$confirm('确认登出？')
            .then(_ => {
            this.$cookies.remove('GM_TOKEN' , '/' , '.gomai.com') 
            this.$router.replace('/Login');})
   }
}
}
</script>
<style>
#out{
 
  margin-left:28px;
  margin-top:7px;
}
#out1{
  margin-left:4px;
  font-size:10px;
}
 #img{
  float:left;
  margin-left:5px;
  
}
/*#box{
  background-color:#E3E4E5;
}
.el-menu-item:hover{
   background-color: white !important;
} */
.el-menu1{
height:30px !important;width:1120px;float:right;}
.el-menu2{
font-size:10px;height:30px !important;
line-height:30px !important;width:160px;
text-align:center;
}
/* .el-menu1:hover{
   color:#dd3035 !important;
  /color:#dd3035; 
} */
.el-menu2:hover{
  background-color: white !important;
  /* color:#dd3035; */
}


/* .ap{

}  */
</style>