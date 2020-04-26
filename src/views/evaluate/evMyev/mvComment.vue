<template>
    <div id="myComment">
        <el-card>
            <div id="myComment1" v-if="flag">
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
                   <li v-for="(ig,i) in MyEvaluate.commentVos" :key="i"><evModelIn :commentVos1="ig"></evModelIn></li>
               </ul>
           </div>
        </el-card>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
import evModelIn from '@/views/evaluate/evMyev/evModelIn'
export default {
    name:'myComment',
    data(){
        return{
            flag:'',
         MyEvaluate:{},
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
     async addEva() {
          myAxios
              .post(`/comment/OrderComment/Updateoe/${this.MyEvaluate.oId}/${this.ruleForm.rview}`)
              .then(res => {
                 if(res==true){
                    this.$notify.success({
                        title: '成功',
                        message: '追评成功'
                        });}
                  
              }).catch(err => {
                  console.log(err);
                  });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.addEva();
            console.log('error submit!!');
            return false;
          }
        });
      },
       resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created:function(){
        alert("aa");
        this.MyEvaluate=this.$route.query.MyEvaluate;
         this.flag=this.$route.query.flag;
        alert(this.MyEvaluate.oId);
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