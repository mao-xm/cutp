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
    <el-button type="danger" @click="getCode()">获取验证码</el-button>
  </el-form-item>
   <el-form-item label="性别" prop="sex" class="item">
    <el-input v-model.number="ruleForm.sex" class="input"></el-input>
  </el-form-item>
   <el-form-item label="生日" prop="birth" class="item">
    <el-input v-model.number="ruleForm.birth" class="input"></el-input>
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
  <el-form-item class="item">
    <el-button type="danger" @click="submitForm('ruleForm')" class="preserve">保存</el-button>
  </el-form-item>
</el-form>
    </div>
</template>
<script>
export default {
    name:'EditInfo',
     data() {
      return {
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
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: '请确认密码', trigger: 'blur' }
          ],
          teleNumber: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请输入性别', trigger: 'blur' }
          ],
          birth: [
            { required: true, message: '请输入出生日期', trigger: 'blur' }
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
}
</script>
<style scoped>
.input{
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
</style>