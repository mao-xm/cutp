<template>
    <div id="basic-order-item">
        <div class="basic-order-item-user" v-if="order.isBuy == true">
            <el-avatar class="basic-order-item-buy-user-avatar" :size="size" :src="order.goodsVo.user.uAvatar"></el-avatar>
            <span class="basic-order-item-buy-user-name">{{order.goodsVo.user.uName}}</span>
            <span class="basic-order-item-buy-user-type" v-if="order.oStatus == 1">等待买家支付</span>
            <span class="basic-order-item-buy-user-type" v-if="order.oStatus == 2">等待卖家发货</span>
            <span class="basic-order-item-buy-user-type" v-if="order.oStatus == 3">等待买家收货</span>
            <span class="basic-order-item-buy-user-type" v-if="order.oStatus == 4">等待买家评价</span>
            <span class="basic-order-item-buy-user-type" v-if="order.oStatus == 5 || order.oStatus == 9">交易成功</span>
            <span class="basic-order-item-buy-user-type" v-if="order.oStatus == 6 && order.oCancelType == 1">买家取消订单</span>
            <span class="basic-order-item-buy-user-type" v-if="order.oStatus == 6 && order.oCancelType == 2">卖家取消订单</span>
            <span class="basic-order-item-buy-user-type" v-if="order.oStatus == 6 && order.oCancelType == 3">买家取消订单，已退款</span>
            <span class="basic-order-item-buy-user-type" v-if="order.oStatus == 6 && order.oCancelType == 4">卖家取消订单，已退款</span>
            <span class="basic-order-item-buy-user-type" v-if="order.oStatus == 7 || order.oCancelType == 8">退货退款</span>
        </div>
        <div class="basic-order-item-user" v-else>
            <el-avatar class="basic-order-item-sale-user-avatar" :size="size" :src="order.user.uAvatar"></el-avatar>
            <span class="basic-order-item-sale-user-name">{{order.user.uName}}</span>
            <span class="basic-order-item-sale-user-type" v-if="order.oStatus == 1">等待买家支付</span>
            <span class="basic-order-item-sale-user-type" v-if="order.oStatus == 2">等待卖家发货</span>
            <span class="basic-order-item-sale-user-type" v-if="order.oStatus == 3">等待买家收货</span>
            <span class="basic-order-item-sale-user-type" v-if="order.oStatus == 4">等待买家评价</span>
            <span class="basic-order-item-sale-user-type" v-if="order.oStatus == 5 || order.oStatus == 9">交易成功</span>
            <span class="basic-order-item-sale-user-type" v-if="order.oStatus == 6 && order.oCancelType == 1">买家取消订单</span>
            <span class="basic-order-item-sale-user-type" v-if="order.oStatus == 6 && order.oCancelType == 2">卖家取消订单</span>
            <span class="basic-order-item-sale-user-type" v-if="order.oStatus == 6 && order.oCancelType == 3">买家取消订单，已退款</span>
            <span class="basic-order-item-sale-user-type" v-if="order.oStatus == 6 && order.oCancelType == 4">卖家取消订单，已退款</span>
            <span class="basic-order-item-sale-user-type" v-if="order.oStatus == 7 || order.oCancelType == 8">退货退款处理中...</span>
        </div>
        <div class="basic-order-item-goods">
            <el-image
                class="basic-order-item-goods-img"
                :src="gImg"
            >
            </el-image>
            <span class="basic-order-item-goods-name">{{order.goodsVo.gName}}</span>
            <span class="basic-order-item-goods-detail">{{order.goodsVo.gDetail}}</span>
            <span class="basic-order-item-goods-price">￥{{order.goodsVo.gPrice}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: { 
        order:Object
    },
    created(){
        console.log(this.order,'ee')
    },
    computed: {
        gImg: function(){
            var medias = this.order.goodsVo.goodsMedias
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
    }
}
</script>
<style scoped>
    #basic-order-item{
        height: 260px;
    }
    .basic-order-item-user{
        display: flex;
        align-items: center;
        height: 50px;
    }
    .basic-order-item-buy-user-type{
        position: absolute;
        right:  1%
    }
    .basic-order-item-sale-user-type{
        position: absolute;
        right:  1%
    }
    .basic-order-item-buy-user-name{
        margin-left: 10px;
    }
    .basic-order-item-sale-user-name{
        margin-left: 10px;
    }
    .basic-order-item-goods{
        position: relative;
        width: 100%;
        float: left;
    }
    .basic-order-item-goods-img{
        position: relative;
        width:30%;
        height: 200px;
    }
    .basic-order-item-goods-name{
        position: absolute;
        left: 32%;
        width: 70%;
        line-height: 28px;
        font-size: 28px;
        margin: 0px;
    }
    .basic-order-item-goods-detail{
        position: absolute;
        top: 20%;
        left: 35%;
        width: 60%;
    }
    .basic-order-item-goods-price{
        position: absolute;
        top:90%;
        left: 95%;
    }
</style>