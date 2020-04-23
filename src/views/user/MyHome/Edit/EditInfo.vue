<template>
    <div id="EdiInfo">
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    
  <el-form-item label="用户名" prop="name" class="item">
    <el-input type="password" v-model="ruleForm.name" autocomplete="off" class="input"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="Pass" class="item">
    <el-input type="password" v-model="ruleForm.Pass" autocomplete="off" class="input"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass" class="item">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" class="input"></el-input>
  </el-form-item>
  <el-form-item label="手机号" prop="teleNumber" class="item">
    <el-input v-model.number="ruleForm.teleNumber" class="input"></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="code" class="item">
    <el-input v-model.number="ruleForm.code" class="input1"></el-input>
    <el-button type="danger" :disabled="status" @click="sendVerifyCode" size="mini">{{value}}</el-button>
  </el-form-item>
   <el-form-item label="性别" prop="sex" class="item">
     <el-radio-group v-model="ruleForm.sex" class="input1">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
    <!-- <el-input v-model.number="ruleForm.sex" class="input"></el-input> -->
  </el-form-item>
   <el-form-item label="生日" prop="birth" class="item">
     <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.birth" class="input"></el-date-picker>
    <!-- <el-input v-model.number="ruleForm.birth" class="input"></el-input> -->
  </el-form-item>
  <el-form-item label="身份证号" prop="IdNumber" class="item">
    <el-input v-model.number="ruleForm.IdNumber" class="input"></el-input>
  </el-form-item>
  <el-form-item label="学校" prop="school" class="item">
    <el-input v-model.number="ruleForm.school" class="input"></el-input>
  </el-form-item>
   <el-form-item label="爱好" prop="hobby" class="item">
    <el-input v-model.number="ruleForm.hobby" class="input"></el-input>
  </el-form-item>
  <el-form-item label="上传头像" class="item" prop="goodPic">
                    <el-upload
                    action="http://localhost:8089/upload/image"
                    list-type="picture-card"
                    :file-list="ruleForm.goodPic"
                    :before-upload="beforePicUpload"
                    limit="5"
                    :on-preview="handlePictureCardPreview"
                    :on-exceed="handleExceed"
                    :on-success="handleAvatarSuccess"
                    :on-remove="handleRemove"
                    id="upload">
                        <i class="el-icon-plus"></i>
                        <div class="el-upload__tip" slot="tip">注：只能上传jpg/png文件，且不超过5M</div>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="imgUrl" alt="">
                    </el-dialog>
    </el-form-item>
  <el-form-item class="item">
    <el-button type="danger" @click="submitForm('ruleForm')" class="preserve">保存</el-button>
  </el-form-item>
</el-form>
    </div>
</template>
<script>
export default {
     data() {
       var checkTeleNumber = (rule, value, callback) => {
         if (isNaN(value)){
             callback(new Error('请输入数字值'));   
         }
         else if(value.toString().length!=11){
              alert( typeof value);
               callback(new Error('手机号是11位'));
         }
          };
        var checkCode1 = (rule, value, callback) => {
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
        } 
          callback();
        };
    
      var validatePass2 = (rule, value, callback) => {
        if(value === ''){
            callback(new Error('请再次确认密码'))
        }
        else if (value !== this.ruleForm.Pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        status:false,
        value:'获取验证码',
        ruleForm: {
          name: '',
          Pass:'',
          checkPass:'',
          teleNumber: '',
          code:'',
          sex:'',
          birth:'',
          IdNumber:'',
          school:'',
          hobby:''
        },
        rules: {
          name: [
           { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          Pass: [
            // { required: true, message: '请输入密码', trigger: 'blur' },
             { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            // { required: true, message: '请确认密码', trigger: 'blur' },
             { validator: validatePass2, trigger: 'blur' }
          ],
          teleNumber: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
             {validator:checkTeleNumber, trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
             { validator: checkCode1, trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          birth: [
            { required: true, message: '请选择出生日期', trigger: 'blur' }
          ],
          IdNumber: [
            { required: true, message: '请输入身份证号', trigger: 'blur' }
          ],
          school: [
            { required: true, message: '请输入所在学校', trigger: 'blur' }
          ],
          hobby: [
            { required: true, message: '请输入你的爱好', trigger: 'blur' }
          ]
        }
      };
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
     sendVerifyCode(){
        var time=60;
             var timer=setInterval(() => {
                time--;
                if(time>=1){    
                   this.status=true;
               
                this.value="重新发送(" + time + ")";
                
                }else if(time==0){
                    this.status=false;
                     this.value="获取验证码";
                     clearInterval(timer);
                }
            }
            ,1000);
      }
    }
}
</script>
<style scoped>
.input,#upload{
  width:60%;
 margin-left:30px;
}
.input1{
  width:39%; 
  margin-left:30px;
}
.demo-ruleForm{
  margin-left:133px;
  margin-top:50px;
}
.item{
    margin-top:30px;
}
.preserve{
    margin-left:30px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>