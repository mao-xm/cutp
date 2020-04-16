<template>
    <div id="goodSearchInf" >
       <el-card class="goodSearchInf-card" >
           <div id="goodSearchInf-card-div" @click="clickGoodInf(goods.gId)">
                <img :src="goods.goodsMedias.gmUrl" class="goodSearchInf-card-img"/>
                <div class="goodSearchInf-card-name">{{goods.gName}} </div>
                <div class="goodSearchInf-card-price">￥{{goods.gPrice}}</div>
           </div>
       </el-card>

    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";

export default {
     name:'goodSearchInf',
     data() {
        return {
            recommendGoodsUrl:'',
            recommendGoodsName:'',
            recommendGoodsPrice:'',
            //recommendGoods:[],
           
        }
    },
     props:{
                goods:Object
            },
     methods:{
        clickGoodInf(gid){
            //alert("111");
             console.log(gid);
             this.$router.push({name:'goodDetail',params: {g_id:gid} });
            // this.$router.push({name:'goodDetail',params:{g_id:'7'}});
            //,params:{typeid}
           
        },
        
  
    },

    //   created(){
    //       this.geRecommendGoods();
          
    // }
}
</script>
<style scoped>
#goodSearchInf{
    margin-bottom: 25px;
}
#goodSearchInf-card-div{
    width: 100%;
    height: 100%;
}
.goodSearchInf-card{
    width: 20%;
    height: 100%;
    position: relative;
    margin-left: 40px;
    float: left;
    margin-bottom: 20px;
}

.goodSearchInf-card-img{
    width: 100%;
    height: 170px;
    position: relative;
}
.goodSearchInf-card-name{
    width: 90%;
    font-size: 18px;
    position: relative;
    margin-top:4px;
    /* left: 50px; */
}
.goodSearchInf-card-price{
    width: 50%;
    font-size: 15px;
    /* left: 58px; */
    color: red;
    position: relative;
}
</style>