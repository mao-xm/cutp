<template>
    <div id="report">
        <div id="good">
           
            <img src="../../assets/goods/kouhong.jpg" width="100px" height="100px">
         
           <div id="right">
               <span id="name">商品名</span><br>
               <span id="price">价格</span>
                <div id="describe">商品描述</div> 
                 <el-button type="danger" size="small" class="select">查看</el-button> 
           </div>
          
           </div>
        <div id="input">
           <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入举报的内容"
                v-model="textarea">  
            </el-input>
        </div>
        <div id="last">
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
          <el-button type="danger" size="small" class="submit">提交</el-button>
        </div> 
    </div>
</template>
<script>
export default {
    name:'report_pf'

}
</script>
<style scoped>
#report{
    width:800px;
    height:800px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin:0px auto;
    padding-top:30px;
}
#good{
    width:600px;
    margin-left:100px;
    border:1px solid #ccc;
}
#good::after{
    content:'';
    display:block;
    clear:both;
}
img{
    margin-top:10px;
    margin-left:10px;
    float:left;
}
#input{
height:180px;
}
#describe{
    width:300px;
    height:30px;
    border:1px solid #ccc;
}
#right{
    margin-top:15px;
    float:left;
    margin-left:30px;
}
.select{
    margin-left:400px;
}
#price{
    margin-left:20px;
}
.el-textarea{
  padding-top:20px;
    height:238.67px;
    width:600px;
    margin-left:100px;
  } 
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
    margin-left:100px;
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
 .submit{
     margin-left:360px;
     margin-top:124px;
 }
</style>