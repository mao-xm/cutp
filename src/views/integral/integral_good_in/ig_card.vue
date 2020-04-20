<template>
  <div id="igCard" @click="toDetail(igId)">
    <el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="url">
      <div style="padding: 14px;">
        <div id="igSpan1">{{igName}}</div>
        <span id="igSpan2">{{igIntegral}}</span>
        <!-- 排除<div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div> -->
      </div>
    </el-card>
  </el-col>
</el-row>
    </div>
</template>
  
<script>
import myAxios from "@/utils/myAxios";
export default {
  name:'ig_card',
  props:['igId','igName','igIntegral','url'],
  methods:{
   toDetail(igId){
        this.$router.push({
          path:'/igDetail',
          query:{
            id:igId
          }
        })

    }}
 
}
</script>
<style scoped>
#igSpan1{
    font-size:20px;
    display:inline-block;
    text-align:center;
    width:123px;
    height:27px;
}
#igSpan2{
    margin-left:20px;
}
#tspan4{
    margin-left:10px;
}
.el-col-8{
    width:210px;
    margin-left:20px;
}
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  img {
    width: 210px;
    display: block;
    height:210px;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>