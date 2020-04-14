<template>
  <div id="home">
      <!-- 轮播图 -->
      <el-carousel :interval="5000" arrow="" height="400px" width="1100px">
        <el-carousel-item v-for="item in picList" :key="item" >
           <img :src="item.idView" class="home-pic" @click="clickHomePic(item.id,item.typeName)">
        </el-carousel-item>
      </el-carousel> 
      <!-- 商品类别+搜索 -->
      <div id="home-search-goodtype">
          <el-card class="home-search-goodtype-card">
              <el-row class="home-search">
                <el-input placeholder="请输入搜索内容" 
                          prefix-icon="el-icon-search" 
                          clearable v-model="goodSearchInput"
                          class="home-search-input">
                          {{goodSearchInput}}
                </el-input>
                <el-button type="danger" round size="small" class="home-search-button" 
                     @click="clickSearchButton(goodSearchInput)">搜索</el-button>
             </el-row>
                <div id="home-goodtype">
                  <homeTypeInf></homeTypeInf> 
                </div>
          </el-card>
      </div>
      <!-- 今日推荐 -->
      <div id="home-daily-recommend">
         <el-card class="home--daily-recommend-card">
            <div id="home-daily-recommend-title">
               <i class="iconfontType icon-jinrituijian" id="home-daily-recommend-icon"></i> 
                今日推荐
            </div>
            <div id="home-daily-recommend-good">
                <goodSearchInf ></goodSearchInf>
            </div>
        
         </el-card>
      </div>
      <!-- 底部 -->
      <div id="home-bottom">
        
      </div>
  </div>
</template>
<script>
import homeTypeInf from '@/views/good/home/HomeTypeInf'
import goodSearchInf from '@/views/good/goodSearch/GoodSearchInf'
export default {
  name: 'Home',
   data () {
      return {
        goodSearchInput:'',
        picList: [
          {id:11,typeName:"家居",idView:require('../../../assets/goods/housefour.jpg')},
          {id:8,typeName:"美妆",idView:require('../../../assets/goods/kouhong.jpg')},
          {id:1,typeName:"女装",idView:require('../../../assets/goods/PcBg1.jpg')},
          {id:12,typeName:"玩具",idView:require('../../../assets/goods/toyfive.jpg')},
          {id:14,typeName:"园艺",idView:require('../../../assets/goods/penzai2.jpg')}
          ]
        }
        
   },
  methods: {
    // 点击轮播图跳入按图片类别搜索的结果页面
        clickHomePic(typeid,typeName){
            alert("点击轮播图"+typeid,typeName);
            console.log(typeid);
             this.$router.push({name:'goodSearch',params:{typeid,typeName}});
        },
        clickSearchButton(search){
           alert("点击搜索"+search);
           this.$router.push({name:'goodSearch',params:{search}});
        },

        //    async geRecommendGoods() {//获取推荐商品
        //   var that=this;
        //     myAxios
        //          .get(`/goods/goods/findRecommendGoods`)
        //        // .get('http://localhost:10010/api/goods/category2/findAllGoodsCategry')
        //         .then(res => {
        //              console.log(res);
        //         }).catch(err => {
        //             console.log(err,'bb');
        //             });
        // }

    },
   components:{
       homeTypeInf,goodSearchInf
    },
    //    created(){
    //       this.geRecommendGoods();
    // }
}
</script>
<style scoped>

#home{
  height: 500px;
  width: 1100px;
  margin-top: 10px;
   position: relative;
   margin-left: 90px;
   /* margin-bottom: 20px; */
}
.home-pic{
    /* max-width: 100%;
    max-height: 100%; */
    height: 100%;
    width: 100%;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .home-search{
    margin-top: 20px;
  }
  .home-search-input{
    /* float:left; */
    height:30px;
    width: 80%;
    margin-left: 60px;
}
  #home /deep/ .el-input__inner{
    
    width: 95% !important;
     position: relative;

  }
.home-search-button{
    position: relative;
    /* float: left; */
    height: 37px;
     width: 8%;
  }
  .home-search-goodtype-card{
    width: 100%;
   margin-top: 30px; 
    
}
  #home-goodtype{
      margin-top: 30px;  
    width: 90%;
    height: 270px;

  }
  #home-daily-recommend{
    width: 100%;
    height: 135%;
    margin-bottom: 40px;
  }
  .home--daily-recommend-card{
    width: 100%;
    margin-top: 15px; 

  }
  #home-daily-recommend-title{
    width: 100%;
    height: 100%;
  }
  #home-daily-recommend-icon{
    font-size:22px;
    color: #dd3035;
  }
#home-daily-recommend-good{
    width: 100%;
    height: 560px;
    margin-top: 20px;
    /* padding-bottom: 20px; */
}

#home-bottom{
  /* margin-top: 30px; */
  width: 100%;
  height: 20px;
}
</style>