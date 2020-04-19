<template>
    <div id="buy-evaluation-order-item">
        <el-card class="buy-evaluation-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="buy-evaluation-order-item-card-button">
                <orderDetailButton class="order-item-icon" :order="order"></orderDetailButton>
                <el-button type="danger" class="order-item-button" round @click="buyDelete()">删除订单</el-button>
                <askReturnButton class="order-item-button" :order="order"></askReturnButton>
                <el-button type="danger" class="order-item-button" round >评价</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
import basicOrderItem from '@/components/order/BasicOrderItem'
import askReturnButton from '@/components/order/button/AskReturnButton'
import orderDetailButton from '@/components/order/button/OrderDetailButton'
import myAxios from "@/utils/myAxios";
export default {
    components:{
        basicOrderItem,
        askReturnButton,
        orderDetailButton
    },
    created(){
        this.$set(this.order,'isBuy',true)
    },
    methods:{
        async buyDelete(){
            this.$confirm('确认删除该订单？')
            .then(_ => {
                var param = {uId: this.order.user.uId,oId: this.order.oId, oStatus: this.order.oStatus }
                myAxios
                .post(`/order/order/buyDelete`,param)
                .then(res => {
                    if(res == true){
                        const query = {type: 4}
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
.buy-evaluation-order-item-card-icon:hover{
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
.buy-evaluation-order-item-card-button{
    margin-top: 5px;
}
</style>