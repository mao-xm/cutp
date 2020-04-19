<template>
    <div id="publishedInf">
         <el-card class="publishedInf-card">
             <div class="publishedInf-goods">
                <img :src="publishgoods.goodsMedias.gmUrl" class="publishedInf-goods-img"/>
                <div class="publishedInf-goods-name">{{publishgoods.gName}} </div>
                <div class="publishedInf-goods-price">￥{{publishgoods.gPrice}}</div>
                <div class="publishedInf-button">
                    <el-button type="danger" size="small" class="publishedInf-button-write" @click="changePrice()">修改价格</el-button>
                    <el-button type="danger" size="small" class="publishedInf-button-unshelved" @click="clickUnshelvedGoods(publishgoods.gId)"> 下架</el-button>
                    <el-button type="danger" size="small" class="publishedInf-button-check" @click="clickLookGoods(publishgoods.gId)"> 查看</el-button>
                </div>
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
         <div id="publishedInf-page">
            <!-- <el-pagination background layout="prev, pager, next" 
                 :total="totalnum" :page-size="pageSizeNum"
                 @current-change="handleCurrentChange" 
                 @size-change="handleSizeChange"
                 style="margin:0px auto;">
            </el-pagination> -->
         </div>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
    data(){
        return{
             u_id:1,
           dialogFormVisible: false,
             form:{},
             //gid:publishgoods.gId,
             flag:false,
             flagUnshelve:false,
             rules: {
               gPrice: [
                    { required: true, message: '请填写新价格', trigger: 'change' }
               ],
            },
           // pageSizeNum: 3,
           // currentPage:1,
          //  totalnum:5,
          //  disp:false
        }
    },
    props:{
             publishgoods:Object
            },
    methods:{
         changePrice(){//点击降价，显示对话框
            this.dialogFormVisible = true
        },
        clickLookGoods(gid){//根据gid查询商品详情
            //alert("111");
             console.log(gid);
             this.$router.push({name:'goodDetail',params: {g_id:gid} });
            // this.$router.push({name:'goodDetail',params:{g_id:'7'}});
            //,params:{typeid}
      },
        clickUnshelvedGoods(gid){//根据gid对该商品进行下架
           console.log(gid)
           console.log(this.publishgoods.gId)
           this.$confirm('确定下架此宝贝么？')
            .then(_ => {

                        if(this.publishgoods.gId!=''){
                              console.log(gid)
                              console.log(this.publishgoods.gId)
                            myAxios
                                .post(`/goods/goods/unshelveGoods/${gid}`)
                                .then(res => {
                                    if(res){
                                        console.log(res)
                                        this.flagUnshelve=res;
                                        console.log(this.flagUnshelve);
                                  if(this.flagUnshelve==true){
                                    this.$message({
                                      message: '下架成功！',
                                      type: 'success'
                                    });
                                     this.$parent.getGoodsByuId(this.u_id);
                                 // this.$router.push({name:'myPublishedIndex'});
                                  }else{
                                     this.$message.error('下架失败，请重新操作！');
                                  }
                                 }
                                }).catch(err => {
                                    this.$notify.error
                                    ({
                                        title: '失败',
                                        message: err
                                    });
                                });
                        }
                    } )
              
            .catch(_ => {

                });
        },
    
    
        async updateGoodsPrice(formName){
            console.log("formName")
            console.log(this.form)
             console.log(this.publishgoods.gId)
            this.$confirm('确认修改价格？')
            .then(_ => {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(this.form.gPrice != ''){
                             console.log("yes")
                               console.log(this.form)
                               console.log(this.publishgoods.gId)
                            //  const params = { gid: this.publishgoods.gId,gprice: this.form.gPrice }
                            //   console.log(params)
                            myAxios
                                .post(`/goods/goods/updateGoodPrice/${this.publishgoods.gId}/${this.form.gPrice}`)
                                .then(res => {
                                    if(res){
                                        console.log(res)
                                          this.flag=res;
                                        console.log(this.flag);
                                  if(this.flag==true){
                                    this.$message({
                                      message: '修改成功！',
                                      type: 'success'
                                    });
                                    this.$parent.getGoodsByuId(this.u_id);
                                 // this.$router.push({name:'myPublishedIndex'});
                                  }else{
                                     this.$message.error('修改失败，请重新操作！');
                                  }
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
        },
    }
    
}
</script>

<style scoped>
#publishedInf{
    width:70%;
    margin-left: 150px;
    margin-top: 7px;
}
.publishedInf-card{
    float: left;
    margin-bottom: 7px;
}
.publishedInf-goods{
    width:95%;
    height: 180px;
    position: relative;
    margin-left: 70px;
}
.publishedInf-goods-img{
    width: 33%;
    height: 100%;
    position: relative;
    float: left;
}
.publishedInf-goods-name{
    width: 50%;
    font-size: 28px;
    position: relative;
    margin-top: 7px;
    left: 50px;
    float: left;
}
.publishedInf-goods-price{
    width: 50%;
    font-size: 20px;
    left: 50px;
    color: red;
    margin-top: 5px;
    position: relative;
    float: left;
}
.publishedInf-button{
    width: 50%;
    position: relative;
    left: 50px;
    float: left;
    margin-top: 65px;
    margin-left: 65px;
}
.publishedInf-button-unshelved{
    margin-left: 30px;
}
.publishedInf-button-check{
    margin-left: 30px;
}
#publishedInf-page /deep/.el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color:#F56C6C;
}

</style>
