<template>
    <div id="sale-pay-order-item">
        <el-card class="sale-pay-order-item-card">
            <basicOrderItem :order="order"></basicOrderItem>
            <div class="sale-pay-order-item-card-button">
                <span class="sale-pay-order-item-card-icon iconfont icon-lianximaijia1">联系买家</span>
                <el-button type="danger" class="order-item-button" round>取消订单</el-button>
                <el-button type="danger" class="order-item-button" round @click="changeVisible()">修改价格</el-button>
            </div>
        </el-card>
        <el-dialog title="修改价格" :visible.sync="dialogFormVisible">
            <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="商品价格" prop="gPrice">
                    <el-input v-model="form.gPrice"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button type="danger" @click="updateGoodsPrice('form')">修改</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
import basicOrderItem from '@/components/order/BasicOrderItem'
export default {
    components:{
        basicOrderItem
    },
    data(){
        return{
            dialogFormVisible: false,
            form:{},
            uId: 2,
            rules: {
               gPrice: [
                    { required: true, message: '请填写新价格', trigger: 'change' }
               ],
            },
        }
    },
    created(){
        this.$set(this.order,'isBuy',false)
    },
    methods:{
        changeVisible(){
            this.dialogFormVisible = true
        },
        async updateGoodsPrice(formName){
            this.$confirm('确认修改价格？')
            .then(_ => {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(this.form.gPrice != ''){
                            myAxios
                                .post(`/order/order/updatePrice/${this.order.goodsVo.user.uId}/${this.order.oId}/${this.order.oStatus}/${this.form.gPrice}`)
                                .then(res => {
                                    if(res){
                                        const query = {type: 3}
                                        console.log(query)
                                        this.$router.push({path:'/orderTemp',query})
                                    }
                                }).catch(err => {
                                    this.$notify.error
                                    ({
                                        title: '失败',
                                        message: err
                                    });
                                });
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            })
            .catch(_ => {

                });
        }
    },
    props: { 
        order: Object
    }
}
</script>
<style scoped>
.sale-pay-order-item-card-icon:hover{
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
.sale-pay-order-item-card-button{
    margin-top: 5px;
}
</style>