<template>
  <div id="home">
    
      <el-carousel :interval="5000" arrow="" height="350px">
        <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    <!-- <router-link :to="{path:'/in_index'}">积分商城</router-link> -->
    <!-- <router-view></router-view> -->
    
  </div>
</template>
<script>
export default {
  name: 'Home'
  
}
</script>
<style scoped>

#home{
  height: 450px;
  width: 100%;
  margin-top: 10px;
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