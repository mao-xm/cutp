<template>
    <div id="mySale">

        <el-row class="mySale-row">
            <el-col  class="mySale-colone">
                <el-menu
                    default-active="2"
                    class="mySale-menu"
                    @open="handleOpen"
                    @close="handleClose">
                
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                         <router-link to="/mySale/publishIndex" tag="span" > 我的发布</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-document"></i>
                        <span slot="title">卖出宝贝</span>
                    </el-menu-item>
                
                </el-menu>
            </el-col>
            <el-col  class="mySale-coltwo">
                <el-card class="mySale-card">
                
                   <router-view></router-view>
            
                </el-card>
            </el-col>
        </el-row>

        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#mySale{

    width: 100%;
    height: 100%;
    position: relative;
}
.mySale-row{
    /* width: 130px !important;
    height: 120px;
    padding-top: 230px ; 
    font-size: 4px !important; */
    width:100%;
    height: 500px;
}
.mySale-colone{
   /* width: 10%; */
   height:100% ;
   width: 10%;
  
   
}
.mySale-coltwo{
    /* width: 90%; */
   height:50px ;
    width: 90%;
}
.mySale-menu{
    position: relative;
    padding-top: 150px;
}
.mySale-card{
    width: 96%;
    height: 550px;
    margin: 20px auto;
}
.el-menu{
    border-right:none;
}
.el-menu-item{
     font-size: 10px
}
.el-menu-item.is-active{
    color:#DD3035;
}
.el-col-12{
    width: 130px;
    /* color:#DD3035; */
}
</style>