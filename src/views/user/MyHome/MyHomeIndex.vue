<template>
   <div id="MyHomeIndex">
       <div class="MyHomeIndex-circle">
            <div class="block">
                    <el-avatar :size="60" :src="this.user.uAvatar"></el-avatar>
            </div>
            <div id="info">
                    <div id="info1">
                        <span id="name">{{this.user.uName}}</span>
                        <i class="el-icon-male" v-if="this.user.uSex"></i>
                        <i class="el-icon-female" v-if="!this.user.uSex" ></i>
                    </div>
                    <div id="info2">
                        <span id="age">{{age}}</span>
                        <span id="hobby">{{this.user.uLike}}</span>
                    </div>
                    <div id="info3">
                    <span id="address">{{this.user.uSchool}}</span>
                    </div>
            </div>
            
        </div> 
     
            
      
        <div id="card">
         
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="tab">
            <el-tab-pane label="地址管理" name="1" class="first" v-if="flag!=false" >
                <ul id="ul1" >
                     <li v-for="(aa,i) in MyAddress" :key="i">
                         <AddressManager :uaId="aa.uaId" :uaSigner="aa.uaSigner"
                         :uaSigner1="aa.uaSigner.substr(0,1)" :uaAddress="aa.uaAddress" :uaPhone="aa.uaPhone"></AddressManager>
                         </li>
                </ul>
              <el-button type="danger" id="add" size="small" @click="AddNewAd">添加新地址</el-button>
              <div id="add1"></div>
            </el-tab-pane>
            <el-tab-pane label="编辑资料" name="2" v-if="flag!=false"><EditInfo ref="EditInfo"></EditInfo></el-tab-pane>
            <el-tab-pane label="评价" name="3">
                <ul id="ul2">
                     <li v-for="(ig,i) in evaluate" :key="i"><evModel :evaluate="ig"></evModel></li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="我的评价" name="4" v-if="flag!=false">
                 <ul id="ul3">
                     <li v-for="(ig,i) in MyEvaluate" :key="i"><myEvModel :MyEvaluate="ig"></myEvModel></li>
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
          flag:true,
          type:'',
        evaluate:[],
        MyEvaluate:[],
        user:{
        },
        age:'',
        uId:'',
        MyAddress:[],
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
         this.type= tab.name;
         if(this.type==1)
         {
             this.selectMyAddress();
             this.tf=false;
         }
         else if(this.type==2){
             this.$refs.EditInfo.getUserInfo1();
              this.tf=false;
         }
         else if(this.type==3){
             this.tf=true;
             this.eva();
         }
         else if(this.type==4){
             this.tf=true;
             this.MyEva();
         }
        console.log(tab, event);
      },
      AddNewAd(){
        this.$router.push({path:'/AddNewAddress'});
      },
       changePage(){
          if(this.type==3){
               this.eva();
          }
          if(this.type==4){
             
               this.MyEva();
          }
   
       },
        async getUserInfo() {
          myAxios
              .get(`/user/selectByuid/${this.uId}`)
              .then(res => {
                   this.user=res;
                   this.age=(2020-this.user.uBirthday.substr(0,4));
                  
              }).catch(err => {
                  console.log(err);
                  });
      },
       async selectMyAddress() {
          myAxios
              .get(`/user/Address/SelADs/${this.uId}`)
              .then(res => {
                this.MyAddress=res;
                console.log(res);
                  
              }).catch(err => {
                  console.log(err);
                  });
      },
       async eva(){
           
          myAxios
              .get(`/comment/OrderComment/SecletSellByuId/${this.uId}/${this.pagination.size}/${this.pagination.currentPage}`)
              .then(res => {//2
                this.pagination.total=res.total;
                this.evaluate=res.rows;
                console.log(res);
                  
              }).catch(err => {
                  console.log(err);
                  });
      },
      async MyEva(){
          myAxios
              .get(`/comment/OrderComment/selectByUId/${1}/${this.pagination.size}/${this.pagination.currentPage}`)
              .then(res => {//1
                this.pagination.total=res.total;
                this.MyEvaluate=res.rows;
                console.log(res);
              }).catch(err => {
                  console.log(err);
                  });
      }},
    components:{
      AddressManager:AddressManager,
      evModel:evModel,
      EditInfo:EditInfo,
      myEvModel:myEvModel
    },
    created:function(){
        this.uId=this.$route.query&&this.$route.query.uId;
        if(this.uId!=localStorage.getItem("uId")&&this.uId!=null){
          this.flag=this.$route.query&&this.$route.query.flag;
        }
        else if(this.uId==null){
        this.uId=localStorage.getItem("uId");}
         this.selectMyAddress();
         this.getUserInfo();
    }
}
</script>
<style scoped>
#MyHomeIndex{
    margin:30px auto;
    width:800px;
    /* height:1000px;  */
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
    margin-top:30px;
}
#add1{
   height:20px; 
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