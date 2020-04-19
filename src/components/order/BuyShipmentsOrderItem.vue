<template>
    <div id="buy-shipments-order-item">
        <el-card class="buy-shipments-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="buy-shipments-order-item-card-button">
                <orderDetailButton class="order-item-icon" :order="order"></orderDetailButton>
                <el-button type="danger" class="order-item-button" round @click="remindShipments()">提醒发货</el-button>
                <el-button type="danger" class="order-item-button" round @click="cancelOrder()">取消订单</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
import basicOrderItem from '@/components/order/BasicOrderItem'
import myAxios from "@/utils/myAxios";
import orderDetailButton from '@/components/order/button/OrderDetailButton'
export default {
    components:{
        basicOrderItem,
        orderDetailButton,
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
        },
        /**
         * 取消订单
         */
        async cancelOrder(){
            this.$confirm('确认取消订单？')
            .then(_ => {
                myAxios
                .post(`/order/order/cancelOrder/${this.order.oId}/${this.order.user.uId}/${3}`)
                .then(res => {
                    if(res == true){
                        const query = {type: 8}
                        console.log(query)
                        this.$router.push({path:'/orderTemp',query})
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
.buy-shipments-order-item-card-button{
    margin-top: 5px;
}
</style>