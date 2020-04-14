<template>
    <div id="goodSearchInf"  @click="clickGoodInf(item.gid)">
       <el-card class="goodSearchInf-card" v-for="item in recommendGoods" :key="item">
            <img :src="item.goodsMedias.gmUrl" class="goodSearchInf-card-img"/>
            <div class="goodSearchInf-card-name">{{item.gName}} </div>
            <div class="goodSearchInf-card-price">￥{{item.gPrice}}</div>
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
            recommendGoods:[],
        }
    },
     methods:{
        clickGoodInf(){
            // console.log("lll");
            // alert("拉拉");
            
            this.$router.push({name:'goodDetail' });
            //,params:{typeid}
           
        },
        async geRecommendGoods() {//获取推荐商品
          var that=this;
            myAxios
                 .get(`/goods/goods/findRecommendGoods`)
               // .get('http://localhost:10010/api/goods/category2/findAllGoodsCategry')
                .then(res => {
                        // this.recommendGoodsUrl=res.goodsMedias.gmUrl,
                        // this.recommendGoodsName=res.gName,
                        // this.recommendGoodsPrice=res.gPrice,
                    // console.log(res.goodsMedias.gmUrl);
                    //   console.log(res.gName);
                    //    console.log(res.gPrice);

                //  console.log(res[0]);

                //  that.recommendGoodsUrl=res[0].goodsMedias.gmUrl;
                //  that.recommendGoodsName=res[0].gName;
                //  that.recommendGoodsPrice=res[0].gPrice;

                 that.recommendGoods =res;
                console.log(that.recommendGoods);
                  
                }).catch(err => {
                    console.log(err,'bb');
                    });
        }
  
    },

      created(){
          this.geRecommendGoods();
    }
}
</script>
<style scoped>
#goodSearchInf{
    margin-bottom: 25px;
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