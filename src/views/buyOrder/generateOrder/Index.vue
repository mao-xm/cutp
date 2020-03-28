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
                <el-form :inline="true" :model="order" class="generate-order-address-form">
                    <el-form-item>
                        <el-radio-group v-model="order.uaId" size="medium" fill="#dd3035" text-color="#DD3035" >
                            <el-radio v-for="item in addressList"  :label="item.uaId"  :key="item.uaId" class="generate-order-address-radio">{{item.uaAddress}} （{{item.uaSigner}} 收）{{item.uaPhone}}</el-radio>
                            <!-- <el-radio :label="1" class="generate-order-address-radio">湖南省 衡阳市 雁峰区 黄茶岭街道 衡阳师范学院西校区 （刘家美 收）17347018542</el-radio>
                            <el-radio :label="2" class="generate-order-address-radio">湖南省 衡阳市 雁峰区 黄茶岭街道 衡阳师范学院西校区 （刘家美 收）17347018542</el-radio> -->
                        </el-radio-group>
                        <el-button type="danger">新增收货地址</el-button>
                    </el-form-item>
                    <el-form-item class="generate-order-submit">
                        <el-button type="danger">提交订单</el-button>
                    </el-form-item>
                </el-form>
                
            </div>
            
        </el-card>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
    // 订单生成页
    data () {
        return {
            goods: {
                gId: 1,
                gName: '鞋子',
                gPrice: 50,
                gImg: 'http://117.78.0.140/group1/M00/00/00/wKgAuF59jGaAblVdAACbpOfDso8177.jpg'
            },
            order: {
                uaId: ''
            },
            addressList:[],
            uId:1
        }
    },
    created(){
        this.getAddressData();
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