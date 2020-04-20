<template>
   <div id="od"> 
    <el-card :body-style="{ padding: '0px'}">
      <img :src="url" class="image">
      <div style="padding: 14px;">
        <span id="tspan1">{{gName}}</span>
        <span id="tspan2">{{ieChangeIntegral}}</span>
        <div class="bottom clearfix">
            <span id="tspan4">{{ieCreateTime}}</span>
          
        </div>
        <span id="tspan3">{{reason}}</span>
          
        <el-button type="danger" size="small" class="delete">删除</el-button>
      </div>
    </el-card>
</div>
</template>
<script>
export default {
    name:'outter',
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
#od{
    margin-top:30px;
    width:220px;
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

  .image {
    width: 220px;
    display: block;
    height:150px;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
  .delete{
  margin-left:130px;
  margin-top:10px;
}
</style>