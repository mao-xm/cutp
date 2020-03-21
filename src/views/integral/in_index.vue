<template>
 <div><!--Vue只允许模板里存在一个根节点-->
    <router-link :to="{ path: '/my_integral'}">我的积分</router-link>
    <router-link :to="{ path: '/integral_good'}">积分商品</router-link>
    <router-view></router-view>
</div>
</template>
<script>
export default {
  name: 'in_index',
 
}
</script>
<style>
</style>