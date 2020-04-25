<template>
    <el-card id="AddressManager">
        <div class="card">
                <div class="block"><el-avatar :size="40" >{{uaSigner1}}</el-avatar></div>
                <div id="info">
                    <span id="name">{{uaSigner}}</span>
                    <span id="num">{{uaPhone}}</span>
                    <div id="address">{{uaAddress}}</div>
                </div>
                <div id="edit">
                    <el-button  type="danger" icon="el-icon-edit" circle class="button" size="mini" @click="edit(uaId)"></el-button>
                     <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="delete1(uaId)"></el-button>
                </div>
        </div>
    </el-card>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {

 props:['uaId','uaSigner1','uaSigner','uaAddress','uaPhone'],
 name:'AddressManager',

 methods:{
     edit(){
         this.$router.push({path:'/EditNewAddress'})
     },
     async delete1(uaId) {
         this.$confirm('确认删除？')
            .then(_ => {
          myAxios
              .post(`/user/Address/DelAd/${this.uaId}`)
              .then(res => {
                  if(res==true){
                        this.$notify.success({
                            title: '成功',
                            message: '删除成功'
                            });
                        location. reload();
                            }
                  console.log(res)
                  
              }).catch(err => {
                  console.log(err);
                  });})
      },
      edit(uaId) {
        this.$router.push({path:'/EditNewAddress',query:{uaId:uaId}});
      }
//  },
//  watch: {
//        uaId: function(newVal,oldVal){
//         this.uaId1 = newVal;
//       }
//     },
//     created:function(){
//       this.seByUaId(this.uaId1);
//     }
}}
</script>
<style scoped>
#AddressManager{
    width:600px;
    margin-left:40px;
}
.card{
    width:500px;
    height:100px;
   margin-left:25px;
}
.block{
    float:left;
    margin-left:20px;
    margin-top:30px;
}
#info{
   float:left;
   margin-left:15px;
    margin-top:20px;
}
#info{
    width:300px;
}
#name{
    font-size:16px;
    width:50px;
}
#num{
    font-size:11px;
    margin-left:20px;
}
#address{
    margin-top:10px;
    font-size:13px;
}
#edit{
    float:left;
    margin-left:49px;
    margin-top:40px;
}
</style>