<template>
 <div id="unshelvedIndex">
    <div id="unshelved">
        <unshelvedInf v-for="item in userUnshelvedGoods" :key="item" :unshelvedgoods="item"></unshelvedInf>
    </div>
    <div id="unshelved-page">
        <el-pagination
                    small
                    layout="prev, pager, next"
                    @current-change="changePage"
                    @prev-click="changePage"
                    @next-click="changePage"
                    :page-size="pagination.size"
                    :current-page.sync="pagination.currentPage"
                    :total="pagination.total">
         </el-pagination>
    </div>
 </div>
</template>
<script>
import unshelvedInf from '@/views/mySale/publish/unshelved/UnshelvedInf'
import myAxios from "@/utils/myAxios";
export default {
    name:'unshelved',
    data(){
       return{
          u_id:localStorage.getItem("uId"),
          userUnshelvedGoods:[],
           pagination:{
                total: 0,
                size: 3,
                currentPage:1
          }
         }
    },
     components:{
        unshelvedInf
    },
     methods: {
        changePage(value){
            this.getUnshelvedGoodsByuId(this.u_id)
       },
        async getUnshelvedGoodsByuId(u_id) {//按用户Id查询自己已下架的商品
          var that=this;
           //const params = {  u_id: this.u_id }
          // console.log(params)
            myAxios
                 .get(`/goods/goods/findUnshelveGoodsByuId/${u_id}/${this.pagination.size}/${this.pagination.currentPage}`)
               // .get('http://localhost:10010/api/goods/category2/findAllGoodsCategry')
                .then(res => {
                    this.userUnshelvedGoods=res.rows;
                  this.pagination.total=res.total;
                  // this.userUnshelvedGoods=res;
                 // this.goodByType=res;
                }).catch(err => {
                    console.log(err,'bb');
                    });
        },
     },
      created(){
         this.getUnshelvedGoodsByuId(this.u_id);
    }
}
</script>
<style scoped>
#unshelved-page{
    margin-left: 45%;
    margin-top: 15px;
}
</style>