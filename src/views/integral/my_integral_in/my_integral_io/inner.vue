<template>
   <div id="td"> 
    <el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px'}">
      <img :src="url" class="image">
      <div style="padding: 14px;">
        <span id="tspan1">{{gName}}</span>
        <span id="tspan2">{{ieChangeIntegral}}</span>
        <div class="bottom clearfix">
            <span id="tspan3">{{reason}}</span>
            <span id="tspan4">{{ieCreateTime}}</span>
          <!-- <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button> -->
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</div>
</template>
<script>
export default {
    name:'inner',
    props:['gName','ieChangeIntegral','reason','ieCreateTime','url'],
    // data(){
    //     return {url:require('../../../../assets/ie/cfj.jpg')}
    // }
}
</script>
<style scoped>
/* ul{
  padding-left:0px !important;

} */
#tspan1{
    font-size:20px;
}
#tspan2{
    margin-left:50px;
}
#tspan4{
    margin-left:10px;
}
.el-col-8{
    width:220px;
    margin-left:20px;
}
#td{
    margin-top:30px;
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

  .image {
    width: 220px;
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