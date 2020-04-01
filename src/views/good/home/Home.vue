<template>
  <div id="home">
   
      <el-carousel :interval="5000" arrow="" height="400px" width="1100px">
        <el-carousel-item v-for="item in picList" :key="item" >
           <img :src="item.idView" class="home-pic">
        </el-carousel-item>
      </el-carousel> 
      <div id="home-search-goodtype">
          <el-card class="home-search-goodtype-card">
              <el-row class="home-search">
                <el-input placeholder="请输入搜索内容" 
                          prefix-icon="el-icon-search" 
                          clearable v-model="goodSearchInput"
                          class="home-search-input">
                </el-input>
                <el-button type="danger" round size="small" class="home-search-button">搜索</el-button>
             </el-row>
                <div id="home-goodtype">
                  <homeTypeInf></homeTypeInf> 
                </div>
          </el-card>
      </div>
      <div id="home-daily-recommend">
         <el-card class="home--daily-recommend-card">
            <div id="home-daily-recommend-title">
               <i class="iconfontType icon-jinrituijian" id="home-daily-recommend-icon"></i> 
                今日推荐
            </div>
            <div id="home-daily-recommend-good">
                <goodSearchInf v-for="item in 8" :key="item" ></goodSearchInf>
            </div>
         </el-card>
      </div>
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
        goodSearch:'',
        picList: [
          {id:0,idView:require('../../../assets/goods/housefour.jpg')},
          {id:1,idView:require('../../../assets/goods/kouhong.jpg')},
          {id:2,idView:require('../../../assets/goods/PcBg1.jpg')},
          {id:3,idView:require('../../../assets/goods/toytwo.jpg')},
          {id:4,idView:require('../../../assets/goods/toyfive.jpg')}
        ]
        }
        
   },
   components:{
       homeTypeInf,goodSearchInf
    }
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
    height: 100%;
    margin-bottom: 50px;
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
    height: 100%;
    margin-top: 20px;
}
#home-bottom{
  /* margin-top: 30px; */
  width: 100%;
  height: 20px;
}
</style>