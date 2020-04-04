<template>
    <div id="myPublished">
        <publishedInf v-for="item in 5" :key="item"></publishedInf>
    </div>
</template>
<script>
import publishedInf from '@/views/mySale/publish/mypublished/MyPublishedinf'

export default {
    name:'myPublished',
     components:{
        publishedInf
    }
    
}
</script>
<style scoped>

</style>