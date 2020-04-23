<template>
    <div id="EditNewAddress">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="收件人姓名" prop="name">
                <el-input  v-model="ruleForm.name" autocomplete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="收件人电话" prop="number">
                <el-input v-model.number="ruleForm.number" autocomplete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="收件人地址" prop="Adress">
                <el-input v-model="ruleForm.Adress" class="input"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" prop="DetailAdress">
                <el-input v-model="ruleForm.DetailAdress" class="input"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" @click="submitForm('ruleForm')" class="preserve">保存</el-button>
                <el-button type="danger" @click="resetForm('ruleForm')" class="delete">删除</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name:'EditNewAddress',
     data() {
        var checkNumber1 = (rule, value, callback) => {
         if (isNaN(value)){
             callback(new Error('请输入数字值'));   
         }
         else if(value.length!==11){
               callback(new Error('收件人电话是11位'));
         }
          };
      return {
        ruleForm: {
          name: '',
          number:'',
          Adress:'',
          DetailAdress: ''
        },
        rules: {
          name: [
           { required: true, message: '请输入收件人姓名', trigger: 'blur' }
          ],
          number: [
            { required: true, message: '请输入收件人电话', trigger: 'blur' },
            {validator:checkNumber1, trigger: 'blur' }
          ],
          Adress: [
            { required: true, message: '请输入收件人地址', trigger: 'blur' }
          ],
          DetailAdress: [
            { required: true, message: '请输入收件人详细地址', trigger: 'blur' }
          ]

        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
       resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style scoped>
#EditNewAddress{
    width:800px;
    height:500px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin:30px auto;
}
.demo-ruleForm{
  margin-left:204px;
  padding-top:50px;
}
.input{
  margin-top:20px;
  margin-left:30px;
}
.preserve{
  /* margin-top:20px; */
  margin-left:52px;
}
.delete{
  /* margin-top:5px; */
  margin-left:52px;
}

</style>