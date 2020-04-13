<template>
    <div id="Register">
        <div id="Register1">
             用户名：<input type="text"><br>
             密码：<input type="password"><br>
             确认密码：<input type="password"><br>
             手机号：<input type="text"><br>
             验证码：<input type="text">
             <button>获取验证码</button>
        </div>
        <div id="Register2">
            <button>注册</button>
        </div>
        <div id="Register3">
            <router-link :to="{ name:'Login'}" >已有账户?去登录</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#Register{
     width:800px;
    height:500px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin:0px auto;
}
#Register1{
    padding-top:70px;
    padding-left:250px;
}
input{
    margin-top:20px;
}
#Register2{
    float:left;
    margin-left:250px;
    margin-top:30px;
}
#Register3{
    float:left;
    margin-left:60px;
     margin-top:30px;
}
</style>