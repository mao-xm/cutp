<template>
    <div id="unshelvedInf">
         <el-card class="unshelvedInf-card">
             <div class="unshelvedInf-goods">
                <img :src="unshelvedgoods.goodsMedias.gmUrl" class="unshelvedInf-goods-img"/>
                <div class="unshelvedInf-goods-name">{{unshelvedgoods.gName}} </div>
                <div class="unshelvedInf-goods-price">￥{{unshelvedgoods.gPrice}}</div>
                <div class="unshelvedInf-goods-unshelvedReason">{{unshelvedgoods.unshelveGoods.unReason}}</div>
                <div class="unshelvedInf-button">
                    <el-button type="danger" size="small" class="unshelvedInf-button-reset">重新发布</el-button>
                    <el-button type="danger" size="small" class="unshelvedInf-button-delete"> 删除</el-button>
                    <el-button type="danger" size="small" class="unshelvedInf-button-check" @click="clickLookUnshelvedGoods(unshelvedgoods.gId)"> 查看</el-button>
                </div>
            </div>
         </el-card>
    </div>
</template>
<script>
export default {
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
