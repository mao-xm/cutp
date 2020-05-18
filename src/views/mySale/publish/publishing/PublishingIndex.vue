<template>
    <div id="publishing">
      
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="商品名称" prop="name">
                <el-input placeholder="请输入商品名称" v-model="ruleForm.name" clearable></el-input>
            </el-form-item>
             <el-form-item label="商品详情" prop="detail">
                <el-input type="textarea" placeholder="请输入商品详情" v-model="ruleForm.detail" label-width="100px"></el-input>
            </el-form-item>
             <el-form-item label="商品价格" prop="price">
                <el-input v-model="ruleForm.price" placeholder="请输入商品价格" label-width="100px"></el-input>
            </el-form-item>     
             <el-form-item label="商品类别" prop="type">
                <el-cascader :options="options" placeholder="请选择商品类别" v-model="ruleForm.type" clearable></el-cascader>
            </el-form-item>   
             <el-form-item label="商品图片" prop="goodPic" class="good-pic">
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
            <el-form-item label="商品视频" prop="goodVid"  class="good-video">
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
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">注：只能上传mp4文件，且不超过5M</div>
              </el-upload>
            </el-form-item>
            <el-form-item class="bottom">
                <el-button type="primary" @click="submitGoodForm('ruleForm')">发布</el-button>
                <el-button @click="resetForm(ruleForm)">重置</el-button>
            </el-form-item>
        
      </el-form>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";

export default {
     name:'publishing',
      data() {
        return {
          ruleForm: {
            name: '',
            detail: '',
            price: '',
            type:'',
            goodPic:[],
            goodVid:{},
          //  aa:[],
          },
         options:[],
         user:{uId:localStorage.getItem("uId")},
         flag:false,
         goodStatus:0,
         //goodsDate: new Date(),
         mediaUrl:[],
          rules: {
            name: [
              { required: true, message: '请输入商品名称', trigger: 'blur' },
              { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
            ],
            price: [
              { required: true, message: '请输入商品价格', trigger: 'blur' }
            ],
            type: [
              { required: true, message: '请选择商品类别', trigger: 'change' }
            ],
            detail: [
              { required: true, message: '请填写商品详情', trigger: 'blur' }
            ]
          }
        };
    },
    methods: {
      beforePicUpload(file){//照片只能是jpg/png，大小小于5m
         //if (!/^image\/(jpeg|png)$/.test(file.type)) {
            //this.imageFileName.push(file.name);
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
          // if (!isPNG) {
          //   console.log(isPNG);
          //   this.$message.error('上传的图片只能是 JPG/PNG 格式!');
          // }
          if (!isLt5M) {
            this.$message.error('上传的图片大小不能超过 5MB!');
          }
          console.log(isJPG);
          return (isJPG || isPNG) && isLt5M;
      },

      beforeVideoUpload(file){//视频只能是MP4格式，大小不超过5M
         //if (!/^image\/(jpeg|png)$/.test(file.type)) {
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
        // console.log(res);
        // console.log(file);
        // console.log(fileList);
        const mediatype={gmType:0,gmUrl:res};
        this.mediaUrl.push(mediatype);

        this.ruleForm.goodPic.push(res);

      //   this.dialogFileUpload.imgUrl = [];
      //   this.dialogFileUpload.imgUrl.push(URL.createObjectURL(file.raw));
      //   fileList = this.dialogFileUpload.imgUrl;
      //   for(let i=0;i<fileList.length;i++){
      //   this.ruleForm.goodPic.push(fileList[i]);
      // }

        //  this.ruleForm.goodPic=[];
           // this.ruleForm.goodPic.push(URL.createObjectURL(file.raw));
       //   console.log("url"+this.ruleForm.goodPic);
        //this.ruleForm.goodPic = URL.createObjectURL(file.raw);
      },
      handleVideoSuccess(res, file) {//返回video的url
        //this.ruleForm.goodVid = URL.createObjectURL(file.raw);
         console.log(res);
         const mediatype={gmType:1,gmUrl:res};
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

      async submitGoodForm(ruleForm) {//点击提交
         console.log(this.ruleForm);
         console.log(this.mediaUrl);
           console.log(this.ruleForm.type);
          this.$confirm('确认发布？')
            .then(_ => {
               console.log("succes");
                this.$refs[ruleForm].validate((valid) => {
                   console.log("succes");
                    if (valid) { 
                       console.log("succes");
                         if(this.ruleForm.name != ''  && this.ruleForm.detail != '' && this.ruleForm.price != 0 && this.ruleForm.type != '' && this.ruleForm.goodPic != '' && this.ruleForm.goodVid !=''){
                            const params = {  user: this.user , ca2Id: this.ruleForm.type[1],gName:this.ruleForm.name,
                                           gDetail:this.ruleForm.detail,gPrice:this.ruleForm.price,gStatus:this.goodStatus,
                                          goodsMedias:this.mediaUrl}
                            console.log(params);
                            myAxios
                              .post(`/goods/goods/insertGoods`,params)
                                .then(res => {
                                  this.ruleForm=res;
                                   console.log(res);
                                    console.log(this.ruleForm);
                                  if(this.ruleForm==true){
                                    this.$message({
                                      message: '发布成功！',
                                      type: 'success'
                                      
                                    });
                                  }else{
                                     this.$message.error('发布失败，请重新操作！');
                                  }
                                  //this.$router.push({path:'/mySale/publishIndex'})
                                  location. reload()
                                  // this.$parent.getUnshelvedGoodsByuId(this.user.uId);
                                   // this.order = res
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
        // var that=this;
        //     myAxios
        //          .post(`/goods/category2/insertGoods`,params)
        //        // .get('http://localhost:10010/api/goods/category2/findAllGoodsCategry')
        //         .then(res => {
        //             //  that.options=res;
        //             //  console.log(that.options);
        //             console.log(goodInf);
        //         }).catch(err => {
        //             console.log(err,'bb');
        //             });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      async getAddressData() {//获取商品类别
        var that=this;
            myAxios
                 .get(`/goods/category2/findAllGoodsCategry`)
               // .get('http://localhost:10010/api/goods/category2/findAllGoodsCategry')
                .then(res => {
                     //console.log(res)
                    // var aa=res;
                    // console.log(aa);
                     that.options=res;
                     console.log(that.options);
                }).catch(err => {
                    console.log(err,'bb');
                    });
        }
  
    
    },
    created(){
          this.getAddressData();
    }
  
}
</script>
<style scoped>
#publishing{
     width: 100%;
    height: 1200px;
    margin-top: 45px;
    margin-bottom: 20px;
}
#publishing{
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}
.demo-ruleForm /deep/.el-input__inner{
  width:40% !important;
}
.el-textarea__inner {
  width:60% !important;
}
.bottom{
  margin-bottom: 20px;
}
.el-button--primary{
  background-color:#F56C6C;
  border-color:#F56C6C;
}
/*
.good-pic{
   float: left;
  margin-right: 100px;
} */
/* .good-video{
  float: left;
} */
</style>