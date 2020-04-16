<template>
    <div id="mEvDetail">
        <div id="mEvDetail1">
             <div id="mEvDetail1-1" >评价:</div>
             <div id="mEvDetail1-2" >
                 <div id="top">
                      <div id="left">
                        <div id="mevContent">评价内容</div>
                        <div id="mievContent">追评内容</div>
                     </div>
                     <div id="right">
                        <div id="mevTime" >评价时间</div>
                        <div id="mievTime">追评时间</div>
                     </div> 
                     <img src="../../assets/Login/txb1.jpg" width="100px" height="100px" class="img">
                     <img src="../../assets/Login/txb2.jpg" width="100px" height="100px" class="img">
                 </div>
                 <div id="bottom">
                     <img src="../../assets/goods/kouhong.jpg" width="100px" height="100px" id="img3">
                     <div id="gp2">
                        <div id="gName2">商品名</div>
                        <div id="gPrice2">钱</div>
                        <div id="button2">
                            <el-button type="danger" plain>查看</el-button>
                        </div>
                     </div>
                 </div>
             </div>
          
        </div>

        <div id="mEvDetail2">
              <div id="mEvDetail2-1" >追评:</div>
              <el-input class="input2"
                type="textarea"
                :rows="2"
                placeholder="请输入你的追评"
                v-model="textarea">  
            </el-input>
             <el-button type="danger" plain class="comBut2">追评</el-button>
        </div>
        <div id="mEvDetail3">
            <div id="mEvDetail3-1" >评论:</div>
            <div  id="evModel3-2">
                <div class="tx">
                <el-col :span="12">
                    <div class="demo-basic--circle">
                        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
                        <div id="username">用户名</div> 
                    </div>
                </el-col>
                </div>
                <div class="content">
                    评论内容
                </div><br>
                <div class="tx">
                <el-col :span="12">
                    <div class="demo-basic--circle">
                        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
                        <div id="username">用户名</div> 
                    </div>
                </el-col>
                </div>
                <div class="content">
                    评论内容
                </div>
                
          </div> 
        </div>
    </div>
</template>
<script>
export default {
     data(){
        return{
             circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" }
    }
}
</script>
<style scoped>
#mEvDetail{
    width:700px;
    /* height:800px; */
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin:0px auto;
}
#mEvDetail:after{
    content:'';
    display:block;
    clear: both;
}
#bottom{
    border:1px solid #ccc;
    height:120px;
    width:600px;
    /* margin-top:150px; */
}
#mEvDetail2-1{
    width:50px;
}
#mEvDetail1-1,#mEvDetail2-1,#mEvDetail3-1{
    margin-left:8px;
}
#evModel3-2{
    margin-left:50px !important;
}
.tx{
    margin-top:40px;
}
#mEvDetail1-2{
    border:1px solid #ccc;
    width:600px;
    height:370px;
    margin:0px auto;

}
#mevContent,#mievContent{
    height:50px;
}
#mevTime,#mievTime{
    height:50px
}
#left{
    width:400px;
    margin-left:50px;
    margin-top:10px;
}
#right{
     margin-top:30px;
}
#left,#right,#img3,#content{
    float:left;
}
.img,#img3{
    margin-left:10px;
}
.content{
    width:400px;
    margin-left:150px;
    height:50px;
}
#gPrice2,#img3{
    margin-top:10px;
}
.el-col-12{
    width:120px;
}
#gp2{
margin-left:30px;
width:400px;
padding-top:10px;
float:left;

}
#button2{
    width:100px;
    height:100px;
    margin-left:310px;
}
#gName2{
    font-size:20px;
}
.input2{
    margin-top:5px;
    width:500px;
    margin-left:50px;
}
.comBut2{
    margin-left:20px;
    margin-top:10px;
}
</style>