<template>
  <div>
    <h1>首页</h1>
    <router-link :to="{path:'/in_index'}">积分商城</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style>
</style>