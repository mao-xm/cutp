<template>
    <div id="order-detail-button-aa">
        <span class="order-detail-button-icon iconfont icon-lianximaijia1" @click="toOrderDetail()">订单详情</span>
    </div>
</template>
<script>
export default {
    props: { 
        order:Object
    },
    methods:{
        toOrderDetail(){
            const query = {oId: this.order.oId}
            console.log(query)
            this.$router.push({path:'/orderDetail',query})
        }
    }
}
</script>
<style scoped>
.order-detail-button-aa{
    display: inline;
}
.order-detail-button-icon:hover{
    color: red;
}
</style>