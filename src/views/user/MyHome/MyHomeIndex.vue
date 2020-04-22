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
            <el-tab-pane label="地址管理" name="first" class="first" >
                <el-button type="danger" id="add" size="small" @click="AddNewAd">添加新地址</el-button>
                <ul >
                     <li v-for="(ig,i) in 3" :key="i"><AddressManager></AddressManager></li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="编辑资料" name="second"><EditInfo></EditInfo></el-tab-pane>
            <el-tab-pane label="评价" name="third">
                <ul >
                     <li v-for="(ig,i) in 1" :key="i"><evModel></evModel></li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="我的评价" name="fourth"></el-tab-pane>
        </el-tabs>  
        </div>
    </div> 
</template>
<script>
import AddressManager from'@/views/user/MyHome/Address/AddressManager'
import evModel from'@/views/evaluate/evMyev/evModel'
import EditInfo from'@/views/user/MyHome/Edit/EditInfo'
import myAxios from "@/utils/myAxios";
export default {
  name:'MyHomeIndex',
  data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      AddNewAd(){
        this.$router.push({path:'/AddNewAddress'});
      }
    },
    components:{
      AddressManager:AddressManager,
      evModel:evModel,
      EditInfo:EditInfo
    }
}
</script>
<style scoped>
#MyHomeIndex{
    margin:30px auto;
    width:800px;
    height:1000px;
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
    margin-left:0px;
   padding-top:107px;
   width:801px;
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
ul li{
    list-style:none;
    margin-top:30px;
}
ul{
    margin-top:30px;
}
#add{
    margin-left:95px;
    margin-top:72px;
}
</style>