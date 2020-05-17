<template>
    <div id="report">
        <el-card id="good">
           
            <img :src="orderVo.goodsVo.goodsMedias[0].gmUrl" width="100px" height="100px">
           <div id="right">
               <span id="name">{{orderVo.goodsVo.gName}}</span><br>
               <span id="price">￥{{orderVo.goodsVo.gPrice}}</span>
                <div id="describe">{{orderVo.goodsVo.gDetail}}</div> 
                 <el-button type="danger" size="small" class="select" @click="selectDetail">查看</el-button> 
           </div>
          
           </el-card>
      
         
        <div id="div1">请输入举报内容:</div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="form">
                  <el-form-item label="" prop="report.rContent" class="input">
                        <el-input
                                    type="textarea"
                                    :rows="6"
                                    placeholder=""
                                  v-model="ruleForm.report.rContent"  class="item_input">  
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
                      <el-button type="danger" size="small" @click="submitRmForm('ruleForm')" id="button">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
    name:'report_pf',
    data(){
    return{
      orderVo:{},
      textarea:"",
      imageUrl: '',
      ruleForm: {
            report:{oId:96,rContent:'',rId:0,rStatus:0,uId:1,},
            goodPic:[],
            goodVid :{},
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

        getOrder(){
          this.ruleForm.report.uId=localStorage.getItem("uId");
         this.ruleForm.report.oId=this.$route.query&&this.$route.query.oId;
         
      },
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
        
        const mediatype={rId:this.ruleForm.report.rId,rmId:0,fmType:0,fmUrl:res};
        this.mediaUrl.push(mediatype);

        this.ruleForm.goodPic.push(res);

      },
      handleVideoSuccess(res, file) {//返回video的url
        //this.ruleForm.goodVid = URL.createObjectURL(file.raw);
         const mediatype={rId:this.ruleForm.report.rId,rmId:0,fmType:1,fmUrl:res};
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
      async getOrderDetail() {
          console.log('ss')
          console.log( this.ruleForm.report.oId);
          myAxios
              .get(`/order/order/getOrderDetail/${ this.ruleForm.report.oId}`)
              .then(res => {
                  this.orderVo=res;
              }).catch(err => {
                  console.log(err,'bb');
                  });
      },
      selectDetail(){
         this.$router.push({
          path:'/orderDetail',
          query:{
            oId:this.ruleForm.report.oId
          }
        })
      },
        async submitRmForm(ruleForm) {//点击提交
      alert("hhh");
          this.$confirm('确认进行举报反馈？')
            .then(_ => {
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) { 
                         if(this.ruleForm.goodPic != '' && this.ruleForm.goodVid !=''){
                            const params = {report:this.ruleForm.report,
                                          reportMedia:this.mediaUrl}
                            myAxios
                              .post(`/feedback/Feedback/AddReport`,params)
                                .then(res => {
                                 this.$notify.success({
                                 title: '成功',
                                 message: '举报成功'
                                 });
                                  // if(this.ruleForm){
                                  //   this.$message({
                                  //     message: '举报成功！',
                                  //     type: 'success'
                                  //   });
                                  // }else{
                                  //    this.$message.error('举报失败，请重新操作！');
                                  // }
                                  // location. reload()
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
    this.getOrder();
    this.getOrderDetail();
   
}}
</script>
<style scoped>
#div1{
  margin-left:100px;
  margin-top:30px;
}
#ima,#vi,.imag,.video{
  margin-left:100px;
}
#ima{
  margin-top:50px;
}
#report{
    width:800px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin:0px auto;
    padding-top:30px;
}
#good{
    width:600px;
    margin-left:100px;
    /* border:1px solid #ccc; */
}
#good::after{
    content:'';
    display:block;
    clear:both;
}
/* img{
    margin-top:10px;
    margin-left:10px;
    float:left;
} */
.input{
  height:150px;
}
#describe{
  margin-top:8px;
    /* width:300px;
    height:30px; */
    /* border:1px solid #ccc; */
}
#right{
    margin-top:-100px;
    /* float:left; */
    margin-left:134px;
}
.select{
  /* margin-top:20px; */
    margin-left:365px;
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
 #button{
   margin-left:100px;
 }
</style>