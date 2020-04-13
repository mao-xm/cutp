<template>
    <div id="LoginCom1">
       <div id="LoginCom1-1">
            <img src="../../../assets/Login/tx.jpg" width="100px" height="100px"><br>
            手机号：<input type="text" id="input1"><br>
            <input type="text" id="input2">
            <button>获取验证码</button>
       </div>
       <div id="LoginCom1-2">
            <button>登录</button>
       </div>
       <div id="LoginCom1-3">
            <router-link :to="{ name:'Register'}" >没有账号?去注册</router-link>
       </div>
  </div>  
</template>
<script>
export default {
    
}
</script>
<style scoped>
#LoginCom1-1{
    margin-top:70px;
    text-align:center;
    margin-left:110px;
    
}
#LoginCom1-2{
    float:left;
    margin-left:200px;
}
#LoginCom1-3{
    float:left;
    margin-left:50px;
}
#input1{
    margin-top:20px;
}
#input2{
    margin-top:10px;
}
#LoginCom1-2,#LoginCom1-3{
    margin-top:30px;
}
</style>