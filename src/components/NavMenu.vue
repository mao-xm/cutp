<template>
  <div id="box">
     <!-- router:是否使用vue_router模式，启动该模式会在激活导航时以index作为path进行路由跳转-->
     <!--style="padding-left:58px;font-size:10px;height:20px;" -->
     <!-- style="width:1150px;float:right;height:20px; -->
     <img src="../assets/logo.png" width="70px" height="70px" id="img">
     <el-menu
      :default-active="path"
      router
      mode="horizontal"
      background-color="#E3E4E5"
      text-color="#222"
      active-text-color="red"
      class="el-menu1"
    > 
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" class="el-menu2"
       >
       <span class="ap">{{ item.navItem }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
      return {
        navList: [
          {name: '/', navItem: '登录|注册'},
          {name: '/', navItem: '首页'},
          {name: '/', navItem: '我的购买'},
          {name: '/', navItem: '我的卖出'},
          {name: '/', navItem: '消息'},
          {name: '/in_index', navItem: '积分商城'},
          {name: '/', navItem: '社区'},
          {name: '/', navItem: '个人中心'},
          {name: '/', navItem: '反馈'}
        ],
       url: '../assets/logo.png',
       path:''
      }
}
}
</script>
<style>
 #img{
  float:left;
}
/*#box{
  background-color:#E3E4E5;
}
.el-menu-item:hover{
   background-color: white !important;
} */
.el-menu1{
width:1150px;float:right;height:20px !important;
}
.el-menu2{
padding-left:58px;font-size:10px;height:20px !important;
}
.ap{
  margin-top:-20px;
}

</style>