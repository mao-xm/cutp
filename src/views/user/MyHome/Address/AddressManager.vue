<template>
    <el-card id="AddressManager">
        <div class="card">
                <div class="block"><el-avatar :size="40" >肖茂</el-avatar></div>
                <div id="info">
                    <span id="name">肖茂</span>
                    <span id="num">18085722719</span>
                    <div id="address">天津市西青区宾水西道延长线399号天津工业大学软件园</div>
                </div>
                <div id="edit">
                    <el-button  type="danger" icon="el-icon-edit" circle class="button" size="mini" @click="edit"></el-button>
                </div>
        </div>
    </el-card>
</template>
<script>
export default {
 name:'AddressManager',
 methods:{
     edit(){
         this.$router.push({path:'/EditNewAddress'})
     }
 }
}
</script>
<style scoped>
#AddressManager{
    width:600px;
    margin-left:50px;
    
}
.card{
    width:500px;
    height:100px;
   margin-left:20px;
   /* border:1px solid #E4E7ED; */
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