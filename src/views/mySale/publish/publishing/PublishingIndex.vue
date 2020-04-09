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
             <el-form-item label="图片/视频" prop="pic">
                <el-upload
                  action=" "
                  list-type="picture-card"
                  v-model="ruleForm.pic"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                     <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>  
            <el-form-item class="bottom">
                <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
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
          pic:'',
        //  aa:[],
        },
        options:[],
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!'+ruleForm);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      async getAddressData() {
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
</style>