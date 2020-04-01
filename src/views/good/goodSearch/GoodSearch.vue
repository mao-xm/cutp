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
                    </el-input>
                    <el-button type="danger" round size="small" class="goodSearch-search-button">搜索</el-button>
                </el-row>
                <div id="goodSearch-Inf">
                    <goodSearchInf v-for="item in 4" :key="item" ></goodSearchInf>
                </div>
             </div>
         </el-card>
    </div>
</template>
<script>
import goodSearchInf from '@/views/good/goodSearch/GoodSearchInf'
export default {
     name: 'goodSearch',
   data () {
        return {
            goodSearchInput:'',
        }
   },
    // methods: {
    //     clickGoodInf(){
    //         console.log("lll");
    //         alert("拉拉");
    //     }
    // },

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