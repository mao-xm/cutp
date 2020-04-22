<template>
    <div id="Login">
        <img src="../../assets/Login/login1.jpg" width="400px" height="470px">
        <div id="right"><el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户名登录" name="first"><LoginCom></LoginCom></el-tab-pane>
      <el-tab-pane label="手机号登录" name="second"><LoginCom1></LoginCom1></el-tab-pane> 

  </el-tabs></div> 
    </div>
</template>
<script>
 import LoginCom from '@/views/user/Lr/LoginCom'
 import LoginCom1 from '@/views/user/Lr/LoginCom1'
export default {
    data(){
        return { activeName: 'first'}
    },
    methods:{
    },
    components:{
        LoginCom:LoginCom,
        LoginCom1:LoginCom1
    }
}
</script>
<style scoped>
#Login{
    width:1000px;
    height:470px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin:20px auto;
}
img{
    float:left;
}
#right{
    float:left;
}
.el-tabs__item.is-active{
  color:#dd3035 !important;
}
.el-tabs__item:hover{
  color:#dd3035 !important;
}
.el-tabs__active-bar{
  background-color:#dd3035;
}
.el-tabs__item{
  
  width:150px;
  text-align: center;
}
.el-tabs{
  width:500px;
  /* margin-left:100px; */
}
</style>