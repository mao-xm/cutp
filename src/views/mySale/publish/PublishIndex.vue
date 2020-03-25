<template>
    <div id="publishIndex">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="已发布宝贝" name="first"><myPublished></myPublished></el-tab-pane>
            <el-tab-pane label="发布" name="second"><publishing></publishing></el-tab-pane>
            <el-tab-pane label="下架宝贝" name="third">下架宝贝</el-tab-pane>
       </el-tabs>
    
    </div>
</template>
<script>
import myPublished from '@/views/mySale/publish/mypublished/MyPublishedIndex'
import publishing from '@/views/mySale/publish/publishing/publishingIndex'
import unshelved from '@/views/mySale/publish/unshelved/unshelvedIndex'
export default {
    components:{
        myPublished,publishing,unshelved
    }
}
</script>
<style scoped>
#publishIndex{
    width: 100%;
    height: 100%;
   
}
.el-tabs__item{
    height:30px;
    line-height: 30px;
    font-size:10px
}
</style>