<template>
  <div id="integral-goods">
     <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input1"
        @focus="fo"
        @blur="bl"
     >
     </el-input>
      <el-button type="danger" round>搜索</el-button>
      <div class="lb">优惠卷：</div>
      <ul>
          <li v-for="(ig,i) in igArry" :key="i"><igCard :igName='ig.igName'
           :igIntegral='ig.igIntegral' :url='ig.url' :igId='ig.igId'></igCard></li>
      </ul>
    <!-- <h1>积分商品</h1>
    <div>
       用户id:<input v-model="ca1_id" type="text" placeholder="请输入用户id">
      <button v-on:click="test">登录</button>
    </div> -->
  </div>
</template>
<script>
import igCard from'@/views/integral/integral_good_in/ig_card'
import myAxios from "@/utils/myAxios";
export default {
  name: 'integral_good.vue',
  components:{
    igCard:igCard
  },
  data(){
    return {
      // ca1_id:''
       input1: '',
       igArry:[
         {igId:1,igName:'爱康国宾优惠劵',igIntegral:50,url:'../../../static/ig/yhj.png'},
         {igName:'天猫超市优惠劵',igIntegral:40,url:'../../../static/ig/yhj.png'},
         {igName:'淘宝店铺优惠劵',igIntegral:56,url:'../../../static/ig/yhj.png'},
         {igName:'爱康国宾优惠劵',igIntegral:35,url:'../../../static/ig/yhj.png'}
       ]
      }
  },
  methods:{
    fo(){
      var input=document.getElementsByTagName("input")[0];
      input.style.cssText="border:1px solid #dd3035"
    },
    bl(){
      var input=document.getElementsByTagName("input")[0];
      input.style.cssText="border:1px solid #C0C4CC"
    },
    async getClass() {
          myAxios
              .get(`/integral/IEchangeController/SelectBytype/${this.type}/${this.uId}/${this.pageSize}/${this.currentPage}`)
              .then(res => {
                  console.log(res)
                  
              }).catch(err => {
                  console.log(err);
                  });
      },

  }
}
</script>
<style scoped>
.lb{
  margin-top:30px;
  margin-left:65px;
  font-size:20px;
}
ul{
  display:inline-block;
  position:absolute;
  top:90px;
  left:0px;

} 
ul li{
    list-style: none;
    display:inline-block;
}
#integral-goods{
  position:absolute;
  left:200px;
  top:70px;
  width:1000px;
  height:1000px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-input{
  width:400px;
  left:250px;
}
/* .el-button:focus, .el-button:hover {
  color:#dd3035;
  border-color:#dd3035;
  background-color: white;
} */
.el-button--danger{
    color:black;
    background-color: #dd3035;
    border-color:#dd3035;

  }
.el-button{
  position:relative;
  left:250px;
}
</style>