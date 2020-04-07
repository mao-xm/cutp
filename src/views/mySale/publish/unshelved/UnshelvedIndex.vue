<template>
    <div id="unshelved">
        <unshelvedInf v-for="item in 5" :key="item"></unshelvedInf>
    </div>
</template>
<script>
import unshelvedInf from '@/views/mySale/publish/unshelved/UnshelvedInf'

export default {
    name:'unshelved',
     components:{
        unshelvedInf
    }
    
}
</script>
<style scoped>

</style>