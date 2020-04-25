<template>
    <div id="eva">
        <el-card>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="form">
                  <el-form-item label="请输入评价的内容" prop="evaluate.eContent" class="input">
                        <el-input
                                    type="textarea"
                                    :rows="6"
                                    placeholder=""
                                  v-model="ruleForm.evaluate.eContent"  class="item_input">  
                        </el-input>
                </el-form-item>
                <el-form-item label="请上传图片" prop="evaluate.eContent" class="input">
                </el-form-item>
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
             <el-form-item>
                      <el-button type="danger" size="small" @click="submitRmForm('ruleForm')" id="button">提交</el-button>
            </el-form-item> 
        </el-form>
        </el-card>
    </div>
</template>
<script>
export default {
   name:'eva',
    data(){
    return{
      textarea:"",
      imageUrl: '',
      ruleForm: {
            evaluate:{oId:null,eContent:'',rId:null,fId:1,rStatus:0,uId:1,},
            goodPic:[],
            mediaUrl:[]
         },
          rules: {
            'report.rContent': [
              { required: true, message: '请输入举报内容', trigger: 'blur' }
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
      handleAvatarSuccess(res, file,fileList) {//返回pic的url
        
        const mediatype={fmType:0,fmUrl:res};
        this.mediaUrl.push(mediatype);

        this.ruleForm.goodPic.push(res);

      },
      handleExceed(files, fileList) {//图片上传超过数量限制
        this.$message.error('上传图片不能超过5张!');
        console.log(file, fileList);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      async submitRmForm(ruleForm) {//点击提交
      alert("hhh");
          this.$confirm('确认进行评价？')
            .then(_ => {
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) { 
                         if(this.ruleForm.goodPic != ''){
                            const params = {report:this.ruleForm.report,
                                          reportMedia:this.mediaUrl}
                            myAxios
                              .post(`/feedback/Feedback/AddReport`,params)
                                .then(res => {
                                 this.$notify.success({
                                 title: '成功',
                                 message: '评价成功'
                                 });
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

    }}
}
</script>
<style scoped>
.input{
  width:500px;
}
#eva{
    margin:30px auto;
    width:700px;
}
.form{
    margin-left:80px;
}
</style>