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
      <el-button type="danger" @click="verifyGoodsByGId()">提交订单</el-button>
    </el-card>

  </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
  data() {
    return {
      activeName: 'all',
      goods:{
        gId:1
      }
    }
  },
  methods:{
    /**
     * 获取商品信息
     */
    async verifyGoodsByGId() {
        myAxios
            .get(`/order/oGoods/verifyGoodsByGId/${this.goods.gId}`)
            .then(res => {
                console.log(res,'aa')
                this.goods = res
                console.log(this.goods.goodsMedias)
                if(this.goods.goodsMedias){
                    console.log(this.goods.goodsMedias)
                    for (let item of this.goods.goodsMedias) {
                        console.log(item)
                        if(item.gmType == 0){
                            console.log(item)
                            this.$set(this.goods,'gImg',item.gmUrl)
                            // this.goods.gImg = item.gmUrl
                            break
                        }
                    }
                }
                const query = this.goods
                this.$router.push({path:'/generateOrder',query})
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
</style>