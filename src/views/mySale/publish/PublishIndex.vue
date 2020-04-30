<template>
    <div id="publishIndex">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" active-text-color="red">
            <el-tab-pane label="已发布宝贝" name="first"><myPublished ref="myPublished"></myPublished></el-tab-pane>
            <el-tab-pane label="发布" name="second"><publishing></publishing></el-tab-pane>
            <el-tab-pane label="下架宝贝" name="third"><unshelved ref="unshelved"></unshelved></el-tab-pane>
       </el-tabs>
    
    </div>
</template>
<script>
import myPublished from '@/views/mySale/publish/mypublished/MyPublishedIndex'
import publishing from '@/views/mySale/publish/publishing/publishingIndex'
import unshelved from '@/views/mySale/publish/unshelved/unshelvedIndex'
export default {
    data() {
    return {
      activeName: 'first',
      u_id:localStorage.getItem("uId"),
    }
  },
   methods:{
       handleClick(value){
           console.log(value)
           if(value.name=='first'){
                console.log("value000")
                this.$refs.myPublished.getGoodsByuId(this.u_id)
           }else if(value.name=='third'){
                console.log("value111")
               this.$refs.unshelved.getUnshelvedGoodsByuId(this.u_id)
           }
            // this.$refs.child.getGoodsByuId(u_id)
            // this.$refs.child.getUnshelvedGoodsByuId(u_id)
       }
   },
    components:{
        myPublished,publishing,unshelved
    }
}
</script>
<style scoped>
#publishIndex{
    width: 100%;
    height: 100%;
   padding-bottom: 20px;
}
 #publishIndex /deep/.el-tabs__item {
    color: red !important;
    height:30px !important;
    line-height: 30px !important;
    font-size:11px !important;

}
.el-tabs__nav-scroll /deep/ .is-active{
    color:#dd3035;
}
/* #publishIndex /deep/.el-tabs__item.is-active{
    color:#dd3035 !important;
} */
.el-tabs__header{
    top:0px;
}
.el-tabs__item:hover{
    color:#dd3035 !important;
}
</style>