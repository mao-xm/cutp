<template>
    <div id="order-temp">
        <el-card class="order-temp-card">
            <span class="order-temp-card-span">{{message}}，{{count}}秒后将返回界面</span>
        </el-card>
    </div>
</template>
<script>
export default {
    created(){
        this.type = this.$route.query.type
        if(this.type == 1){
            this.message = '订单已发货' 
        } else if(this.type == 2){
            this.message = '订单已确认收货' 
        } else if(this.type == 3){
            this.message = '商品价格修改成功' 
        }else if(this.type == 4){
            this.message = '订单删除成功' 
        }else if(this.type == 5){
            this.message = '订单删除成功' 
        }else if(this.type == 6 || this.type == 7){
            this.message = '订单取消成功' 
        }else if(this.type == 8 || this.type == 9){
            this.message = '订单取消成功,已成功退款' 
        }else if(this.type == 10){
            this.message = '申请退货退款成功' 
        }else if(this.type == 11){
            this.message = '同意退款申请已成功，已退款' 
        }else if(this.type == 12){
            this.message = '拒绝退款申请已成功' 
        }else if(this.type == 13){
            this.message = '撤销退款申请已成功' 
        }
        else{
            this.message = '错误进入' 
        }
        console.log('ssssssss')
        const TIME_COUNT = 60
        if (!this.timer) {
            this.count = TIME_COUNT
            this.show = false
            this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--
                } else {
                    clearInterval(this.timer)
                    if(this.type == 1 || this.type == 3 || this.type == 5 || this.type == 7 || this.type == 9|| this.type == 11|| this.type == 12){
                        this.$router.push({path:'/mySale/saleOrderIndex'})
                    } else if(this.type == 2 || this.type == 4 || this.type == 6 || this.type == 8|| this.type == 10|| this.type == 13){
                        this.$router.push({path:'/buyOrder'})
                    }
                    else{
                        this.$router.push({path:'/'})
                    }
                    this.timer = null
                }
            }, 1000)
        }
    },
    methods:{

    },
    data(){
        return {
            message: '',
            count: 0,
            timer: null
        }
    }
}
</script>
<style scoped>
.order-temp-card{
  position: relative;
  top: 10px;
  height: 600px;
  margin: auto auto;
  width: 80%;

}
.order-temp-card-span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 28px;
}
</style>