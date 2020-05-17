<template>
    <div id="EditNewAddress">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="收件人姓名" prop="name">
                <el-input  v-model="ruleForm.name" autocomplete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="收件人电话" prop="number">
                <el-input v-model.number="ruleForm.number" autocomplete="off" class="input"></el-input>
            </el-form-item>
            <el-form-item label="收件人地址" prop="value">
                    <!-- <el-select v-model="ruleForm.Adress" placeholder="请选择地址" class="inputs">
                      <el-option label="天津市" value="天津市"></el-option>
                      <el-option label="湖南省" value="湖南省"></el-option>
                      <el-option label="贵州省" value="贵州省"></el-option>
                      <el-option label="广西省" value="广西省"></el-option>
                    </el-select> -->
                     <el-cascader
                        placeholder="请选择地址" 
                        class="inputs"
                        v-model="ruleForm.value"
                        :options="options"
                        @change="handleChange">
                   </el-cascader>
              </el-form-item>
            <el-form-item label="详细地址" prop="DetailAdress">
                <el-input v-model="ruleForm.DetailAdress" class="input"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" @click="submitForm('ruleForm')" class="preserve">保存</el-button>
                <el-button type="danger" @click="resetForm('ruleForm')" class="delete">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
    name:'EditNewAddress',
     data() {
        var checkNumber1 = (rule, value, callback) => {
         if (isNaN(value)){
             callback(new Error('请输入数字值'));
         }
         else if(value.toString().length!=11){
               callback(new Error('收件人电话是11位'));
         }else{
           callback();
           
         }
          };
      return {
         options: [{
          value: '天津市',
          label: '天津市',
          children: [{
            value: '西青区',
            label: '西青区',
            children: [{
              value: '精武镇',
              label: '精武镇'
            }, {
              value: '中北镇',
              label: '中北镇'
            }]
          }, {
            value: '和平区',
            label: '和平区',
            children: [{
              value: '新华街道',
              label: '新华街道'
            }, {
              value: '巴塔街道',
              label: '巴塔街道'
            }]
          }]
        }, {
          value: '贵州省',
          label: '贵州省',
          children: [{
            value: '毕节市',
            label: '毕节市',
            children: [{
              value: '织金县',
              label: '织金县'
            }, {
              value: '黔西县',
              label: '黔西县'
            }]
          }, {
            value: '贵阳市',
            label: '贵阳市',
            children: [{
              value: '南明区',
              label: '南明区'
            }, {
              value: '花溪区',
              label: '花溪区'
            }]
          }]
          },{
          value: '湖南省',
          label: '湖南省',
          children: [{
            value: '长沙市',
            label: '长沙市',
            children: [{
              value: '芙蓉区',
              label: '芙蓉区'
            }, {
              value: '雨花区',
              label: '雨花区'
            }]
          }, {
            value: '湘潭市',
            label: '湘潭市',
            children: [{
              value: '雨湖区',
              label: '雨湖区'
            }, {
              value: '岳塘区',
              label: '岳塘区'
            }]
          }]
          }

         ],
        ruleForm: {
          name: '',
          number:'',
          value:[],
          DetailAdress: ''
        },
        userAdd:{
          uId:0,
          uaId:0,
          uaAddress:'',
          uaPhone:'',
          uaSigner:''
        },
        rules: {
          name: [
           { required: true, message: '请输入收件人姓名', trigger: 'blur' }
          ],
          number: [
            { required: true, message: '请输入收件人电话', trigger: 'blur' },
            {validator:checkNumber1, trigger: 'blur' }
          ],
          value: [
            { required: true, message: '请选择收件人地址', trigger: 'change' }
          ],
          DetailAdress: [
            { required: true, message: '请输入收件人详细地址', trigger: 'blur' }
          ]

        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.editAddress();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
       resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getOrder(){
         this.userAdd.uaId=this.$route.query&&this.$route.query.uaId
         
     },
     async editAddress() {
       this.userAdd.uId=localStorage.getItem("uId");
        this.userAdd.uaAddress=this.ruleForm.value.join(" ")+" "+this.ruleForm.DetailAdress;
        this.userAdd.uaPhone=this.ruleForm.number.toString();
        this.userAdd.uaSigner=this.ruleForm.name;
        const params=this.userAdd;
         this.$confirm('确认编辑？')
            .then(_ => {
          myAxios
              .post(`user/Address/EditAd`,params)
              .then(res => {
                  if(res==true){
                        this.$notify.success({
                            title: '成功',
                            message: '编辑成功'
                            });
                         this.$router.push({name:'MyHomeIndex'});
                            }
                  
              }).catch(err => {
                  console.log(err);
                  });
     })},
     async queryById(uaId) {
          myAxios
              .get(`/user/Address/SelADByUaId/${this.userAdd.uaId}`)
              .then(res => {
                  this.ruleForm.name=res.uaSigner;
                  this.ruleForm.number=res.uaPhone;
                  this.ruleForm.value=res.uaAddress.substr(0,11).split(" ");
                  this.ruleForm.DetailAdress=res.uaAddress.substr(12);
                  console.log(res)
                  
              }).catch(err => {
                  console.log(err);
                  });
      },
    },
    created:function () {
      this.getOrder();
      this.queryById(this.userAdd.uaId);
      
    }
}
</script>
<style scoped>
#EditNewAddress{
    width:800px;
    height:500px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin:30px auto;
}
.demo-ruleForm{
  margin-left:204px;
  padding-top:50px;
}
.inputs{
  margin-top:20px;
  margin-left:30px;
  width:492px;
}
.input{
  margin-top:20px;
  margin-left:30px;
}
.preserve{
  /* margin-top:20px; */
  margin-left:52px;
}
.delete{
  /* margin-top:5px; */
  margin-left:52px;
}

</style>