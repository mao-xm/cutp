<template>
    <div id="sale-receive-order-item">
        <el-card class="sale-receive-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="sale-receive-order-item-card-button">
                <span class="sale-receive-order-item-card-icon iconfont icon-lianximaijia1">联系买家</span>
                <el-button type="danger" class="order-item-button" round>提醒收货</el-button>
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
.sale-receive-order-item-card-icon:hover{
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
.sale-receive-order-item-card-button{
    margin-top: 5px;
}
</style>