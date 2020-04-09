<template>
    <div id="generate-order">
        <el-card class="generate-order-card">
            <div class="generate-order-goods">
                <img :src="goods.gImg" class="generate-order-goods-img"/>
                <div class="generate-order-goods-name">{{goods.gName}}</div>
                <div class="generate-order-goods-price">￥{{goods.gPrice}}</div>
            </div>
            <div class="generate-order-address">
                <div class="generate-order-address-title">选择收货地址</div>
                <el-form :model="order" :rules="rules" ref="order"   :inline="true"  class="generate-order-address-form">
                    <el-form-item prop="uaId">
                        <el-radio-group v-model="order.uaId" size="medium" fill="#dd3035" text-color="#DD3035" >
                            <el-radio v-for="item in addressList"  :label="item.uaId"  :key="item.uaId" class="generate-order-address-radio">{{item.uaAddress}} （{{item.uaSigner}} 收）{{item.uaPhone}}</el-radio>
                        </el-radio-group>
                        <el-button type="danger">新增地址</el-button>
                    </el-form-item>
                    <el-form-item class="generate-order-submit">
                        <el-button type="danger" @click="addGenerateOrder('order')">提交订单</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <el-dialog title="付款" :visible.sync="dialogFormVisible" :before-close="handleClose">
            <p>订单编号： {{order.oId}}</p>
            <p>商品名： {{goods.gName}}</p>
            <p>订单价格： {{goods.gPrice}}</p>
            <el-button type="danger" @click="goPay()">前往支付宝支付</el-button>
              <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
              </span>
        </el-dialog>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
import qs from 'qs'
export default {
    // 订单生成页
    data () {
        return {
            goods: {
            },
            order: {
                uaId: ''
            },
            addressList:[],
            uId:1,
            rules: {
               uaId: [
                    { required: true, message: '请选择地址', trigger: 'change' }
               ],
            },
            html:'',                                 
            dialogFormVisible: false
        }
    },
    created(){
        this.getAddressData();
        this.goods = this.$route.query
    },
    methods : {
        /**
         * 获取地址信息
         */
        async getAddressData() {
            myAxios
                .get(`/order/oAddress/queryUserAddressByUId/${this.uId}`)
                .then(res => {
                    console.log(res,'aa')
                    this.addressList = res
                }).catch(err => {
                    console.log(err,'bb');
                    });
        },
        /**
         * 提交订单函数
         */
        async addGenerateOrder(formName) {
            this.$confirm('确认提交订单？')
            .then(_ => {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if((this.order.uaId != 0 || this.order.uaId != '') && (this.goods.gId != 0 || this.goods.gId != '')&& (this.uId != 0 || this.uId != '')){
                            const params = { gId: this.goods.gId , uId: this.uId , uaId: this.order.uaId}
                            myAxios
                                .post(`/order/order/generateOrder`,params)
                                .then(res => {
                                    this.order = res
                                    this.dialogFormVisible = true
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
        },
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
        handleClose(){
            this.$confirm('确认关闭？')
            .then(_ => {
                this.$router.push({path:'/buyOrder'})
                done();
            })
            .catch(_ => {});
        }
    }
}
</script>
<style scoped>
.generate-order{
    position: relative;
}
.generate-order-card {
  position: relative;
  top: 10px;
  margin: auto auto;
  width: 80%;
}
.generate-order-goods{
    width: 100%;
    height: 300px;
    position: relative;
}
.generate-order-goods-img{
    width: 40%;
    height: 100%;
    position: relative;
    float: left;
}
.generate-order-goods-name{
    width: 50%;
    font-size: 40px;
    position: relative;
    left: 50px;
    float: left;
}
.generate-order-goods-price{
    width: 50%;
    font-size: 20px;
    left: 100px;
    color: red;
    position: relative;
    float: left;
}
.generate-order-address {
    position: relative;
    margin:20px 0px;
}
.generate-order-address-radio{
    width: 100%;
    margin: 10px auto;
}
.el-form-item{
    margin-bottom: 0px !important;
}
.generate-order-submit{
    float: right;
    margin-bottom: 20px !important;
}

.generate-order-address /deep/ .el-radio__input.is-checked+.el-radio__label {
  color: #DD3035 !important;
}
.generate-order-address /deep/ .el-radio__input.is-checked .el-radio__inner{
border-color: #DD3035 !important;
background: #DD3035 !important;
} 
</style>