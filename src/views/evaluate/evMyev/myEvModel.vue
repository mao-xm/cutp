<template>
    <div id="myEvModel">
        <el-card>
            <div id="myEvModel1">
                <span id="myEvModel1-1">2018-08-07</span><br>
                <span id="myEvModel1-2">特别好看，颜色没有色差，包装也好，客服还特别温柔哈哈</span>
                <div id="myEvModel1-3">
                 <ul>
                   <li v-for="(ig,i) in 5" :key="i"><img src="../../../../src/assets/Login/toux.jpg" width="80px" height="80px" class="img"></li>
                </ul>
                </div>
            </div>
            <div id="myEvModel2">
                <el-card>
                <img src="../../../assets/goods/kouhong.jpg" width="100px" height="100px" id="img3">
                <div id="gp1">
                    <div id="gName1">口红</div>
                    <div id="gPrice1">￥120</div>
                    
                </div>
                <div id="button1">
                    <el-button type="danger" size="small">查看</el-button>
                    </div>
                </el-card>
            </div>
            <div id="myEvModel3">
                <div id="button2">
                 <el-button type="danger" size="small" @click="mReview">追评</el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name:'mvComment',
    methods:{
        mReview(){
            this.$router.push({path:'/mvComment'});
        }
    }
}
</script>
<style scoped>
#myEvModel{
    /* margin-left:270px; */
    /* margin-top:10px; */
    /* border:1px solid #ccc; */
    width:600px;
    margin-left:41px;
}
#myEvModel1{
    /* margin-top:10px; */
    /* width:400px;
    height:50px;
    margin-left:120px;
    margin-top:20px; */
    /* font-size:12px; */
    margin-left:60px;
}
#myEvModel1-1{
    font-size:12px;
}
#myEvModel1-2{
    width:450px;
    /*height:30px;
    margin-left:570px; */
}
#myEvModel2{
    /* height:120px; */
    width:450px;
    /* margin-top:20px; */
    margin-left:57px;
}
#myEvModel1-3{
   height:100px;
   margin-top:10px;
}
ul li{
    list-style:none;
    display:inline-block;
}
ul{
    margin-left:-50px;
    width:450;
}
.img{
    margin-left:10px;
}
#gp1{
margin-left:30px;
padding-top:5px;
/* width:400px; */
float:left;
}
#gName1{
    font-size:20px;
}
#button1{
    /* width:100px;
    height:100px;
    margin-left:400px; */
    margin-left:181px;
    float:left;
    margin-top:49px;
}
#button2{
    margin-top:30px;
    margin-left:500px;
}
#gPrice1{
    margin-top:10px;
}
#img3{
    float:left;
     margin-top:-4px;
     margin-left:-4px;
}
</style>