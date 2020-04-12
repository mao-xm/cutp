<template>
    <div id="buy-receive-order-item">
        <el-card class="buy-receive-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="buy-receive-order-item-card-button">
                <span class="buy-receive-order-item-card-icon iconfont icon-lianximaijia1">联系卖家</span>
                <el-button type="danger" class="order-item-button" @click="received()" round>确认收货</el-button>
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
    methods:{
        async received(){
            this.$confirm('确认已经收货？')
            .then(_ => {
                var param = {uId: this.order.user.uId,oId: this.order.oId, oStatus: this.order.oStatus }
                myAxios
                .post(`/order/order/received`,param)
                .then(res => {
                    if(res == true){
                        const query = {type: 2}
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
        this.$set(this.order,'isBuy',true)
    },
    props: { 
        order: Object
    }
}
</script>
<style scoped>
.buy-receive-order-item-card-icon:hover{
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
.buy-receive-order-item-card-button{
    margin-top: 5px;
}
</style>