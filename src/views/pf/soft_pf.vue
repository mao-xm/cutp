<template>
  <div id="soft-pf">
    <el-input
       type="textarea"
       :rows="10"
       placeholder="请输入内容"
       v-model="textarea">
    </el-input>
  </div>
</template>
<script>
export default {
  name:"soft_pf",
  data(){
    return{
      textarea:""
    }
  }
}
</script>
<style>
#soft-pf{
  margin:20px auto;
  width:1000px;
  height:800px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-textarea__inner{
  width:500px;
  margin:50px auto;
}
</style>