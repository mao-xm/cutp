<template>
    <div id="unshelvedInf">
         <el-card class="unshelvedInf-card">
             <div class="unshelvedInf-goods">
                <img :src="unshelvedgoods.goodsMedias.gmUrl" class="unshelvedInf-goods-img"/>
                <div class="unshelvedInf-goods-name">{{unshelvedgoods.gName}} </div>
                <div class="unshelvedInf-goods-price">￥{{unshelvedgoods.gPrice}}</div>
                <div class="unshelvedInf-goods-unshelvedReason">{{unshelvedgoods.unshelveGoods.unReason}}</div>
                <div class="unshelvedInf-button">
                    <el-button type="danger" size="small" class="unshelvedInf-button-reset" @click="clickDeleteUnshelvedGoods(unshelvedgoods.gId)">重新发布</el-button>
                    <el-button type="danger" size="small" class="unshelvedInf-button-delete" @click="clickDeleteGoods(unshelvedgoods.gId)"> 删除</el-button>
                    <el-button type="danger" size="small" class="unshelvedInf-button-check" @click="clickLookUnshelvedGoods(unshelvedgoods.gId)"> 查看</el-button>
                </div>
            </div>
         </el-card>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
       data(){
        return{
             u_id:localStorage.getItem("uId"),
            flagDeleteUnshelve:false,
            flagDeleteGoods:false,
        }
       },
    props:{
             unshelvedgoods:Object
            },
    methods:{

        clickLookUnshelvedGoods(gid){
            //alert("111");
             console.log(gid);
             this.$router.push({name:'goodDetail',params: {g_id:gid} });
            // this.$router.push({name:'goodDetail',params:{g_id:'7'}});
            //,params:{typeid}
      },
       clickDeleteUnshelvedGoods(gid){//根据gid对下架商品重新上架
           console.log(gid)
         //  console.log(this.unshelvedgoods.gId)
           this.$confirm('确定重新上架此宝贝么？')
            .then(_ => {
                        if(this.unshelvedgoods.gId!=''){
                              console.log(gid)
                            //  console.log(this.unshelvedgoods.gId)
                            myAxios
                                .post(`/goods/goods/deleteUnshelveGoods/${gid}`)
                                  .then(res => {
                                     if(res){
                                        console.log(res)
                                        this.flagDeleteUnshelve=res;
                                        console.log(this.flagDeleteUnshelve);
                                        if(this.flagDeleteUnshelve==true){
                                            this.$message({
                                            message: '重新上架成功！',
                                            type: 'success'
                                            });
                                             this.$parent.getUnshelvedGoodsByuId(this.u_id);
                                        // this.$router.push({name:'myPublishedIndex'});
                                        }else{
                                            this.$message.error('重新上架失败，请重新操作！');
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
    

     clickDeleteGoods(gid){//根据gid对下架商品进行删除
          console.log(gid)
                  console.log(this.unshelvedgoods.gId)
                this.$confirm('确定删除宝贝么？')
                    .then(_ => {
                        if(gid!=''){
                            console.log(gid)
                            console.log(this.unshelvedgoods.gId)
                            myAxios
                                .post(`/goods/goods/deleteGoodsByGId/${gid}`)
                                .then(res => {
                                    if(res){
                                        console.log(res)
                                        this.flagDeleteGoods=res;
                                        console.log(this.flagDeleteGoods);
                                        if(this.flagDeleteGoods==true){
                                            this.$message({
                                            message: '删除成功！',
                                            type: 'success'
                                            });
                                             this.$parent.getUnshelvedGoodsByuId(this.u_id);
                                        // this.$router.push({name:'myPublishedIndex'});
                                        }else{
                                            this.$message.error('删除失败，请重新操作！');
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
    }   
    
}
</script>

<style scoped>
#unshelvedInf{
    width:70%;
    margin-left: 150px;
    margin-top: 5px;
}
.unshelvedInf-goods{
     width:95%;
    height: 180px;
    position: relative;
    margin-left: 70px;
}
.unshelvedInf-goods-img{
    width: 33%;
    height: 100%;
    position: relative;
    float: left;
}
.unshelvedInf-goods-name{
    width: 50%;
    font-size: 30px;
    position: relative;
    left: 50px;
    float: left;
}
.unshelvedInf-goods-price{
    width: 50%;
    font-size: 20px;
    left: 50px;
    color: red;
    margin-top: 5px;
    position: relative;
    float: left;
}
.unshelvedInf-goods-unshelvedReason{
    width: 50%;
    font-size: 15px;
    left: 50px;
    margin-top: 5px;
    color: gray;
    position: relative;
    float: left;
}
.unshelvedInf-button{
    width: 50%;
    position: relative;
    left: 50px;
    float: left;
    margin-top: 43px;
    margin-left: 50px;
}
.unshelvedInf-button-delete{
    margin-left: 30px;
}
.unshelvedInf-button-check{
    margin-left: 30px;
}
</style>
