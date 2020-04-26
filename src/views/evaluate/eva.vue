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
import myAxios from "@/utils/myAxios";
export default {
   name:'eva',
    data(){
    return{
      textarea:"",
      imageUrl: '',
      ruleForm: {
            evaluate:{oId:101,eContent:'',uId:1,}, },
            order:{
              gId: 0,
              oBuyDelete: 0,
              oCancelReason: "string",
              oCancelType: 0,
              oCreateTime: "2020-04-26T11:49:15.295Z",
              oEvaluation: "很完美的东西",
              oEvaluationAdd: "string",
              oEvaluationAddTime: "2020-04-26T11:49:15.295Z",
              oEvaluationTime: "2020-04-26T11:49:15.295Z",
              oId: '',
              oPayTime: "2020-04-26T11:49:15.295Z",
              oReceiveTime: "2020-04-26T11:49:15.295Z",
              oRemindReceive: "2020-04-26T11:49:15.295Z",
              oRemindShipments: "2020-04-26T11:49:15.295Z",
              oSellDelete: 0,
              oShipmentsTime: "2020-04-26T11:49:15.295Z",
              oStatus: 0,
              oTradeNo: "string",
              uId: 0,
              uaId: 0},
                      goodPic:[],
            mediaUrl:[]
        ,
          rules: {
            'evaluate.eContent': [
              { required: true, message: '请输入评价内容', trigger: 'blur' }
            ]
          },
         
         mediaUrl:[],

          }
      },
       methods:{
          getOrder(){
         this.order.oId=this.$route.query.oId
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
      handleAvatarSuccess(res, file,fileList) {//返回pic的url
        
        const mediatype={oemType:0,oemUrl:res};
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
                           this.order.oEvaluation=this.ruleForm.evaluate.eContent;
                    const params = {order:this.order,
                                              orderEvaluationMedia:this.mediaUrl}
                            myAxios
                              .post(`/comment/OrderComment/InsertOC`,params)
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

    }},
    created:function(){
      this.getOrder();
    }
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