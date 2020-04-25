<template>
    <div id="AddNewAddress">
        <!-- <div id="AddNewAddress1">添加新地址:</div> -->
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="收件人姓名" prop="name">
                <el-input  v-model="ruleForm.name" autocomplete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="收件人电话" prop="number" clearValidate>
                <el-input v-model="ruleForm.number" autocomplete="off" class="input"></el-input>
            </el-form-item>
          
              <el-form-item label="收件人地址" prop="Adress">
                    <el-select v-model="ruleForm.Adress" placeholder="请选择地址" class="inputs">
                      <el-option label="天津市" value="天津市"></el-option>
                      <el-option label="湖南省" value="湖南省"></el-option>
                      <el-option label="贵州省" value="贵州省"></el-option>
                      <el-option label="广西省" value="广西省"></el-option>
                    </el-select>
              </el-form-item>
                <!-- <el-input v-model="ruleForm.Adress" class="input"></el-input> -->
       
            <el-form-item label="详细地址" prop="DetailAdress">
                <el-input v-model="ruleForm.DetailAdress" class="input"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" @click="submitForm('ruleForm')" class="preserve">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
    name:'AddNewAddress',
     data() {
         var checkNumber = (rule, value, callback) => {
         if (isNaN(value)){
             callback(new Error('请输入数字值'));   
         }
         else if(value.length!==11){
               callback(new Error('收件人电话是11位'));
         }else{
           callback();
         }
          };
      return {
        ruleForm: {
          name: '',
          number:'',
          Adress:'',
          DetailAdress: ''
        },
        userA:{
          uId:0,
          uaAddress:'',
          uaId:0,
          uaPhone:'',
          uaSigner:''
        },
        rules: {
          name: [
           { required: true, message: '请输入收件人姓名', trigger: 'blur' }
          ],
          number: [
            { required: true, message: '请输入收件人电话', trigger: 'blur' },
            //  { min: 11, max: 11, message: '收件人电话是11位', trigger: 'blur' },
            {validator:checkNumber, trigger: 'blur' }     
          ],
          Adress: [
            // { required: true, message: '请输入收件人地址', trigger: 'blur' }
            { required: true, message: '请选择收件人地址', trigger: 'change' }
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
            this.AddArr();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
     async AddArr() {
          this.userA.uId= localStorage.getItem("uId");
          this.userA.uaSigner=this.ruleForm.name;
          this.userA.uaPhone=this.ruleForm.number.toString();
          this.userA.uaAddress=this.ruleForm.Adress+this.ruleForm.DetailAdress;
          const params=this.userA;
         this.$confirm('确认添加？')
            .then(_ => {
          myAxios
              .post(`/user/Address/InsertAd/`,params)
              .then(res => {
                   if(res==true){
                        this.$notify.success({
                            title: '成功',
                            message: '添加成功'
                            });
                         this.$router.push({name:'MyHomeIndex'});
                            }
                  
              }).catch(err => {
                  console.log(err);
                  });})
      }
}}
</script>
<style scoped>

#AddNewAddress{
    width:800px;
    height:500px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin:30px auto;
}
.demo-ruleForm{
  margin-left:209px;
  padding-top:50px;
}
.input{
  margin-top:20px;
  margin-left:30px;
}
.inputs{
  margin-top:20px;
  margin-left:30px;
  width:300px;
}
.preserve{
  margin-top:20px;
  margin-left:30px;
}
#AddNewAddress1{
   margin-left:209px;
}
</style>