<template>
  <div id="soft-pf">
    <div id="div1">请描述本网站的使用问题:</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="form">
        <el-form-item label="" prop="feedback.fContent" class="input">
          <el-input
                      type="textarea"
                      :rows="6"
                      placeholder="某个功能无法使用、页面无法访问、或其他产品建议(5字以上)"
                     v-model="ruleForm.feedback.fContent"  class="item_input">  
          </el-input>
       </el-form-item>
       <div id="ima">上传图片:</div>
       <el-form-item prop="goodPic" class="imag">
                <el-upload
                  action="http://localhost:8089/upload/image"
                  list-type="picture-card"
                  :file-list="ruleForm.goodPic"
                  :before-upload="beforePicUpload"
                  limit="5"
                  :on-preview="handlePictureCardPreview"
                  :on-exceed="handleExceed"
                  :on-success="handleAvatarSuccess"
                  :on-remove="handleRemove">
                     <i class="el-icon-plus"></i>
                      <div class="el-upload__tip" slot="tip">注：只能上传jpg/png文件，且不超过5M</div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="imgUrl" alt="">
                </el-dialog>
            </el-form-item>  
            <div id="vi">上传视频:</div>
            <el-form-item prop="goodVid"  class="video">
              <el-upload
                class="upload-demo"
                action="http://localhost:8089/upload/image"
                drag
                :data="ruleForm.goodVid"
                 accept="video/mp4"
                 :on-exceed="handleExceedTwo"
                :before-upload="beforeVideoUpload"
                :on-success="handleVideoSuccess"
                limit="1"
                multiple >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">注：只能上传mp4文件，且不超过5M</div>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="danger" size="small" @click="submitFmForm('ruleForm')" id="button">提交</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
  name:"soft_pf",
  data(){
    return{
      textarea:"",
      imageUrl: '',
      ruleForm: {
            feedback:{fContent:'',fId:0,fStatus:0,uId:1,},
            goodPic:[],
            goodVid :{},
            mediaUrl:[]
         },
          rules: {
           'feedback.fContent': [
              { required: true, message: '请输入反馈内容', trigger: 'blur' }
            ]
          },
         
         mediaUrl:[],

          }
      },
  methods:{
       beforePicUpload(file){//照片只能是jpg/png，大小小于5m
            console.log(file.type);
          const isJPG = file.type === 'image/jpeg';
          console.log(isJPG);
          const isPNG = file.type === 'image/png';
           console.log(isPNG);
          const isLt5M = file.size / 1024 / 1024 < 5;
          if (!isJPG && !isPNG) {
             console.log(isJPG);
            this.$message.error('上传的图片只能是 JPG/PNG 格式!');  
            this.common.errorTip('上传的图片只能是 JPG/PNG 格式!');   
             console.log(isJPG);
          }
          if (!isLt5M) {
            this.$message.error('上传的图片大小不能超过 5MB!');
          }
          console.log(isJPG);
          return (isJPG || isPNG) && isLt5M;
      },
      beforeVideoUpload(file){//视频只能是MP4格式，大小不超过5M
          const isMp4 = file.type === 'video/mp4';
          const isLt2M = file.size / 1024 / 1024 < 5;
          if (!isMp4) {
            this.$message.error('上传的视频只能是 mp4 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传的视频大小不能超过 5MB!');
          }
          return isMp4 && isLt2M;
      },
      handleAvatarSuccess(res, file,fileList) {//返回pic的url
        
        const mediatype={fId:this.ruleForm.feedback.fId,fmId:0,fmType:0,fmUrl:res};
        this.mediaUrl.push(mediatype);

        this.ruleForm.goodPic.push(res);

      },
      handleVideoSuccess(res, file) {//返回video的url
        //this.ruleForm.goodVid = URL.createObjectURL(file.raw);
         const mediatype={fId:this.ruleForm.feedback.fId,fmId:0,fmType:1,fmUrl:res};
         this.mediaUrl.push(mediatype);
         this.ruleForm.goodVid=res;
      },
      handleExceed(files, fileList) {//图片上传超过数量限制
        this.$message.error('上传图片不能超过5张!');
        console.log(file, fileList);
      },
      handleExceedTwo(files, fileList) {//视频上传超过数量限制
        this.$message.error('上传视频不能超过1个!');
        console.log(file, fileList);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      async submitFmForm(ruleForm) {//点击提交
      
     
          this.$confirm('确认进行软件反馈？')
            .then(_ => {
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) { 
                         if(this.ruleForm.goodPic != '' && this.ruleForm.goodVid !=''){
                            const params = {feedback:this.ruleForm.feedback,
                                          feedbackMedia:this.mediaUrl}
                            
                            myAxios
                              .post(`feedback/Feedback/AddFeedback`,params)
                                .then(res => {
                                  if(res==true){
                                   this.$notify.success({
                                        title: '成功',
                                        message: '反馈成功'
                                     });}
                                }).catch(err => {
                                    this.$notify.error
                                    ({
                                        title: '失败',
                                        message: err
                                    });
                                });
                        }
                     } else {
                         console.log('error submit!!');
                         return false;
                     }
                });
            })
            .catch(_ => {

                });

    }
  },
  created:function(){
    this.ruleForm.feedback.uId=localStorage.getItem("uId");
  }
  }
  
</script>
<style scoped>
.el-form-item__error{
  left:29px;
}
#ima,#vi{
  
  margin-left:30px;
}
.imag,.video{
  margin-left:30px;
}
#ima{
  margin-top:40px;
}
#div1{
  margin-left:160px;
}
.input{
  height:150px;
}
.form{
  margin-left:130px;
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
  width:800px;
  height:800px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-textarea{
  padding-top:20px;
    height:136px;
    width:500px;
    margin-left:200px;
  } 

#button{
    width:70px;
    height:40px;
    float:left;
    margin-top:10px;
     margin-left:30px !important; 
  }
  .item_input{
    margin-left:30px;
  }
  .el-button{
    position:none !important;
  } 

  .el-button--danger{
    background-color: #dd3035;
    border-color:#dd3035;

  }
.el-textarea__inner:hover{
   border-color:#dd3035 !important;
  } 
.el-textarea__inner:focus{
  border-color:#dd3035 !important;
} 

</style>