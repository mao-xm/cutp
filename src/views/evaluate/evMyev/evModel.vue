<template>
    <el-card id="evModel">
        
        <div id="evModel1">
          <div  id="evModel1-1">
            
                <div class="demo-basic--circle">
                    <div class="block1"><el-avatar :size="50" :src="evaluate.user.uAvatar"></el-avatar></div>
                    <div id="username1">{{evaluate.user.uName}}</div> 
                </div>
          </div> 
          <div id="evModel1-2">
              <span id="evTime" >{{evaluate.oEvaluationTime}}</span><br>
               <span id="evContent">{{evaluate.oEvaluation}}</span>
               
          </div>
          <div id="evImg">
              <ul>
                  <li v-for="(ig,i) in evaluate.orderEvaluationMedia" :key="i">
                      <img :src="ig.oemUrl" width="80px" height="80px">
                  </li>
              </ul>
          </div>
          <div id="review">追评:</div>
               <span class="ievTime">{{evaluate.oEvaluationAddTime}}</span><br>
               <span class="ievContent">{{evaluate.oEvaluationAdd}}</span>   
          <div id="viewComment">
          <el-button type="danger" size="small" @click="vComment(evaluate)">查看评论</el-button>
          </div>
          
        </div>
      
        <!-- <div id="evModel2">
        <img src="../../../assets/goods/kouhong.jpg" width="100px" height="100px">
          <div id="gp">
            <div id="gName">口红</div>
            <div id="gPrice">￥120</div>
          </div>
          <div id="button">
                 <el-button type="danger" size="small">查看</el-button>
            </div>
        </div> -->
        <!-- <div id="evModel3">
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
        </div> -->
    </el-card>
    
</template>
<script>
// import evModelIn from '@/views/evaluate/evMyev/evModelIn'
export default {
    props:['evaluate'],
    data(){
        return{
             circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        // ruleForm: {
        //   postComment: '',
        // },
        // rules: {
        //   postComment: [
        //    { required: true, message: '请输入你的评论', trigger: 'blur' }
        //   ]
        //      }
    }
},
// // components:{
// //     evModelIn:evModelIn
// // },
 methods: {
     vComment(evaluate){
         this.$router.push({path:'/evComment',query:{evaluate:evaluate}});
        //  this.$router.push({name:'evComment',params:{k1:commentVos}});
        //   this.$router.push({path:'/evComment',query:{commentVos:commentVos.join(",")}});
     }
    //   submitForm(formName) {
    //     this.$refs[formName].validate((valid) => {
    //       if (valid) {
    //         alert('submit!');
    //       } else {
    //         console.log('error submit!!');
    //         return false;
    //       }
    //     });
    //   },
    //    resetForm(formName) {
    //     this.$refs[formName].resetFields();
    //   }
    }
}
</script>
<style scoped>

#evModel{
    box-shadow:0 2px 10px 0 rgba(0,0,0,.1);
    margin-left:50px;
    margin-top:50px;

    width:600px;
}
/* .el-col-12{
    width:120px;
} */
#evModel1-2{
padding-top:60px;
}
#evModel1-2,#evModel1-3,#review{
    margin-left:60px;
}
#evTime,.ievTime{
    font-size:12px;
}
ul li{
    list-style:none;
    display:inline-block;
}
ul,#evImg{
    width:450px;
}
#evImg{
   margin-left:10px;
}
#review{
    font-size:14px;
    color:#dd3035;
}
#evModel1-3,#ievTime{
    margin-top:10px;
}

 #evContent,.ievContent{
    width:450px;
}
.block1,#username1,#evModel1-1{
    float:left; 
}
/* #gPrice{
    margin-top:10px;
    width:80px;
} */

/* img,#gp,.block,#username,#evModel1-1{
    float:left; 
} */
/* #gp{
margin-left:20px;
width:200px;
height:30px;
padding-top:10px;

} */
img{
    margin-top:10px;
    margin-left:10px;
}
#evModel2{
    box-shadow:0 2px 10px 0 rgba(0,0,0,.1);
    width:450px;
    height:120px;
    margin-left:60px;
    margin-top:26px;
}
/* #gName{
    font-size:25px;
}
#gPrice{
    margin-top:10px;
    font-size:16px;
} */
#button{
    margin-left:272px;
    margin-top:38px;
    float:left;

} 
/* #evModel3{
    width:450px;
    margin-left:60px;
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
} */
#viewComment{
    margin-left:474px;
    margin-top:20px;
}


  

  

  
</style>