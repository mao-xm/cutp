<template>
    <div id="Register">
        <div id="Register1">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="uName" class="item">
                    <el-input  v-model="ruleForm.uName" autocomplete="off" class="input"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="uPassword"  class="item">
                    <el-input v-model="ruleForm.uPassword" autocomplete="off" class="input"></el-input>
                </el-form-item>
                 <el-form-item label="确认密码" prop="confirmUPassword"  class="item">
                    <el-input v-model="ruleForm.confirmUPassword" autocomplete="off" class="input"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="uPhone"  class="item" >
                    <el-input  v-model.number="ruleForm.uPhone" autocomplete="off" class="input"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code"  class="item2">
                    <el-input  v-model="ruleForm.code" autocomplete="off" class="input1"></el-input>
                    <el-button :disabled="status1" id="sVerifyCode" type="danger" size="small"  @click="sendVerifyCode()">{{value1}}</el-button>
                </el-form-item>
                <el-form-item  class="item1">
                    <!-- <el-button type="danger" @click="registry()" class="registry">注册</el-button> -->
                     <el-button type="danger" @click="submitForm('ruleForm')" class="registry">注册</el-button>
                    <el-link type="danger" href="/Login" id="link">已有账户?去登录</el-link>
                </el-form-item>
            </el-form>
             <!-- 用户名：<input type="text"><br>
             密码：<input type="password"><br>
             确认密码：<input type="password"><br>
             手机号：<input type="text"><br>
             验证码：<input type="text">
             <button @click="sendVerifyCode()">获取验证码</button> -->
        </div>
        <!-- <div id="Register2">
            <button @click="registry()">注册</button>
        </div>
        <div id="Register3">
            <router-link :to="{ name:'Login'}" >已有账户?去登录</router-link>
        </div> -->
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
    data() {
        
         var checkUphone = (rule, value, callback) => {
         if (isNaN(value)){
             callback(new Error('请输入数字值'));   
         }
         else if(value.toString().length!=11){
               callback(new Error('手机号是11位'));
         }
          };
          var checkCode = (rule, value, callback) => {
         if (isNaN(value)){
             callback(new Error('请输入数字值'));   
         }
         else if(value.toString().length!==6){
               callback(new Error('验证码是6位'));
         }
          };
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (this.ruleForm.confirmUPassword !== '') {
            this.$refs.ruleForm.validateField('confirmUPassword');
          }
          callback();
        };
    
      var validatePass2 = (rule, value, callback) => {
        if(value === ''){
            callback(new Error('请再次确认密码'))
        }
        else if (value !== this.ruleForm.uPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        status1:false,
        value1:'获取验证码',
        ruleForm: {
          uName: '',
          uPassword:'',
          confirmUPassword:''
          
        },
        rules: {
          uName: [
           { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          uPassword: [
            { validator: validatePass, trigger: 'blur' }
          ],
          confirmUPassword: [
             { validator: validatePass2, trigger: 'blur' },
          ],
          uPhone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            // { min: 11, max: 11, message: '手机号是11位', trigger: 'blur' },
             { validator: checkUphone, trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
            //  {min: 6, max: 6, message: '验证码是6位', trigger: 'blur' },
             { validator: checkCode, trigger: 'blur' }
          ]
          
        }
      };
    },
    methods:{
        async registry() {//按搜索内容查询商品
        //    var param = { uPhone: '15620506205',uPassword:'zhang1999',uName:'王五',confirmUPassword:'zhang1999',code:'467971'}
            var param = this.ruleForm;
           myAxios
                 .post(`/user/register`,param)
                 .then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err,'bb');
                    });
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
                this.registry();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
        async sendVerifyCode() {//按搜索内容查询商品
        //    var uPhone = '15620506205'
            // this.status1=true;
            var time=60;
            var timer=setInterval(() => {
                time--;
                if(time>=1){    
                   this.status1=true;
               
                this.value1="重新发送(" + time + ")";
                
                }else if(time==0){
                    this.status1=false;
                     this.value1="获取验证码";
                     clearInterval(timer);
                }
            }
            ,1000);
            var uPhone = this.ruleForm.teleNumber;
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
     padding-top:5px;
    padding-left:150px;
}
.input,.input1,.item1{
    margin-left:30px;
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
.input1{
    width:230px;
    
}
.item1{
    width:450px;
}
.item{
  width:430px;
  margin-top:40px;
}
#link{
    margin-left:110px;
}
/* .demo-ruleForm{
    margin-left:100px;
    margin-top:50x;
} */
</style>