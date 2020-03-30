<template>
    <div id="edituser">
        <el-card class="edituser-card">
          哦!
        </el-card>
    </div>
</template>
<script>
  export default {
    data() {
      return {
       formInline: {
          user: '',
          region: ''
        }
      }
    }
  }

</script>
<style scoped>
    .edituser-card{
       position: relative;
       top: 100px;
       margin: auto auto;
       width: 80%;
       height: 300px;
    }
    el-form-item{
      padding-left: 500px;
    }

</style>