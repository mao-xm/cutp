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
#MyHomeIndex .el-tabs__item:hover,.el-tabs__item.is-active{
    color:#dd3035;
}

#AddNewAddress .el-input{
  width:50%;
}
#AddNewAddress .el-form-item__label{
  margin-top:20px;
}

#EditNewAddress .el-input{
  width:50%;
}
#EditNewAddress .el-form-item__label{
  margin-top:20px;
}
#soft-pf .el-form-item__error{
  left:29px;
}
#report .el-form-item__error{
  top:66%;
  left:103px;
}
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
