<template>
 <div id="integral"><!--Vue只允许模板里存在一个根节点-->
      <el-menu
      router="true"
      class="el-menu-vertical-demo"
      active-text-color="#dd3035"
      default-active="/in_index/my_integral"
     >
      <el-menu-item index="/in_index/my_integral">
        <i class="el-icon-menu"></i>
        <span slot="title">我的积分</span>
      </el-menu-item>
      <el-menu-item index="/in_index/integral_good">
        <i class="el-icon-menu"></i>
        <span slot="title">积分商品</span>
      </el-menu-item>
    </el-menu>
    <router-view></router-view> 
    
</div>
</template>
<script>
export default {
  name: 'in_index'
 
 
}
</script>
<style>
.el-menu-vertical-demo{
  width:180px;
  float:left;
  border-right:none;
  top:180px;
  left:30px;
  position:fixed;
}
#integral{
  padding-top:1px;
}

</style>