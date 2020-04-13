<template>
    <div id="buy-shipments-order-item">
        <el-card class="buy-shipments-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="buy-shipments-order-item-card-button">
                <span class="buy-shipments-order-item-card-icon iconfont icon-lianximaijia1">联系卖家</span>
                <el-button type="danger" class="order-item-button" round @click="remindShipments()">提醒发货</el-button>
                <el-button type="danger" class="order-item-button" round>我要退款</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
import basicOrderItem from '@/components/order/BasicOrderItem'
import myAxios from "@/utils/myAxios";
export default {
    components:{
        basicOrderItem
    },
    created(){
        this.$set(this.order,'isBuy',true)
    },
    methods:{
        async remindShipments(){
            this.$confirm('确认提醒发货？')
            .then(_ => {
                var param = {uId: this.order.user.uId, oId: this.order.oId, oStatus: this.order.oStatus}
                myAxios
                .post(`/order/order/remindShipments`,param)
                .then(res => {
                    if(res == true){
                        this.$notify.success
                        ({
                            title: '成功',
                            message: '提醒发货成功'
                        });
                    }
                }).catch(err => {
                    console.log(err,'bb');
                    });
            })
            .catch(_ => {});
        }
    },
    props: { 
        order: Object
    }
}
</script>
<style scoped>
.buy-shipments-order-item-card-icon:hover{
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
.buy-shipments-order-item-card-button{
    margin-top: 5px;
}
</style>