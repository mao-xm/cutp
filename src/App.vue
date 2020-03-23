<template>
  <div id="app">
    <NavMenu v-if="aa"></NavMenu>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
     aa:true
      }
}}
</script>
<style>
</style>
