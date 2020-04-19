<template>
    <div id="sale-shipments-order-item">
        <el-card class="sale-shipments-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="sale-shipments-order-item-card-button">
                <orderDetailButton class="order-item-icon" :order="order"></orderDetailButton>
                <el-button type="danger" class="order-item-button" round  @click="cancelOrder()">取消订单</el-button>
                <el-button type="danger" class="order-item-button" round @click="shipments()">发货</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
import basicOrderItem from '@/components/order/BasicOrderItem'
import orderDetailButton from '@/components/order/button/OrderDetailButton'
export default {
    components:{
        basicOrderItem,
        orderDetailButton
    },
    methods:{
        
        async shipments(){
            this.$confirm('确认已经发货？')
            .then(_ => {
                console.log("bbbb")
                myAxios
                .post(`/order/order/shipments/${this.order.goodsVo.user.uId}/${this.order.oId}/${this.order.oStatus}`)
                .then(res => {
                    if(res == true){
                        const query = {type: 1}
                        console.log(query)
                        this.$router.push({path:'/orderTemp',query})
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
                .post(`/order/order/cancelOrder/${this.order.oId}/${this.order.goodsVo.user.uId}/${4}`)
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
    created(){
        this.$set(this.order,'isBuy',false)
    },
    props: { 
        order: Object
    }
}
</script>
<style scoped>
.sale-shipments-order-item-card-icon:hover{
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
.sale-shipments-order-item-card-button{
    margin-top: 5px;
}
</style>