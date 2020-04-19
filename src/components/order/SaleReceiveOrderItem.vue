<template>
    <div id="sale-receive-order-item">
        <el-card class="sale-receive-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="sale-receive-order-item-card-button">
                <orderDetailButton class="order-item-icon" :order="order"></orderDetailButton>
                <el-button type="danger" class="order-item-button" round @click="remindReceive()">提醒收货</el-button>
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
        async remindReceive(){
            this.$confirm('确认提醒发货？')
            .then(_ => {
                myAxios
                .post(`/order/order/remindReceive/${this.order.goodsVo.user.uId}/${this.order.oId}/${this.order.oStatus}`)
                .then(res => {
                    if(res == true){
                        this.$notify.success
                        ({
                            title: '成功',
                            message: '提醒收货成功'
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
.sale-receive-order-item-card-icon:hover{
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
.sale-receive-order-item-card-button{
    margin-top: 5px;
}
</style>