<template>
    <div id="goodDetail">
       <el-card class="goodDetail-card">
           <el-row class="goodDetail-user">
                <el-avatar src="http://www.xinhuanet.com/photo/2020-03/29/1125784084_15854580346431n.jpg" class="goodDetail-userphoto"></el-avatar>
                <span class="goodDetail-username">用户名</span>
                <el-button type="danger" round size="small" class="goodDetail-usercheck">查看主页</el-button>
          </el-row>
          <el-divider></el-divider>
          <div class="goodDetail-goods">
                <!-- <img src="http://www.xinhuanet.com/photo/2020-03/29/1125784084_15854580346431n.jpg" class="goodDetail-goods-img"/> -->
                <el-carousel :interval="5000" arrow=""  class="goodDetail-goods-img">
                   <el-carousel-item v-for="item in picList" :key="item" >
                      <img :src="item.idView" class="goodDetail-goods-pic">
                   </el-carousel-item>
                </el-carousel> 
                <div class="goodDetail-goods-name">商品名</div>
                <div class="goodDetail-goods-price">￥50.20</div>
                <div class="goodDetail-goods-detail">商品详情</div>
            </div>

            <div class="goodDetail-button">
                 <el-button type="danger" size="small" class="goodDetail-button-talk">联系卖家</el-button>
                 <el-button type="danger" size="small" class="goodDetail-button-buy" @click="verifyGoodsByGId()"> 立即购买</el-button>
            </div>
       </el-card>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
    name: 'goodDetail',
   data () {
      return {
        picList: [
        //   {id:0,idView:require('../../assets/goods/housefour.jpg')},
        //   {id:1,idView:require('../../assets/goods/kouhong.jpg')},
        //   {id:2,idView:require('../../assets/goods/PcBg1.jpg')}

          {id:0,idView:require('../../../assets/goods/housefour.jpg')},
          {id:1,idView:require('../../../assets/goods/kouhong.jpg')},
          {id:2,idView:require('../../../assets/goods/PcBg1.jpg')}

        ],
        goods:{
            gId:1
        }
      }
   },
   methods:{
        /**
        * 获取商品信息
        */
        async verifyGoodsByGId() {
            myAxios
                .get(`/order/oGoods/verifyGoodsByGId/${this.goods.gId}`)
                .then(res => {
                    console.log(res,'aa')
                    this.goods = res
                    console.log(this.goods.goodsMedias)
                    if(this.goods.goodsMedias){
                        console.log(this.goods.goodsMedias)
                        for (let item of this.goods.goodsMedias) {
                            console.log(item)
                            if(item.gmType == 0){
                                console.log(item)
                                this.$set(this.goods,'gImg',item.gmUrl)
                                break
                            }
                        }
                    }
                    const query = this.goods
                    this.$router.push({path:'/generateOrder',query})
                }).catch(err => {
                    console.log(err,'bb');
                    });
        }
    }
}
</script>
<style scoped>
.goodDetail-card{
    width: 90%;
    margin-left: 60px;
    margin-top: 30px;
}
.goodDetail-user{
    width: 100%;
    height: 40px;
    position: relative;
     vertical-align: middle;
     margin-left: 30px;
}
.goodDetail-user{
    vertical-align:bottom/middle;
}
.goodDetail-username{
    padding-top: 0px;
    padding-left: 30px;
}
.goodDetail-usercheck{
   margin-left: 40px;
}

.goodDetail-goods{
    width: 100%;
    height: 300px;
    margin-top:20px;
    margin-left: 130px;
    position: relative;
}
.goodDetail-goods-img{
    width: 40%;
    height: 100%;
    position: relative;
    float: left;
}
.goodDetail-goods-name{
    width: 50%;
    font-size: 40px;
    position: relative;
    left: 50px;
    float: left;
}
.goodDetail-goods-price{
    width: 50%;
    font-size: 20px;
    left: 100px;
    color: red;
    position: relative;
    float: left;
}
.goodDetail-goods-detail{
      width: 50%;
      left: 50px;
      position: relative;
      float: left;
      padding-top: 10px;

}
.goodDetail-button{
    margin-left: 800px;
}
.goodDetail-button-buy{
    margin-left:50px;
}
.goodDetail-goods-pic{
    /* max-width: 100%;
    max-height: 100%; */
    height: 100%;
    width: 100%;
}
</style>