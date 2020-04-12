<template>
    <div id="sale-shipments-order-item">
        <el-card class="sale-shipments-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="sale-shipments-order-item-card-button">
                <span class="sale-shipments-order-item-card-icon iconfont icon-lianximaijia1">联系买家</span>
                <el-button type="danger" class="order-item-button" round>取消订单</el-button>
                <el-button type="danger" class="order-item-button" round @click="shipments()">发货</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
import basicOrderItem from '@/components/order/BasicOrderItem'
export default {
    components:{
        basicOrderItem
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