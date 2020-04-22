<template>
    <div id="Register">
        <div id="Register1">
             用户名：<input type="text"><br>
             密码：<input type="password"><br>
             确认密码：<input type="password"><br>
             手机号：<input type="text"><br>
             验证码：<input type="text">
             <button @click="sendVerifyCode()">获取验证码</button>
        </div>
        <div id="Register2">
            <button @click="registry()">注册</button>
        </div>
        <div id="Register3">
            <router-link :to="{ name:'Login'}" >已有账户?去登录</router-link>
        </div>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
    methods:{
        async registry() {//按搜索内容查询商品
           var param = { uPhone: '15620506205',uPassword:'zhang1999',uName:'王五',confirmUPassword:'zhang1999',code:'467971'}
            myAxios
                 .post(`/user/register`,param)
                 .then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err,'bb');
                    });
        },
        async sendVerifyCode() {//按搜索内容查询商品
           var uPhone = '15620506205'
            myAxios
                 .post(`/user/code/${uPhone}`)
                 .then(res => {
                    this.$notify.success({
                        title: '正确',
                        message: '验证码为：'+res
                    });
                }).catch(err => {
                    console.log(err,'bb');
                    });
        }
    },
    data(){
        return{

        }
    }
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