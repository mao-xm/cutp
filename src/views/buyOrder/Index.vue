<template>
  <div class="buyOrder">
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-card class="buyOrder-card">
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