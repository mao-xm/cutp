<template>
    <div id="buy-return-order-item">
        <el-card class="buy-return-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="buy-return-order-item-card-button">
                <orderDetailButton class="order-item-icon" :order="order"></orderDetailButton>
                <el-button type="danger" class="order-item-button" round @click="toReturnDetail()">查看详情</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
import basicOrderItem from '@/components/order/BasicOrderItem'
import orderDetailButton from '@/components/order/button/OrderDetailButton'
import myAxios from "@/utils/myAxios";
export default {
    components:{
        basicOrderItem,
        orderDetailButton
    },
    created(){
        this.$set(this.order,'isBuy',true)
    },
    methods:{
        toReturnDetail(){
            const query = { param:{oId:this.order.oId,uId:this.order.user.uId,oStatus:this.order.oStatus,isBuy: true}}
            this.$router.push({path:'/returnDetail',query})
        }
    },
    props: { 
        order: Object
    }
}
</script>
<style scoped>
.buy-return-order-item-card-icon:hover{
    color: red;
}
.order-item-button{
    float: right;
    margin-right: 5px;
    margin-bottom: 10px;
}
.order-item-icon{
    float: left;
    margin-left: 5px;
}
.el-button{
    height: 15px !important;
    text-align: center !important;
    line-height: 0.3 !important;
}
.buy-return-order-item-card-button{
    margin-top: 5px;
}
</style>