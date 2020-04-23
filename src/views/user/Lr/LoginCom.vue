<template>
   <div id="LoginCom">
       <div id="LoginCom1">
        
            <!-- <img src="../../../assets/Login/tx.jpg" width="100px" height="100px"><br> -->
              <el-avatar :size="90" :src="url"></el-avatar>
            <!-- 用户名：<input type="text" id="input1"><br>
            密码：<input type="password" id="input2"> -->
       </div>
       <div id="LoginCom2">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="uName" class="item">
                <el-input  v-model="ruleForm.uName" autocomplete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="uPassword"  class="item">
                <el-input v-model.number="ruleForm.uPassword" autocomplete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item  class="item">
                <el-button type="danger" @click="login()" class="preserve">登录</el-button>
                 <el-link type="danger" href="/Register" id="link">没有账号?去注册</el-link>
            </el-form-item>
        </el-form>
            <!-- <button @click="login()">登录</button>
            <button @click="logout()">登出</button> -->
       </div>
       <!-- <div id="LoginCom3">
            <router-link :to="{ name:'Register'}" >没有账号?去注册</router-link>
       </div> -->
  </div>  
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
     data() {
      return {
        url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3039649055,1469628564&fm=26&gp=0.jpg', 
        ruleForm: {
          uName: '',
          uPassword:'' 
        },
        rules: {
          uName: [
           { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          uPassword: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods:{
        async login() {//按搜索内容查询商品
        // var uName="王五"
        // var uPassword = "zhang1999"
            myAxios
                 .post(`/auth/login/${this.ruleForm.uName}/${this.ruleForm.uPassword}`)
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
                    localStorage.setItem("name", res.uName);
                    var id = localStorage.getItem("uId");
                    console.log(id,'ww')
                }).catch(err => {
                    console.log(err,'bb');
                    });
        }
        
        // logout() {
        //     this.$cookies.remove('GM_TOKEN' , '/' , '.gomai.com') 
        //     this.$router.replace('/Login');
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
//   },
    }
}
</script>
<style scoped>
/* .demo-ruleForm{
    margin-left:10px;
} */
#LoginCom{
    margin-left:120px;
}
#LoginCom1{
    margin-top:65px;
    /* text-align:center; */
    margin-left:150px;
    
}

#LoginCom2{
    margin-top:40px;
    /* float:left; */
    /* margin-left:200px; */
}
/* #LoginCom3{
    float:left;
    margin-left:50px;
} */
/* #input1{
    margin-top:20px;
}
#input2{
    margin-top:10px;
} */
/* .input{
    margin-left:20px;
} */
/* #LoginCom2,#LoginCom3{
    margin-top:30px;
}*/
.item{
   margin-top:40px; 
}
#link{
    margin-left:26px;
}
</style>