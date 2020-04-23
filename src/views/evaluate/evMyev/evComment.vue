<template>
    <div id="evComment">
        <el-card>
            <div id="evModel2">
        <img src="../../../assets/goods/kouhong.jpg" width="100px" height="100px">
          <div id="gp">
            <div id="gName">口红</div>
            <div id="gPrice">￥120</div>
          </div>
          <div id="button">
                 <el-button type="danger" size="small">查看</el-button>
            </div>
        </div>
            <div id="evModel3">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="" prop="postComment" class="item1">
                <div id="comment">发布评论:</div>
                <el-input type="textarea" rows="3" v-model="ruleForm.postComment" autocomplete="off" class="input"></el-input>
                <el-button type="danger" size="small" @click="submitForm('ruleForm')" class="post">发布</el-button>
            </el-form-item>
            <el-form-item>
                
            </el-form-item>
        </el-form>
        </div>
        <div id="evModel4">
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
   name:'evComment',
   components:{
     evModelIn:evModelIn
   },
    data(){
        return{
             circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        ruleForm: {
          postComment: '',
        },
        rules: {
          postComment: [
           { required: true, message: '请输入你的评论', trigger: 'blur' }
          ]
             }
    }
},
// components:{
//     evModelIn:evModelIn
// },
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
#evComment{
    width:700px;
    margin:30px auto;
    /* padding-left:200px; */
}
#evContent,.ievContent{
    width:450px;
}
#gPrice{
    margin-top:10px;
    width:80px;
}

img,#gp{
    float:left; 
}
#gp{
margin-left:20px;
width:200px;
height:30px;
padding-top:10px;

}
#evModel2{
    box-shadow:0 2px 10px 0 rgba(0,0,0,.1);
    width:450px;
    height:120px;
    margin-left:60px;
    margin-top:26px;
}
#gName{
    font-size:25px;
}
#gPrice{
    margin-top:10px;
    font-size:16px;
}
#button{
    margin-left:272px;
    margin-top:38px;
    float:left;

}

#evModel3{
    width:450px;
    /* margin-left:60px; */
    margin-top:26px;
}
#comment{
     font-size:16px;
}

.item1{
    margin-top:10px;
    width:550px;
    margin-left:-100px;
}
img{
    margin-top:10px;
    margin-left:10px;
}
ul li{
    list-style:none;
    display:inline-block;
}
ul{
    width:450px;
}
#evModel2,#evModel3{
    margin-left:105px;
}
#evModel4{
    margin-left:43px;
}
</style>