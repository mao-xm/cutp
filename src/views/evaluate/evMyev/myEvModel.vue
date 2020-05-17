<template>
    <div id="myEvModel">
        <el-card>
            <div id="myEvModel1">
                <span id="myEvModel1-1">{{MyEvaluate.oEvaluationTime|timefilters}}</span><br>
                <span id="myEvModel1-2">{{MyEvaluate.oEvaluation}}</span>
                <div id="myEvModel1-3">
                 <ul>
                   <li v-for="(ig,i) in MyEvaluate.orderEvaluationMedia" :key="i"><img :src="ig.oemUrl" width="80px" height="80px" class="img"></li>
                </ul>
                </div>
            </div>
            <div id="myEvModel2">
                <el-card>
                <img :src="MyEvaluate.goodsVo.goodsMedias[0].gmUrl" width="100px" height="100px" id="img3">
                <div id="gp1">
                    <div id="gName1">{{MyEvaluate.goodsVo.gName}}</div>
                    <div id="gPrice1">￥{{MyEvaluate.goodsVo.gPrice}}</div>
                    
                </div>
                <div id="button1">
                    <el-button type="danger" size="small" @click="selectDetail(MyEvaluate.oId)">查看</el-button>
                    </div>
                </el-card>
            </div>
            <div id="myEvModel3">
                <div id="button2">
                 <el-button type="danger" size="small" @click="mReview(MyEvaluate)" v-if="MyEvaluate.oStatus==5">追评</el-button>
                 <el-button type="danger" size="small" @click="mReview1(MyEvaluate)" v-if="MyEvaluate.oStatus!=5">查看</el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>

export default {
    name:'mvComment',
    props:['MyEvaluate'],
    data(){
        return {value:'追评',flag:false}
    },
    filters: {
    timefilters(val) {
      if (val == null || val == "") {
        return "暂无时间";
      } else {
        let d = new Date(val);   //val为取到的后台时间
        let month =
          d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
        let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
        let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
        let min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
        let sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
       let times=d.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + sec;
        return times;
      }
    }
  },
    methods:{
         selectDetail(oId){
         this.$router.push({
          path:'/orderDetail',
          query:{
            oId:oId
          }
        })
      },
        mReview(MyEvaluate){
            this.flag=true;
            this.$router.push({path:'/mvComment',query:{ MyEvaluate:MyEvaluate,flag:this.flag}});
        },
        mReview1(MyEvaluate){
            this.$router.push({path:'/mvComment',query:{ MyEvaluate:MyEvaluate,flag:this.flag}});
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