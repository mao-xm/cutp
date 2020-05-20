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
     <el-button type="danger" size="small"  @click="search()">搜索</el-button>
     <div v-if="a1" id="div1">
     
      <div class="lb">购物劵：</div>
      <ul id="ul1">
          <li v-for="(ig,i) in igArry" :key="i"><div v-if="ig.igType=='购物券'"><igCard :igName='ig.igName'
           :igIntegral='ig.igIntegral' :url='ig.igImg' :igId='ig.igId' ></igCard></div>
         </li>
      </ul>
      <div class="lb">话费：</div>
      <ul>
          <li v-for="(ig,i) in igArry" :key="i"><div v-if="ig.igType=='话费'"><igCard :igName='ig.igName'
           :igIntegral='ig.igIntegral' :url='ig.igImg' :igId='ig.igId' ></igCard></div>
         </li>
      </ul>
      <div class="lb">玩偶：</div>
      <ul>
          <li v-for="(ig,i) in igArry" :key="i"><div v-if="ig.igType=='玩偶'"><igCard :igName='ig.igName'
           :igIntegral='ig.igIntegral' :url='ig.igImg' :igId='ig.igId' ></igCard></div>
         </li>
      </ul>
      </div>
         <div id="pag" v-if="a2">
                <ul id="ul">
                    <li v-for="(ig,i) in rows" :key="i"><div><igCard :igName='ig.igName'
                    :igIntegral='ig.igIntegral' :url='ig.igImg' :igId='ig.igId' ></igCard></div>
                  </li>
                </ul>
                <el-pagination
                    small
                    layout="prev, pager, next"
                    @current-change="changePage"
                    @prev-click="changePage"
                    @next-click="changePage"
                    :page-size="pagination.size"
                    :current-page.sync="pagination.currentPage"
                    :total="pagination.total" id="pagination">
                </el-pagination>
          </div>
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
       a1:true,
       a2:false,
       input1: '',
       rows:[],
       igArry:[],
       pagination:{
                total: 0,
                size: 3,
                currentPage:1
          }
         
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
    changePage(){
        
          this.search();
   
       },
    async getClass() {
          myAxios
              .get(`/integral/IGoods/SelectNew`)
              .then(res => {
                  this.igArry=res;
                  console.log(res)
                  
              }).catch(err => {
                  console.log(err);
                  });
      },
      async search() {
          this.a1=false;
          this.a2=true;
          myAxios
              .get(`/integral/IGoods/SelectByigName/${this.input1}/${this.pagination.size}/${this.pagination.currentPage}`)
              .then(res => {
                  this.pagination.total=res.total;
                  this.rows=res.rows;
                  
              }).catch(err => {
                  console.log(err);
                  });
      }

  },
  created:function(){
    this.getClass();
   
  }
}
</script>
<style scoped>
#pag,#div1{
  margin-left:50px;
}
#pagination{
  margin-left:350px;
}
#ul{
  margin-top:50px;
}
.lb{
  margin-top:30px;
  margin-left:65px;
  font-size:20px;
}
/* ul{
  display:inline-block;
  position:absolute;
  top:90px;
  left:0px;

} */
ul li{
    list-style: none;
    display:inline-block;
} 
#integral-goods{
  position:absolute;
  left:200px;
  top:70px;
  width:900px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-input{
  width:400px;
  left:250px;
  top:20px;
}
/* .el-button:focus, .el-button:hover {
  color:#dd3035;
  border-color:#dd3035;
  background-color: white;
} */
.el-button--danger{
    background-color: #dd3035;
    border-color:#dd3035;

  }
.el-button{
  position:relative;
  top:20px;
  left:260px;
}
</style>