<template>
   <div id="MyHomeIndex">
       <div class="MyHomeIndex-circle">
            <div class="block">
                    <el-avatar :size="60" :src="circleUrl"></el-avatar>
            </div>
            <div id="info">
                    <div id="info1">
                        <span id="name">用户名</span>
                        <!-- <i class="el-icon-male"></i> -->
                        <i class="el-icon-female"></i>
                    </div>
                    <div id="info2">
                        <span id="age">年龄</span>
                        <span id="hobby">爱好</span>
                    </div>
                    <div id="info3">
                    <span id="address">所在地址</span>
                    </div>
            </div>
            
        </div> 
     
            
      
        <div id="card">
         
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="tab">
            <el-tab-pane label="地址管理" name="1" class="first" >
                <ul id="ul1" >
                     <li v-for="(ig,i) in 3" :key="i"><AddressManager></AddressManager></li>
                </ul>
              <el-button type="danger" id="add" size="small" @click="AddNewAd">添加新地址</el-button>
            </el-tab-pane>
            <el-tab-pane label="编辑资料" name="2"><EditInfo></EditInfo></el-tab-pane>
            <el-tab-pane label="评价" name="3">
                <ul id="ul2">
                     <li v-for="(ig,i) in 3" :key="i"><evModel></evModel></li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="我的评价" name="4">
                 <ul id="ul3">
                     <li v-for="(ig,i) in 3" :key="i"><myEvModel></myEvModel></li>
                </ul></el-tab-pane>
            </el-tabs>
            <div v-if="tf">
            <el-pagination
                    small
                    layout="prev, pager, next"
                    @current-change="changePage"
                    @prev-click="changePage"
                    @next-click="changePage"
                    :page-size="pagination.size"
                    :current-page.sync="pagination.currentPage"
                    :total="pagination.total" class="el-pagination">
            </el-pagination>
            </div>
        </div>
    </div> 
</template>
<script>
import AddressManager from'@/views/user/MyHome/Address/AddressManager'
import evModel from'@/views/evaluate/evMyev/evModel'
import myEvModel from'@/views/evaluate/evMyev/myEvModel'
import EditInfo from'@/views/user/MyHome/Edit/EditInfo'
import myAxios from "@/utils/myAxios";
export default {
  name:'MyHomeIndex',
  data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        activeName:'1',
        pagination:{
                total: 10,
                size: 3,
                currentPage:1
          },
          tf:false
      }
    },
    methods: {
      handleClick(tab, event) {
         var type= tab.name;
         if(type=='3'||type=='4')
         {
             this.tf=true;
         }
         else{
             this.tf=false;
         }
        console.log(tab, event);
      },
      AddNewAd(){
        this.$router.push({path:'/AddNewAddress'});
      },
       changePage(){
          
   
       },
    },
    components:{
      AddressManager:AddressManager,
      evModel:evModel,
      EditInfo:EditInfo,
      myEvModel:myEvModel
    }
}
</script>
<style scoped>
#MyHomeIndex{
    margin:30px auto;
    width:800px;
    /* height:1000px; */
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.block,#info{
    float:left;
}
#name{
    font-size:19px;
}
#age,#hobby,#address{
    font-size:11px;
}   
#hobby{
    margin-left:10px;
}
#info1,#info2,#info3{
    margin-top:7px;
    margin-left:9px;
}
.block{
    margin-top:20px;
    margin-left:20px;
}
#info{
    margin-top:7px;
}
.tab{
    margin-left:20px;
   padding-top:107px;
   width:782px;
}
/* .tab{
  
   
} */

/* #card{
    position:absolute;
    top:191px;
    width:602px;
    left:324px;
    border:1px solid #E4E7ED;
} */
#ul1 li{
    list-style:none;
    margin-top:50px;
}
#ul1{
    margin-top:70px;
}
#add{
    margin-left:556px;
    margin-top:72px;
}
#ul2,#ul3 li{
    list-style:none;
}
#ul3{
    margin-top:50px;
}
#ul3 li{
    margin-top:50px;
}
#ul2{
    margin-top:50px;
}
#ul2 li{
    margin-top:0px;
}
.el-pagination{
    margin-left:315px;
}
</style>