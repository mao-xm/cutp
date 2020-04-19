<template>
    <div id="sale-cancel-order-item">
        <el-card class="sale-cancel-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="sale-cancel-order-item-card-button">
                <orderDetailButton class="order-item-icon" :order="order"></orderDetailButton>
                <el-button type="danger" class="order-item-button" round @click="sellDelete()">删除订单</el-button>
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
        this.$set(this.order,'isBuy',false)
    },
    methods:{
        async sellDelete(){
            this.$confirm('确认删除订单？')
            .then(_ => {
                console.log("bbbb")
                myAxios
                .post(`/order/order/sellDelete/${this.order.goodsVo.user.uId}/${this.order.oId}/${this.order.oStatus}`)
                .then(res => {
                    if(res == true){
                        const query = {type: 5}
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
.sale-cancel-order-item-card-icon:hover{
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
.sale-cancel-order-item-card-button{
    margin-top: 5px;
}
</style>