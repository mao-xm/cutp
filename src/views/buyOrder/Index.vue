<template>
  <div class="buyOrder">
    <el-card class="buyOrder-card">
      <div class="buyOrder-search">
        <el-input placeholder="请输入内容" v-model="input3" class="buyOrder-search-input">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick" active-text-color="red">
        <el-tab-pane label="全部" name="all">全部</el-tab-pane>
        <el-tab-pane label="待付款" name="waitPay">待付款</el-tab-pane>
        <el-tab-pane label="待发货" name="waitShip">待发货</el-tab-pane>
        <el-tab-pane label="待收货" name="waitReceive">待收货</el-tab-pane>
        <el-tab-pane label="待评价" name="waitEvaluation">待评价</el-tab-pane>
      </el-tabs>
    </el-card>

  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'all'
    }
  }
}
</script>
<style>
.buyOrder{
  position: relative;
  top: 20px;
  
}
.buyOrder-card {
  position: relative;
  margin: auto auto;
  width: 80%;
}
.buyOrder-search{
  position: relative;
  height: 40px;
  width: 200px;
  float: right;
  z-index: 1;
}
.buyOrder-search-input{
  height: 30px !important;
}
.el-tabs__active-bar{
  background-color: red !important;
}
.el-tabs__item.is-active {
  color: red !important;
}
.el-tabs__item:hover{
  color: red !important;
}
</style>