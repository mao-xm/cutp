<template>
<div id="myPublishedIndex">
    <div id="myPublished" class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <publishedInf v-for="item in userPublishGoods" :key="item" :publishgoods="item"></publishedInf>
    </div>
    <div id="myPublished-page">
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
import publishedInf from '@/views/mySale/publish/mypublished/MyPublishedinf'
import myAxios from "@/utils/myAxios";
export default {
    name:'myPublished',
    data(){
       return{
          u_id:localStorage.getItem("uId"),
          userPublishGoods:[],
          
          pagination:{
                total: 0,
                size: 5,
                currentPage:1
          }
         }
    },

    methods: {
       changePage(value){
          this.getGoodsByuId(this.u_id)
      },
        async getGoodsByuId(u_id) {//按用户Id查询自己发布的商品
          var that=this;
           //const params = {  u_id: this.u_id }
           console.log("aaa")
           console.log(u_id)
            myAxios
                 .get(`/goods/goods/findGoodsByuId/${u_id}/${this.pagination.size}/${this.pagination.currentPage}`)
               // .get('http://localhost:10010/api/goods/category2/findAllGoodsCategry')
                .then(res => {
                    
                console.log(res);
                //this.userPublishGoods=res;
                  this.userPublishGoods=res.rows;
                  this.pagination.total=res.total;
                 // this.goodByType=res;
                }).catch(err => {
                    console.log(err,'bb');
                    });
        },
     },
     components:{
        publishedInf
    },
    created(){
          this.getGoodsByuId(this.u_id);
    }
    
}
</script>
<style scoped>
#myPublished-page{
    margin-left: 40%;
    margin-top: 15px;
}
</style>