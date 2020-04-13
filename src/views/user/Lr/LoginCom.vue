<template>
   <div id="LoginCom">
       <div id="LoginCom1">
            <img src="../../../assets/Login/tx.jpg" width="100px" height="100px"><br>
            用户名：<input type="text" id="input1"><br>
            密码：<input type="password" id="input2">
       </div>
       <div id="LoginCom2">
            <button>登录</button>
       </div>
       <div id="LoginCom3">
            <router-link :to="{ name:'Register'}" >没有账号?去注册</router-link>
       </div>
  </div>  
</template>
<script>
export default {
    
}
</script>
<style scoped>

#LoginCom1{
    margin-top:70px;
    text-align:center;
    margin-left:110px;
    
}
#LoginCom2{
    float:left;
    margin-left:200px;
}
#LoginCom3{
    float:left;
    margin-left:50px;
}
#input1{
    margin-top:20px;
}
#input2{
    margin-top:10px;
}
#LoginCom2,#LoginCom3{
    margin-top:30px;
}
</style>