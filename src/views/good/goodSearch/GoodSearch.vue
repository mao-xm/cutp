<template>
    <div id="goodSearch">
         <el-card class="goodSearch-card">
             <div id="goodSearch-div">
                <el-row class="goodSearch-search">
                    <!-- <el-input placeholder="请输入搜索内容"  clearable v-model="goodSearchInput">
                        <i slot="prefix" class="el-input__icon el-icon-search" id="goodSearch-search-pic"></i>
                    </el-input> -->
                    <el-input placeholder="请输入搜索内容" 
                            prefix-icon="el-icon-search" 
                            clearable v-model="goodSearchInput"
                            class="goodSearch-search-input">
                            {{goodSearchInput}}
                    </el-input>
                    <el-button type="danger" round size="small" class="goodSearch-search-button">搜索</el-button>
                </el-row>
                <div id="goodSearch-Inf">
                    <goodSearchInf v-for="item in goodByType" :key="item" :goods="item"></goodSearchInf>
                </div>
             </div>
         </el-card>
    </div>
</template>
<script>
import goodSearchInf from '@/views/good/goodSearch/GoodSearchInf';
import myAxios from "@/utils/myAxios";
export default {
     name: 'goodSearch',
   data () {
        return {
            goodSearchInput:this.$route.params.g_detail||this.$route.params.typeName,
            ca1_id:this.$route.params.typeid,
            flag:this.$route.params.flag,
            goodByType:[],
        }
   },
    methods: {
        // clickGoodInf(){
        //     console.log("lll");
        //     alert("拉拉");
        // }
        async getGoodsByType(ca1_id) {//按类别查询商品
          var that=this;
           const params = {  ca1_id: this.ca1_id }
           console.log(params)
            myAxios
                 .get(`/goods/goods/findGoodsByType`,params)
               // .get('http://localhost:10010/api/goods/category2/findAllGoodsCategry')
                .then(res => {
                    
                console.log(res);
                  this.goodByType=res;
                }).catch(err => {
                    console.log(err,'bb');
                    });
        },

        async getGoodsByDetail(goodSearchInput) {//按搜索内容查询商品
           var that=this;
           const params = { g_detail: this.goodSearchInput }
           console.log(params)
            myAxios
                 .get(`/goods/goods/findGoodsByDetail`,params)
                 .then(res => {
                    
                 console.log(res);
                 this.goodByType=res;
                }).catch(err => {
                    console.log(err,'bb');
                    });
        }
    },
created(){
          console.log('flag'+this.flag);
          if(this.flag=='one'){
              console.log("one");
              console.log(this.goodSearchInput);
              this.getGoodsByDetail(this.goodSearchInput);
              console.log(this.goodSearchInput);
          }
          else if(this.flag=='two'){
               console.log("two");
               this.getGoodsByType(this.ca1_id);
          }
          else{
               this.$message.error('操作有误，请重新操作！');
          }
    },
   components:{
       goodSearchInf
    }
}
</script>
<style scoped>
.goodSearch-card{
    width: 80%;
    margin-left: 130px;
    margin-top: 20px;
}
/* .goodSearch-search{
    text-align: center;
} */

.goodSearch-search-input{
    /* float:left; */
    height:30px;
    width: 80%;
    margin-left: 60px;
}
.goodSearch-search /deep/ .el-input__inner{
    
    width: 95% !important;
     position: relative;

  }
.goodSearch-search-button{
    position: relative;
    /* float: left; */
    height: 37px;
     width: 8%;
  }
#goodSearch-Inf{
     margin-top:30px ;
     width: 100%;
  }
  #goodSearch-div{
      margin-bottom: 30px;
  }
</style>