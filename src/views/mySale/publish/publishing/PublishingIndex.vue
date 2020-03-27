<template>
    <div id="publishing">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="商品名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
             <el-form-item label="商品详情" prop="detail">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
             <el-form-item label="商品价格" prop="price">
                <el-input v-model="input" ></el-input>
            </el-form-item>     
             <el-form-item label="商品类别" prop="type">
                <el-cascader :options="options" clearable></el-cascader>
            </el-form-item>   
             <el-form-item label="图片/视频" prop="pic">
                <el-upload
                  action=" "
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                     <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>  
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
      </el-form>
    </div>
</template>
<script>
export default {
     name:'publishing',
      data() {
      return {
        ruleForm: {
          name: '',
          detail: '',
          price: '',
          type:'',
          pic:''
        },
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
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  
}
</script>
<style scoped>

</style>