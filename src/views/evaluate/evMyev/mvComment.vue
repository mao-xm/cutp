<template>
    <div id="myComment">
        <el-card>
            <div id="myComment1">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="" prop="rview" class="item1">
                        <div id="comment">追评:</div>
                        <el-input type="textarea" rows="3" v-model="ruleForm.rview" autocomplete="off" class="input"></el-input><br>
                        <div><el-button type="danger" size="small" @click="submitForm('ruleForm')" class="revi">发布</el-button></div>
                    </el-form-item>
                    <el-form-item>
                        
                    </el-form-item>
                </el-form>
           </div>
           <div>
               <ul>
                   <li v-for="(ig,i) in 2" :key="i"><evModelIn></evModelIn></li>
               </ul>
           </div>
        </el-card>
    </div>
</template>
<script>
import evModelIn from '@/views/evaluate/evMyev/evModelIn'
export default {
    name:'myComment',
    data(){
        return{
        ruleForm: {
          rview: '',
        },
        rules: {
          rview: [
           { required: true, message: '请输入追评内容', trigger: 'blur' }
          ]
             }
    }
},
components:{
    evModelIn:evModelIn
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
#myComment{
    width:700px;
    margin:30px auto;
}
ul li{
    list-style:none;
}
ul{
    margin-left:46px;
}
.input{
    width:460px;
}
</style>