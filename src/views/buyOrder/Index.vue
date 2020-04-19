<template>
  <div class="buyOrder">
    <el-card class="buyOrder-card">
      <div class="buyOrder-search">
        <el-input placeholder="请输入内容" v-model="gName" class="buyOrder-search-input">
          <el-button slot="append" icon="el-icon-search" @click="searchOrder()"></el-button>
        </el-input>
      </div>
      <el-tabs v-model="type" @tab-click="changeTab" active-text-color="red" type="card">
        <el-tab-pane label="全部" name="0"></el-tab-pane>
        <el-tab-pane label="待付款" name="1"></el-tab-pane>
        <el-tab-pane label="待发货" name="2"></el-tab-pane>
        <el-tab-pane label="待收货" name="3"></el-tab-pane>
        <el-tab-pane label="待评价" name="4"></el-tab-pane>
        <div class="buyOrder-card-order-items">
          <div v-for="item in rows" class="buyOrder-card-order-item">
              <buyPayOrderItem v-if="item.oStatus == 1" :order="item"></buyPayOrderItem>
              <buyShipmentsOrderItem v-if="item.oStatus == 2" :order="item"></buyShipmentsOrderItem>
              <buyReceiveOrderItem v-if="item.oStatus == 3" :order="item"></buyReceiveOrderItem>
              <buyEvaluationOrderItem v-if="item.oStatus == 4" :order="item"></buyEvaluationOrderItem>
              <buyCancelItem v-if="item.oStatus == 6" :order="item"></buyCancelItem>
              <buyReturnOrderItem v-if="item.oStatus == 7" :order="item"></buyReturnOrderItem>
              <buyAddEvaluationOrderItem v-if="item.oStatus == 5" :order="item"></buyAddEvaluationOrderItem>
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
    <div class="buyOrder-bottom"></div>
  </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
import qs from 'qs'
import buyPayOrderItem from '@/components/order/BuyPayOrderItem'
import buyShipmentsOrderItem from '@/components/order/BuyShipmentsOrderItem'
import buyReceiveOrderItem from '@/components/order/BuyReceiveOrderItem'
import buyEvaluationOrderItem from '@/components/order/BuyEvaluationOrderItem'
import buyCancelItem from '@/components/order/BuyCancelItem'
import buyReturnOrderItem from '@/components/order/BuyReturnOrderItem'
import buyAddEvaluationOrderItem from '@/components/order/BuyAddEvaluationOrderItem'
export default {
  components:{
    buyPayOrderItem,
    buyShipmentsOrderItem,
    buyReceiveOrderItem,
    buyEvaluationOrderItem,
    buyCancelItem,
    buyReturnOrderItem,
    buyAddEvaluationOrderItem
  },
  data() {
    return {
      type: "0",
      uId:1,
      rows:{},
      gName:'',
      isSearch:false,
      pagination:{
        total: 0,
        size: 2,
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
        this.isSearch = false
      },
      /**
       * 获取订单信息
       */
      async searchOrder() {
        this.isSearch = true
        if(this.gName == ''){return}
          myAxios
              .get(`/order/order/searchOrder/${this.uId}/${this.gName}/${this.pagination.size}/${this.pagination.currentPage}/${true}`)
              .then(res => {
                  console.log(res)
                  this.rows = res.rows
                  this.pagination.total = res.total
              }).catch(err => {
                  console.log(err,'bb');
                  });
      },
      async getOrder(){
          myAxios
              .get(`/order/order/getOrder/${this.uId}/${this.type}/${this.pagination.size}/${this.pagination.currentPage}`)
              .then(res => {
                  console.log(res)
                  this.rows = res.rows
                  this.pagination.total = res.total
              }).catch(err => {
                  console.log(err,'bb');
                  });        
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
.buyOrder-card-order-item{
  margin-bottom: 20px;
}
.buyOrder-bottom{
  height: 20px;
}
</style>