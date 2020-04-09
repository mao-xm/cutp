<template>
    <div id="detail">
        <div id="left">
           <img :src='ig.url'>
           <el-input-number v-model="num" @change="handleChange" :min="1"
            :max="10" label="描述文字" class="number">
           </el-input-number>
        </div>
        <div id="right">
           <div id="right1">{{ig.igName}}</div>
           <div id="right2">{{ig.igIntegral}}</div>
           <div  id="right3">{{ig.describe}}</div>
           <el-button type="danger" round>兑换</el-button>
        </div>
    </div>
</template>
<script>
export default {
 name:'ig_detail',
 data(){
    return {
            num: 1,
            igId:2,
            ig:{igName:'爱康国宾优惠劵',igIntegral:50,url:'../../../../static/ig/yhj.png',
            describe:
            '描述买搜狐你啥时候大好时光大好时光风监督员十几个大概身高多少的季后赛的的女生导航时电脑端发货的'+
            '大会上更多试试ddjjsh dhg节度使的大哥的眼神氨甲环酸有昂撒多好多好的手机号多少多少度哈市'+
            '是好的手机号多少多少度哈市是'}
            }
 },
 methods:{
     getOrder(){
         this.$data.igId=this.$route.query&&this.$route.query.id
     },
      handleChange(value) {
        console.log(value);
      }
 },
 created:function(){
     this.getOrder();
     const url = `api/movie/subject/${this.$data.igId}`;
     that.$axios.get(url)
     .then((res)=>{
      console.log(res.data);
 })
    
 }   
}
</script>
<style scoped>
#detail{
    width:800px;
    height:500px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin:0px auto;
}
img{
    width:300px;
    height:300px;
}
#left{
    margin-top:50px;
    margin-left:70px;
    width:300px;
    float:left;
}
#right{
    font-size:30px;
    margin-top:50px;
    margin-left:30px;
    width:300px;
    float:left;
}
#right2{
    margin-left:250px;
}
#right3{
    font-size:20px;
}
.number{
    margin-top:30px;
    margin-left:60px;
}
.el-button--danger{
    color:black;
    background-color: #dd3035;
    border-color:#dd3035;

  }
.el-button{
    top:58px;
  position:relative;
  left:150px;
}
</style>