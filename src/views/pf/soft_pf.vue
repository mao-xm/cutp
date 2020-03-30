<template>
  <div id="soft-pf">
    <div id="div1">请描述本网站的使用问题：</div>
    <el-input
       type="textarea"
       :rows="10"
       placeholder="某个功能无法使用、页面无法访问、或其他产品建议(5字以上)"
       v-model="textarea"
       @focus="focus">
    </el-input>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <div id="button">
     <el-button>提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name:"soft_pf",
  data(){
    return{
      textarea:"",
      imageUrl: ''}
     
    },
  methods:{
    focus(){
      var aa=document.getElementsByClassName("input")[0];
      aa.style.cssText="border-color:dd3035;"
    },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
  
</script>
<style scoped>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius:6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader{
    border:1px dotted #8c939d;;
    width:178px;
    margin-left:200px;
    float:left;
  }
  .avatar-uploader:hover {
    border-color: #dd3035;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;}
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
#soft-pf{
  padding-top:20px;
  margin:20px auto;
  width:1000px;
  height:800px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-textarea{
  padding-top:20px;
    height:238.67px;
    width:600px;
    margin-left:200px;
  } 
   #button{
    width:70px;
    height:40px;
    float:left;
    margin-top:80px;
     margin-left:300px !important; 
  }
  .el-button{
    position:none !important;
  } 
  #div1{
    margin-left:200px;
  }
</style>