<template>
    <div id="evModelIn">
         <el-card>
             <div id="evModelIn1">
                <div class="demo-basic--circle">
                    <div class="block"><el-avatar :size="50" :src="commentVos1.user.uAvatar"></el-avatar></div>
                    <div id="username">{{commentVos1.user.uName}}</div> 
                </div>
                 <div id="evModelIn1-1">
                     <span id="comTime">{{commentVos1.ocTime|timefilters}}</span><br>
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
   },
   filters: {
    timefilters(val) {
      if (val == null || val == "") {
        return "暂无时间";
      } else {
        let d = new Date(val);   //val为取到的后台时间
        let month =
          d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
        let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
        let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
        let min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
        let sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
       let times=d.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + sec;
        return times;
      }
    }
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