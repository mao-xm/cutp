<template>
    <div id="goodDetail">
       <el-card class="goodDetail-card">
           <el-row class="goodDetail-user">
                <el-avatar :src="user.uAvatar" class="goodDetail-userphoto"></el-avatar>
                <span class="goodDetail-username">{{user.uName}}</span>
                <el-button type="danger" round size="small" class="goodDetail-usercheck" @click="toMyHome">查看主页</el-button>
          </el-row>
          <el-divider></el-divider>
          <div class="goodDetail-goods">
                <!-- <img src="http://www.xinhuanet.com/photo/2020-03/29/1125784084_15854580346431n.jpg" class="goodDetail-goods-img"/> -->
                <el-carousel :interval="5000" arrow=""  class="goodDetail-goods-img">
                   <el-carousel-item v-for="item in goodMedia" :key="item" >
                      <img :src="item.gmUrl" class="goodDetail-goods-pic">
                    <!-- <iframe :src="item.gmUrl" frameborder='0'
     allow='autoplay;encrypted-media' allowfullscreen style='width:100%;height:500px;'>
     </iframe> -->
                   </el-carousel-item>
                </el-carousel> 
                <div class="goodDetail-goods-name">{{gName}}</div>
                <div class="goodDetail-goods-price">￥{{gPrice}}</div>
                <div class="goodDetail-goodsdetail-title">商品详情:</div>
                <div class="goodDetail-goods-detail">&#12288;&#12288;{{gDetail}}</div>
            </div>
            <div class="goodDetail-button">
                 <!-- <el-button type="danger" size="small" class="goodDetail-button-talk">联系卖家</el-button> -->
                  <el-button type="danger" size="small" class="goodDetail-button-show" v-if="buttonShow=='one'" @click="checkGoodVideo()"> 商品视频</el-button>
                 <el-button type="danger" size="small" class="goodDetail-button-buy" @click="verifyGoodsByGId()"> 立即购买</el-button>
            </div>
       </el-card>

        <el-dialog title="商品视频" :visible.sync="dialogFormVisible">
            <video class="goodDetail-video" controls="controls" autoplay="autoplay" >
                        <source :src="goodVideo" type="video/mp4" />
                    </video> 
        </el-dialog>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
    name: 'goodDetail',
   data () {
      return {
        // picList: [
        // //   {id:0,idView:require('../../assets/goods/housefour.jpg')},
        // //   {id:1,idView:require('../../assets/goods/kouhong.jpg')},
        // //   {id:2,idView:require('../../assets/goods/PcBg1.jpg')}

        //   {id:0,idView:require('../../../assets/goods/housefour.jpg')},
        //   {id:1,idView:require('../../../assets/goods/kouhong.jpg')},
        //   {id:2,idView:require('../../../assets/goods/PcBg1.jpg')}

        // ],
        dialogFormVisible: false,
        buttonShow:'two',
        goods:{
            gId:5
        },
        user:{
            uName:'',
            uId:'',
            uAvatar:'',
        },
        gName:'',
        gPrice:'',
        gDetail:'',
        goodMedia:[],
        goodVideo:'',
        g_id:this.$route.params.g_id,
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
        },
        toMyHome(){
           this.$router.push({name:"MyHomeIndex"});
        },
     //显示商品详情信息
        async GoodDetails(g_id) {
            console.log(this.g_id)
             const params = {  g_id: this.g_id }
            myAxios
                .get(`/goods/goods/findGoodsDetail`,params)
                .then(res => {
                        console.log(res,'aa')
                        this. user=res.user,
                        this.gName=res.gName,
                        this. gPrice=res.gPrice,
                        this.gDetail=res.gDetail
                  
                        for (let item of res.goodsMedias) {
                            console.log(item)
                            if(item.gmType == 0){
                                console.log("0")
                                console.log(item)
                                this.goodMedia.push(item)
                                this.buttonShow='two'
                            }else if(item.gmType == 1){
                                   console.log("1")
                                   console.log(item)
                                   this.goodVideo=item.gmUrl
                                   this.buttonShow='one' 
                            }else{
                                this.buttonShow='two'
                            }
                        }
                   

                           
                }).catch(err => {
                    console.log(err,'bb');
                    });
        },
        
        checkGoodVideo(){//点击显示商品视频
            this.dialogFormVisible = true

        }
    },
      created(){
          this.GoodDetails(this.g_id);
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
    margin-left: 140px;
    position: relative;
}
.goodDetail-goods-img{
    width: 35%;
    height: 120%;
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
    font-size: 25px;
    left: 70px;
    color: red;
    position: relative;
    float: left;
}
.goodDetail-goodsdetail-title{
    width: 40%;
    position: relative;
     left: 50px;
    float: left;
     padding-top: 10px;
      font-size: 20px;
    font-weight:540;
}
.goodDetail-goods-detail{
      width:35%;
      margin-left: 70px;
      /* left: 50px;
      position: relative; */
      float: left;
      padding-top: 10px;

}
.goodDetail-button{
    margin-left: 800px;
}
.goodDetail-video{
    width: 400px;
    height: 450px;
    margin-left: 100px;
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