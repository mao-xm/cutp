<template>
  <div class="saleOrder">
    <el-card class="saleOrder-card">
      <div class="saleOrder-search">
        <el-input placeholder="请输入内容" v-model="input3" class="saleOrder-search-input">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <el-tabs v-model="type" @tab-click="changeTab" active-text-color="red" type="card">
        <el-tab-pane label="全部" name="0"></el-tab-pane>
        <el-tab-pane label="待付款" name="1">待付款</el-tab-pane>
        <el-tab-pane label="待发货" name="2">待发货</el-tab-pane>
        <el-tab-pane label="待收货" name="3">待收货</el-tab-pane>
        <el-tab-pane label="待评价" name="4">待评价</el-tab-pane>
        <div class="saleOrder-card-order-items">
          <div v-for="item in rows" class="saleOrder-card-order-item">
              <salePayOrderItem v-if="item.oStatus == 1" :order="item"></salePayOrderItem>
              <saleShipmentsOrderItem v-if="item.oStatus == 2" :order="item"></saleShipmentsOrderItem>
              <saleReceiveOrderItem v-if="item.oStatus == 3" :order="item"></saleReceiveOrderItem>
              <saleEvaluationOrderItem v-if="item.oStatus == 4" :order="item"></saleEvaluationOrderItem>
              <saleCancelItem v-if="item.oStatus == 6" :order="item"></saleCancelItem>
              <saleReturnOrderItem v-if="item.oStatus == 7" :order="item"></saleReturnOrderItem>
              <saleAddEvaluationOrderItem v-if="item.oStatus == 5" :order="item"></saleAddEvaluationOrderItem>
          </div>
        </div>
        <el-pagination
          small
          layout="prev, pager, next"
          @current-change="changePage"
          @prev-click="changePage"
          @next-click="changePage"
          :page-size="pagination.size"
          :current-page.sync="pagination.currentPage"
          :total="pagination.total">
        </el-pagination>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
import qs from 'qs'
import salePayOrderItem from '@/components/order/SalePayOrderItem'
import saleShipmentsOrderItem from '@/components/order/SaleShipmentsOrderItem'
import saleReceiveOrderItem from '@/components/order/SaleReceiveOrderItem'
import saleEvaluationOrderItem from '@/components/order/SaleEvaluationOrderItem'
import saleCancelItem from '@/components/order/SaleCancelItem'
import saleReturnOrderItem from '@/components/order/SaleReturnOrderItem'
import saleAddEvaluationOrderItem from '@/components/order/SaleAddEvaluationOrderItem'
export default {
  components:{
    salePayOrderItem,
    saleShipmentsOrderItem,
    saleReceiveOrderItem,
    saleEvaluationOrderItem,
    saleCancelItem,
    saleReturnOrderItem,
    saleAddEvaluationOrderItem
  },
  data() {
    return {
      type: "0",
      uId:2,
      rows:{},
      pagination:{
        total: 0,
        size: 1,
        currentPage:1
      }
    }
  },
  created(){
    
    this.getOrder()
  },
  methods:{
      changePage(value){
        // this.pagination.currentPage = value
        this.getOrder()
      },
      changeTab(tab, event){
        console.log(tab, event);
        this.type = tab.name
        this.pagination.currentPage=1
        this.getOrder()
      },
      /**
       * 获取订单信息
       */
      async getOrder() {
          myAxios
              .get(`/order/order/getSaleOrder/${this.uId}/${this.type}/${this.pagination.size}/${this.pagination.currentPage}`)
              .then(res => {
                  console.log(res)
                  this.rows = res.rows
                  this.pagination.total = res.total
              }).catch(err => {
                  console.log(err,'bb');
                  });
      },
  }
}
</script>
<style>
.saleOrder{
  position: relative;
  top: 20px;
  
}
.saleOrder-card {
  position: relative;
  margin: auto auto;
  width: 80%;
}
.saleOrder-search{
  position: relative;
  height: 40px;
  width: 200px;
  float: right;
  z-index: 1;
}
.saleOrder-search-input{
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
.saleOrder-card-order-item{
  margin-bottom: 20px;
}
</style>