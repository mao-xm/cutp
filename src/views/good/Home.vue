<template>
  <div id="home">
   
      <el-carousel :interval="5000" arrow="" height="400px" width="1200px">
        <el-carousel-item v-for="item in picList" :key="item" >
           <img :src="item.idView" class="home-pic">
        </el-carousel-item>
      </el-carousel> 
    
  </div>
</template>
<script>
export default {
  name: 'Home',
   data () {
      return {
        picList: [
          {id:0,idView:require('../../assets/goods/house.jpg')},
          {id:1,idView:require('../../assets/goods/kouhon.png')},
          {id:2,idView:require('../../assets/goods/dressnew.jpg')}
        ]
        }
   }
}
</script>
<style scoped>

#home{
  height: 500px;
  width: 1200px;
  margin-top: 10px;
   position: relative;
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
</style>