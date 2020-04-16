<template>
    <div id="publishedInf">
         <el-card class="publishedInf-card">
             <div class="publishedInf-goods">
                <img :src="publishgoods.goodsMedias.gmUrl" class="publishedInf-goods-img"/>
                <div class="publishedInf-goods-name">{{publishgoods.gName}} </div>
                <div class="publishedInf-goods-price">￥{{publishgoods.gPrice}}</div>
                <div class="publishedInf-button">
                    <el-button type="danger" size="small" class="publishedInf-button-write">编辑</el-button>
                    <el-button type="danger" size="small" class="publishedInf-button-unshelved"> 下架</el-button>
                    <el-button type="danger" size="small" class="publishedInf-button-check" @click="clickLookGoods(publishgoods.gId)"> 查看</el-button>
                </div>
            </div>
         </el-card>
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
export default {
    data(){
        return{

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

        clickLookGoods(gid){
            //alert("111");
             console.log(gid);
             this.$router.push({name:'goodDetail',params: {g_id:gid} });
            // this.$router.push({name:'goodDetail',params:{g_id:'7'}});
            //,params:{typeid}
           
       
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
