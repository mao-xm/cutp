<template>
    <div id="sale-pay-order-item">
        <el-card class="sale-pay-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="sale-pay-order-item-card-button">
                <span class="sale-pay-order-item-card-icon iconfont icon-lianximaijia1">联系买家</span>
                <el-button type="danger" class="order-item-button" round>取消订单</el-button>
                <el-button type="danger" class="order-item-button" round>修改价格</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
import basicOrderItem from '@/components/order/BasicOrderItem'
export default {
    components:{
        basicOrderItem
    },
    created(){
        this.$set(this.order,'isBuy',false)
    },
    props: { 
        order: Object
    }
}
</script>
<style scoped>
.sale-pay-order-item-card-icon:hover{
    color: red;
}
.order-item-button{
    float: right;
    margin-right: 5px;
}
.el-button{
    height: 15px !important;
    text-align: center !important;
    line-height: 0.3 !important;
}
.sale-pay-order-item-card-button{
    margin-top: 5px;
}
</style>