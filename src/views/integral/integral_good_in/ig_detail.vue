<template>
    <div id="detail">
        <div id="left">
           <img :src='igood.igImg'>
           <el-input-number v-model="num" @change="handleChange" :min="1"
            :max="igStore" label="描述文字" class="number">
           </el-input-number>
        </div>
        <div id="right">
           <div id="right1">{{igood.igName}}</div>
           <div id="right2">{{igood.igIntegral}}</div>
           <div  id="right3">{{igood.igDescribe}}</div>
           <el-button :disabled="status1" type="danger" size="small"  @click="exchange()">兑换</el-button>
        </div>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
 name:'ig_detail',
 data(){
    return {
           igStore:'',
            igood:{},
            num:1,
            uId:1,
            status1:false
            }
 },
 methods:{
     getOrder(){
         this.uId=localStorage.getItem("uId");
         this.$data.igood.igId=this.$route.query&&this.$route.query.id
         
     },
      handleChange(value) {
        console.log(value);
      },
      async getIgood() {
          myAxios
              .get(`/integral/IGoods/SelectByigId/${this.$data.igood.igId}`)
              .then(res => {
                  this.igood=res;
                  if(res.igStore==0){
                      this.status1=true;
                  }
                 this.igStore=res.igStore;
                  console.log(res)
                  
              }).catch(err => {
                  console.log(err);
                  });
      },
      async exchange() {
          myAxios
              .post(`/integral/IEchangeController/insertIE/${this.uId}/${this.igood.igId}/${this.num}`)
              .then(res => {
                         if(res==true){
                        this.$notify.success({
                            title: '成功',
                            message: '兑换成功'
                            });
                             location.reload();}
                    //    this.$router.push({name:'my_integral'});
                 
                  
              }).catch(err => {
                  console.log(err);
                  });
      }
 },
 created:function(){
     this.getOrder();
     this.getIgood();
    
 }   
}
</script>
<style scoped>
#detail{
    width:800px;
    height:500px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin:0px auto;
}
img{
    width:300px;
    height:300px;
}
#left{
    margin-top:50px;
    margin-left:70px;
    width:300px;
    float:left;
}
#right{
    font-size:30px;
    margin-top:50px;
    margin-left:30px;
    width:300px;
    float:left;
}
#right2{
    margin-top:30px;
    margin-left:200px;
}
#right3{
    margin-top:30px;
    margin-left:20px;
    font-size:20px;
}
.number{
    margin-top:30px;
    margin-left:60px;
}
.el-button--danger{
    background-color: #dd3035;
    border-color:#dd3035;

  }
.el-button{
  top:80px;
  position:relative;
  left:200px;
}
</style>