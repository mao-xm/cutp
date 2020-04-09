<template>
    <div id="publishIndex">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" active-text-color="red">
            <el-tab-pane label="已发布宝贝" name="first"><myPublished></myPublished></el-tab-pane>
            <el-tab-pane label="发布" name="second"><publishing></publishing></el-tab-pane>
            <el-tab-pane label="下架宝贝" name="third"><unshelved></unshelved></el-tab-pane>
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
      activeName: 'first'
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