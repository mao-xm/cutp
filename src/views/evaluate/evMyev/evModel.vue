<template>
    <div id="evModel">
        
        <div id="evModel1">
          <div  id="evModel1-1">
            <el-col :span="12">
                <div class="demo-basic--circle">
                    <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
                    <div id="username">用户名</div> 
                </div>
            </el-col>
          </div> 
          <div id="evModel1-2">
               <div id="evContent">评价内容</div>
               <div id="ievContent">追评内容</div>
          </div>
           <div id="evModel1-3">
               <div id="evTime" >评价时间</div>
               <div id="ievTime">追评时间</div>
          </div> 
        </div>
        <div id="evModel2">
        <img src="../../../assets/goods/kouhong.jpg" width="100px" height="100px">
          <div id="gp">
            <div id="gName">商品名</div>
            <div id="gPrice">钱</div>
            <div id="button">
                 <el-button type="danger" plain>查看</el-button>
            </div>
          </div>
        </div>
        <div id="evModel3">
            <div id="comment">发布评论:</div>
            <el-input class="input"
                type="textarea"
                :rows="2"
                placeholder="请输入你的评论"
                v-model="textarea">  
            </el-input>
             <el-button type="danger" plain class="comBut">评论</el-button>

        </div>
        <div id="evModel4">
            <div id="evMode4-1">
            <el-col :span="12">
                <div class="demo-basic--circle">
                    <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
                    <div id="username1">用户名</div> 
                </div>
            </el-col>
            </div>
            <div id="evMode4-2">
                <div id="comContent"> 评轮内容</div>
                <div id="comTime"> 评轮时间</div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
             circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"        }
    }
}
</script>
<style scoped>
#evModel1-1,#evMode4-1{
    margin-left:20px;
    margin-top:20px;
}
#evModel{
    margin-left:270px;
    margin-top:50px;
    border:1px solid #ccc;
    height:500px;
    width:702px;
}
.el-col-12{
    width:120px;
}
#evModel1-2{
margin-left:30px;
 width:400px;
 height:100px;
margin-top:30px;
}
#evModel1-3{
 width:80px;
 height:100px;
 margin-top:50px;
}
#gPrice{
    margin-top:10px;
}

img,#gp.block,#username,#evModel1-1,#evModel4-1,#evModel4-2,#evModel1-2,#evModel1-3{
    float:left; 
}
#evContent,#ievContent,#evTime,#ievTime{
    height:50px;
}
#gp{
margin-left:170px;
width:400px;
padding-top:10px;

}
#evModel2{
    border:1px solid #ccc;
    height:120px;
    width:700px;
    margin-top:150px;
}
#button{
    width:100px;
    height:100px;
    margin-left:400px;
}
#gName{
    font-size:20px;
}
.input{
    margin-top:10px;
    width:530px;
    margin-left:10px;
}
.comBut{
    margin-left:28px;
    margin-top:10px;
}
#comment{
    margin-left:10px;
    margin-top:10px;
}
#evMode4-2{
    margin-top:10px;
    margin-left:170px;
}
#comContent{
    padding-top:15px;
}

#comTime{
    margin-top:30px;
    margin-left:400px;
}
img{
    margin-top:10px;
    margin-left:10px;
}



  

  

  
</style>