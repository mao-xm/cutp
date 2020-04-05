<template>
  <div id="app">
    <NavMenu v-if="aa" class="navmenu"></NavMenu>
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
#app{
  height:1264px;
  width:1264px;
  position: relative;
}
.navmenu{
  position: relative;
  width: 100%;
  height: 50px;
}

</style>
