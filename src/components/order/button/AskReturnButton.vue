<template>
    <div>
        <el-button type="danger" class="ask-return-button" @click="changeVisible(true)" round>我要退款</el-button>
        <el-dialog title="退货退款" :visible.sync="dialogFormVisible" class="buy-receive-order-item-dialog">
            <el-form :model="orderReturn" :rules="rules" ref="orderReturn" label-width="110px">
                <el-form-item prop="orReceived" label="退货退款类型">
                      <el-select v-model="orderReturn.orReceived" placeholder="请选择退货退款类型">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                      </el-select>
                </el-form-item>
                <el-form-item label="退款理由" prop="orReason">
                    <el-input type="textarea" v-model="orderReturn.orReason" placeholder="请填写退货理由"></el-input>
                </el-form-item>
                 <el-form-item label="退款图片" prop="img">
                    <el-upload
                    action="http://localhost:8089/upload/image"
                    list-type="picture-card"
                    :file-list="imgs"
                    :before-upload="beforePicUpload"
                    :limit="5"
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
               <el-form-item label="退款视频" prop="goodVid"  class="good-video">
                <el-upload
                    class="upload-demo"
                    action="http://localhost:8089/upload/image"
                    drag
                    :data="videos"
                    accept="video/mp4"
                    :on-exceed="handleExceedTwo"
                    :before-upload="beforeVideoUpload"
                    :on-success="handleVideoSuccess"
                    :limit="1"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">注：只能上传mp4文件，且不超过5M</div>
                </el-upload>
                </el-form-item>
                <el-form-item class="generate-order-submit">
                    <el-button type="danger" @click="askReturn('orderReturn')">去退款</el-button>
                </el-form-item>
            </el-form>            
        </el-dialog>
    </div>
</template>
<script>
import basicOrderItem from '@/components/order/BasicOrderItem'
import myAxios from "@/utils/myAxios";
export default {
    data(){
        return{
            dialogFormVisible: false,
            dialogVisible:false,
            options:[
                {
                    value: 1,
                    label: '我要退款'
                }, {
                value: 2,
                label: '我要退货退款'
            }],
            imgUrl:'',
            imgs:[],
            videos:{},
            rules: {
                orReceived: [
                    { required: true, message: '请选择退货退款类型', trigger: 'change' }
                ],
                orReason: [
                    { required: true, message: '请填写退货退款理由', trigger: 'blur' }
                ]
            },
            orderReturn:{
                orReceived: null,
                orReason:''
            },
            orderReturnMedias: [],
        }
    },
    methods:{
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
        this.imgs.push(res);
        console.log('aa')
        const orderReturnMedia = {ormUrl:res,ormType:0}
        this.orderReturnMedias.push(orderReturnMedia)
      },
      handleVideoSuccess(res, file) {//返回video的url
        const orderReturnMedia = {ormUrl:res,ormType:1}
        this.orderReturnMedias.push(orderReturnMedia)
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
        /**
         * 弹窗是否可见
         */
        changeVisible(value){
            this.dialogFormVisible = value
        },
        /**
         * 请求退货退款函数
         */
        async askReturn(ruleForm){
          this.$confirm('确认退货退款？')
            .then(_ => {
               console.log("succes");
                this.$refs[ruleForm].validate((valid) => {
                   console.log("succes");
                    if (valid) {
                        const askReturnParams = { oId: this.order.oId, uId: this.order.user.uId, oStatus: this.order.oStatus,orderReturn: this.orderReturn,orderReturnMedias: this.orderReturnMedias }
                        console.log(this.orderReturn)
                        console.log(this.orderReturnMedias)
                        myAxios
                            .post(`/order/order/askReturn`,askReturnParams)
                            .then(res => {
                                if(res == true){
                                    const query = {type: 10}
                                    console.log(query)
                                    this.$router.push({path:'/orderTemp',query})
                                }
                            }).catch(err => {
                                this.$notify.error
                                ({
                                    title: '失败',
                                    message: err
                                });
                            });
                    }
                });
            })
            .catch(_ => {

                });
        },
    },
    created(){
        this.$set(this.order,'isBuy',true)
    },
    props: { 
        order: Object
    }
}
</script>
<style scoped>
.el-button{
    height: 15px !important;
    text-align: center !important;
    line-height: 0.3 !important;
}
</style>