<template>
  <div id="home">
   
      <el-carousel :interval="5000" arrow="" height="400px" width="1100px">
        <el-carousel-item v-for="item in picList" :key="item" >
           <img :src="item.idView" class="home-pic">
        </el-carousel-item>
      </el-carousel> 
    <el-input placeholder="请输入内容"  clearable v-model="goodSearch" >
      <i slot="prefix" class="el-input__icon el-icon-search" ></i>
    </el-input>
    <el-button type="danger" round size="small" class="home-search">搜索</el-button>
  </div>
</template>
<script>
export default {
  name: 'Home',
   data () {
      return {
        goodSearch:'',
        picList: [
          {id:0,idView:require('../../assets/goods/housefour.jpg')},
          {id:1,idView:require('../../assets/goods/kouhong.jpg')},
          {id:2,idView:require('../../assets/goods/PcBg1.jpg')},
          {id:3,idView:require('../../assets/goods/toytwo.jpg')},
          {id:4,idView:require('../../assets/goods/toyfive.jpg')}
        ]
        }
        
   }
}
</script>
<style scoped>

#home{
  height: 500px;
  width: 1100px;
  margin-top: 10px;
   position: relative;
   margin-left: 90px;
}
.home-pic{
    /* max-width: 100%;
    max-height: 100%; */
    height: 100%;
    width: 100%;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  #home /deep/ .el-input__inner{
    width: 40% !important;
  }
</style>