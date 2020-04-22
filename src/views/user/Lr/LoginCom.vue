<template>
   <div id="LoginCom">
       <div id="LoginCom1">
        
            <img src="../../../assets/Login/tx.jpg" width="100px" height="100px"><br>
            用户名：<input type="text" id="input1"><br>
            密码：<input type="password" id="input2">
       </div>
       <div id="LoginCom2">
            <button @click="login()">登录</button>
            <button @click="logout()">登出</button>
       </div>
       <div id="LoginCom3">
            <router-link :to="{ name:'Register'}" >没有账号?去注册</router-link>
       </div>
  </div>  
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
    methods:{
        async login() {//按搜索内容查询商品
        var uName="王五"
        var uPassword = "zhang1999"
            myAxios
                 .post(`/auth/login/${uName}/${uPassword}`)
                 .then(res => {
                    console.log(res);
                    this.verify()
                }).catch(err => {
                    console.log(err,'bb');
                    });
        },
        async verify() {//按搜索内容查询商品
            myAxios
                 .get(`auth/verify`)
                 .then(res => {
                    console.log(res);
                    localStorage.setItem("uId", res.uId);
                    localStorage.setItem("uName", res.uName);
                    var id = localStorage.getItem("uId");
                    console.log(id,'ww')
                }).catch(err => {
                    console.log(err,'bb');
                    });
        },
        
        logout() {
            this.$cookies.remove('GM_TOKEN' , '/' , '.gomai.com') 
            this.$router.replace('/Login');
            // this.$cookies.remove("GM_TOKEN");
            // this.delCookie('GM_TOKEN')
            // this.setCookie("", "", 0);
            // this.common.clearCookie();  
            // this.$confirm('确认注销该用户?', '提示', {
            // confirmButtonText: '确定',
            // cancelButtonText: '取消',
            // type: 'warning'
            // }).then(() => {
            // this.common.clearCookie();   //注销
            // this.$message({
            //     type: 'success',
            //     message: '注销成功!'
            // });
            // this.$router.replace('/Login');
            // }).catch(() => {
            // this.$message({
            //     type: 'info',
            //     message: '已取消注销'
            // });
            // });
  },
    }
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