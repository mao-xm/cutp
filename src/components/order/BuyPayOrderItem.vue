<template>
    <div id="buy-pay-order-item">
        <el-card class="buy-pay-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="buy-pay-order-item-card-button">
                <orderDetailButton class="order-item-icon" :order="order"></orderDetailButton>
                <el-button type="danger" class="order-item-button" round @click="cancelOrder()">取消订单</el-button>
                <el-button type="danger"  @click="goPay()" class="order-item-button" round>付款</el-button>
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
        /**
         * 支付函数
         */
        async goPay() {
            myAxios
                .post(`/order/order/goAlipay/${this.order.oId}`)
                .then(res => {
                    console.log(res,'aa')
                    document.querySelector('body').innerHTML = res;
                    const div = document.createElement('div') // 创建div
                    div.innerHTML = res // 将返回的form 放入div
                    document.body.appendChild(div)
                    document.forms[0].submit();
                }).catch(err => {
                    console.log(err,'bb');
                });
        },
        /**
         * 取消订单
         */
        async cancelOrder(){
            this.$confirm('确认取消订单？')
            .then(_ => {
                myAxios
                .post(`/order/order/cancelOrder/${this.order.oId}/${this.order.user.uId}/${1}`)
                .then(res => {
                    if(res == true){
                        const query = {type: 6}
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
.buy-pay-order-item-card-icon:hover{
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
.buy-pay-order-item-card-button{
    margin-top: 5px;
}
</style>