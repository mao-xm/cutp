<template>
    <div id="order-detail">
        <el-card class="order-detail-card">
            <div slot="header" class="clearfix">
                <span class="order-detail-card-span" v-if="orderVo.oStatus == 1">待付款订单详情</span>
                <span class="order-detail-card-span" v-if="orderVo.oStatus == 2">待发货订单详情</span>
                <span class="order-detail-card-span" v-if="orderVo.oStatus == 3">待收货订单详情</span>
                <span class="order-detail-card-span" v-if="orderVo.oStatus == 4">待评价订单详情</span>
                <span class="order-detail-card-span" v-if="orderVo.oStatus == 5">交易关闭</span>
                <span class="order-detail-card-span" v-if="orderVo.oStatus == 6">已取消订单详情</span>
                <span class="order-detail-card-span" v-if="orderVo.oStatus == 7">退货退款订单详情</span>
            </div>
            <el-card class="order-detail-goods">
                <div slot="header" class="clearfix">
                    商品信息
                </div>
                    <el-image
                        class="order-detail-goods-img"
                        :src="gImg"
                    >
                    </el-image>
                    <span class="order-detail-goods-name">{{orderVo.goodsVo.gName}}</span>
                    <span class="order-detail-goods-detail">{{orderVo.goodsVo.gDetail}}</span>
                    <span class="order-detail-goods-price">￥{{orderVo.goodsVo.gPrice}}</span>
            </el-card>
            <el-card class="order-detail-address">
                <div slot="header" class="clearfix">
                    地址信息
                </div>
                <div>
                    <p>收件人：{{orderVo.userAddress.uaSigner}}</p>
                    <p>收货电话：{{orderVo.userAddress.uaAddress}}</p>
                    <p>收货地址：{{orderVo.userAddress.uaPhone}}</p>
                </div>
            </el-card>
            <el-card class="order-detail-order">
                <div slot="header" class="clearfix">
                    订单信息
                </div>
                <div>
                    <p>订单号：{{orderVo.oId}}</p>
                    <p>创建时间：{{orderVo.oCreateTime}}</p>
                    <p v-if="orderVo.oPayTime != '' && orderVo.oPayTime != null">支付时间：{{orderVo.oPayTime}}</p>
                    <p v-if="orderVo.oShipmentsTime != ''&& orderVo.oShipmentsTime != null">发货时间：{{orderVo.oShipmentsTime}}</p>
                    <p v-if="orderVo.oReceiveTime != ''&& orderVo.oReceiveTime != null">收货时间：{{orderVo.oReceiveTime}}</p>
                    <p v-if="orderVo.oEvaluationTime != ''&& orderVo.oEvaluationTime != null">评价时间：{{orderVo.oEvaluationTime}}</p>
                    <p v-if="orderVo.oEvaluationAddTime != ''&& orderVo.oEvaluationAddTime != null">追评时间：{{orderVo.oEvaluationAddTime}}</p>
                    <p v-if="orderVo.oTradeNo != ''">支付宝交易号：{{orderVo.oTradeNo}}</p>                  
                </div>
            </el-card>
            <div class="order-detail-bottom"></div>
        </el-card>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
    created(){
        console.log('aa')
        this.oId = this.$route.query.oId
        this.getOrderDetail()
    },
    data(){
        return{
            orderVo:{},
            oId: 0
        }

    },    
    computed: {
        gImg: function(){
            var medias = this.orderVo.goodsVo.goodsMedias
                for (let item of medias) {
                    console.log(item)
                    if(item.gmType == 0){
                        console.log(item)
                        return item.gmUrl
                        // this.$set(this.goods,'gImg',item.gmUrl)
                        break
                    }
                }
            return ''
        }
    },
    methods:{
      /**
       * 获取订单信息
       */
      async getOrderDetail() {
          console.log('ss')
          myAxios
              .get(`/order/order/getOrderDetail/${this.oId}`)
              .then(res => {
                  this.orderVo = res
              }).catch(err => {
                  console.log(err,'bb');
                  });
      },
  }
}
</script>
<style scoped>
.order-detail-card{
      position: relative;
  top: 10px;
  /* height: 600px; */
  margin: auto auto;
    width: 80%;
}
.order-detail-goods{
            position: relative;
        width: 100%;
        float: left;
}
.order-detail-goods-img{
    position: relative;
        width:30%;
        height: 200px;
}
.order-detail-goods-name{
    position: absolute;
    left: 32%;
    width: 70%;
    line-height: 28px;
    font-size: 28px;
    margin: 0px;
}
.order-detail-goods-detail{
    position: absolute;
    top: 40%;
    left: 35%;
    width: 60%;
}
.order-detail-goods-price{
    position: absolute;
    bottom: 5%;
    right: 2%;
}
.order-detail-address{
    position: relative;
    top: 20px;
}
.order-detail-order{
    position: relative;
    top: 40px;
}
.order-detail-bottom{
    height: 60px;
}
</style>