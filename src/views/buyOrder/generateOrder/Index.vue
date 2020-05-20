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
                <el-form :model="order" :rules="rules" ref="order"   class="generate-order-address-form">
                    <el-form-item prop="uaId">
                        <el-radio-group v-model="order.uaId" size="medium" fill="#dd3035" text-color="#DD3035" >
                            <el-radio v-for="item in addressList"  :label="item.uaId"  :key="item.uaId" class="generate-order-address-radio">{{item.uaAddress}} （{{item.uaSigner}} 收）{{item.uaPhone}}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item class="generate-order-add-address">
                        <!-- <el-button type="danger"  @click="AddNewAd1">新增地址</el-button> -->
                        <el-button type="danger"  @click="dialogFormVisible1 = true">新增地址</el-button>
                        <el-dialog title="添加地址：" :visible.sync="dialogFormVisible1" @close="resetForm('ruleForm')">
                                <!-- <el-form :model="form">
                                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                                    <el-input v-model="form.name" autocomplete="off"></el-input>
                                    </el-form-item>
                                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                                    <el-select v-model="form.region" placeholder="请选择活动区域">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                    </el-form-item>
                                </el-form> -->
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="收件人姓名" prop="name">
                                    <el-input  v-model="ruleForm.name" autocomplete="off" class="input"></el-input>
                                </el-form-item>
                                <el-form-item label="收件人电话" prop="number" clearValidate class="item">
                                    <el-input v-model="ruleForm.number" autocomplete="off" class="input"></el-input>
                                </el-form-item>
                            
                                <el-form-item label="收件人地址" prop="value" class="item">
                                        
                                        <el-cascader
                                            placeholder="请选择地址" 
                                            class="inputs"
                                            v-model="ruleForm.value"
                                            :options="options"
                                            @change="handleChange">
                                    </el-cascader>
                                </el-form-item>
                                <el-form-item label="详细地址" prop="DetailAdress" class="item">
                                    <el-input v-model="ruleForm.DetailAdress" class="input"></el-input>
                                </el-form-item>
                                <!-- <el-form-item>
                                    <el-button type="danger" @click="submitForm('ruleForm')" class="preserve">保存</el-button>
                                </el-form-item> -->
             </el-form>
                                <div slot="footer" class="dialog-footer">
                                    <el-button @click="dialogFormVisible1=false" >取 消</el-button>
                                    <!-- <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button> -->
                                    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
  
                                </div>
                        </el-dialog>
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
         var checkNumber = (rule, value, callback) => {
         if (isNaN(value)){
             callback(new Error('请输入数字值'));   
         }
         else if(value.length!==11){
               callback(new Error('收件人电话是11位'));
         }else{
           callback();
         }
          };
        return {
             options: [{
          value: '天津市',
          label: '天津市',
          children: [{
            value: '西青区',
            label: '西青区',
            children: [{
              value: '精武镇',
              label: '精武镇'
            }, {
              value: '中北镇',
              label: '中北镇'
            }]
          }, {
            value: '和平区',
            label: '和平区',
            children: [{
              value: '新华街道',
              label: '新华街道'
            }, {
              value: '巴塔街道',
              label: '巴塔街道'
            }]
          }]
        }, {
          value: '贵州省',
          label: '贵州省',
          children: [{
            value: '毕节市',
            label: '毕节市',
            children: [{
              value: '织金县',
              label: '织金县'
            }, {
              value: '黔西县',
              label: '黔西县'
            }]
          }, {
            value: '贵阳市',
            label: '贵阳市',
            children: [{
              value: '南明区',
              label: '南明区'
            }, {
              value: '花溪区',
              label: '花溪区'
            }]
          }]
          },{
          value: '湖南省',
          label: '湖南省',
          children: [{
            value: '长沙市',
            label: '长沙市',
            children: [{
              value: '芙蓉区',
              label: '芙蓉区'
            }, {
              value: '雨花区',
              label: '雨花区'
            }]
          }, {
            value: '湘潭市',
            label: '湘潭市',
            children: [{
              value: '雨湖区',
              label: '雨湖区'
            }, {
              value: '岳塘区',
              label: '岳塘区'
            }]
          }]
          }

         ],
        ruleForm: {
          name: '',
          number:'',
          value:[],
          DetailAdress: ''
        },
        userA:{
          uId:0,
          uaAddress:'',
          uaId:0,
          uaPhone:'',
          uaSigner:''
        },
            goods: {
            },
            order: {
                uaId: ''
            },
            addressList:[],
            uId:localStorage.getItem("uId"),
            rules: {
               uaId: [
                    { required: true, message: '请选择地址', trigger: 'change' }
               ],
                 name: [
                    { required: true, message: '请输入收件人姓名', trigger: 'blur' }
                    ],
                 number: [
                    { required: true, message: '请输入收件人电话', trigger: 'blur' },
                    //  { min: 11, max: 11, message: '收件人电话是11位', trigger: 'blur' },
                    {validator:checkNumber, trigger: 'blur' }     
                    ],
                    value: [
                        // { required: true, message: '请输入收件人地址', trigger: 'blur' }
                    { required: true, message: '请选择收件人地址', trigger: 'change' }
                    ],
                    DetailAdress: [
                    { required: true, message: '请输入收件人详细地址', trigger: 'blur' }
                    ]
            },
            html:'',                                 
            dialogFormVisible: false,
            dialogFormVisible1: false
        }
    },
    created(){
        this.getAddressData();
        this.goods = this.$route.query
    },
    methods : {
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           
            this.dialogFormVisible1=false;
             
            this.AddArr();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
      },
     async AddArr() {
          
          this.userA.uId=this.uId;
          this.userA.uaSigner=this.ruleForm.name;
          this.userA.uaPhone=this.ruleForm.number.toString();
          this.userA.uaAddress=this.ruleForm.value.join(" ")+" "+this.ruleForm.DetailAdress;
          const params=this.userA;
         this.$confirm('确认添加？')
            .then(_ => {
          myAxios
              .post(`/user/Address/InsertAd/`,params)
              .then(res => {
                   if(res==true){
                        this.$notify.success({
                            title: '成功',
                            message: '添加成功'
                            });
                        this. getAddressData();
                            }
                  
              }).catch(err => {
                  console.log(err);
                  });})
      },
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
                console.log('dd')
                this.$refs[formName].validate((valid) => {
                    console.log('abb')
                    if (valid) {
                        console.log('vv')
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
    //      AddNewAd1(){
    //     this.$router.push({path:'/AddNewAddress'});
    //   },
    }
}
</script>
<style scoped>
.item{
    margin-top:20px;
}
.demo-ruleForm{

  margin-left:78px;
  /* padding-top:50px; */
}
.input{
  /* margin-top:20px; */
  margin-left:30px;
   width:300px;
}
.inputs{
  /* margin-top:20px; */
  margin-left:30px;
  width:300px;
}
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
    float: left;
    margin-top: 50px;
    margin-bottom: 20px !important;
}
.generate-order-add-address{
    float: right; 
    margin-right: 50px;
}
.generate-order-address /deep/ .el-radio__input.is-checked+.el-radio__label {
  color: #DD3035 !important;
}
.generate-order-address /deep/ .el-radio__input.is-checked .el-radio__inner{
border-color: #DD3035 !important;
background: #DD3035 !important;
} 
</style>