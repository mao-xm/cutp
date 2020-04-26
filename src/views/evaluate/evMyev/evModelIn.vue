<template>
    <div id="evModelIn">
         <el-card>
             <div id="evModelIn1">
                <div class="demo-basic--circle">
                    <div class="block"><el-avatar :size="50" :src="commentVos1.user.uAvatar"></el-avatar></div>
                    <div id="username">{{commentVos1.user.uName}}</div> 
                </div>
                 <div id="evModelIn1-1">
                     <span id="comTime">{{commentVos1.ocTime}}</span><br>
                    <span id="comContent">{{commentVos1.ocContent}}</span>  
                </div>
            </div>
         </el-card>
    </div>
</template>
<script>

export default {
   name:'evModelIn',
   props:['commentVos1'],
   data(){
      return{circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}
   }
}
</script>
<style scoped>
#evModelIn{
    width:450px;
    margin-left:20px;
    height:200px;
}
.block,#username{
    float:left;
}
#evModelIn1-1{
   padding-top:51px;
   margin-left:48px;
}
#comTime{
    font-size:12px;
}
#comContent{
    width:400px;
}
</style>