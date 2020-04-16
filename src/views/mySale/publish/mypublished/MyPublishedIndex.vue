<template>
    <div id="myPublished" class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <publishedInf v-for="item in userPublishGoods" :key="item" :publishgoods="item"></publishedInf>
    </div>
</template>
<script>
import publishedInf from '@/views/mySale/publish/mypublished/MyPublishedinf'
import myAxios from "@/utils/myAxios";
export default {
    name:'myPublished',
    data(){
       return{
          u_id:1,
          userPublishGoods:[],
         }
    },

    methods: {

        async getGoodsByuId(u_id) {//按用户Id查询自己发布的商品
          var that=this;
           const params = {  u_id: this.u_id }
           console.log(params)
            myAxios
                 .get(`/goods/goods/findGoodsByuId`,params)
               // .get('http://localhost:10010/api/goods/category2/findAllGoodsCategry')
                .then(res => {
                    
                console.log(res);
                this.userPublishGoods=res;
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

</style>