<template>
    <div id="buy-add-order-item">
        <el-card class="buy-add-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="buy-add-order-item-card-button">
                <span class="buy-add-order-item-card-icon iconfont icon-lianximaijia1">订单详情</span>
                <el-button type="danger" class="order-item-button" round @click="buyDelete()">删除订单</el-button>
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
.buy-add-order-item-card-icon:hover{
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
.buy-add-order-item-card-button{
    margin-top: 5px;
}
</style>