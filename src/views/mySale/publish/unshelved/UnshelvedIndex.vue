<template>
    <div id="unshelved">
        <unshelvedInf v-for="item in userUnshelvedGoods" :key="item" :unshelvedgoods="item"></unshelvedInf>
    </div>
</template>
<script>
import unshelvedInf from '@/views/mySale/publish/unshelved/UnshelvedInf'
import myAxios from "@/utils/myAxios";
export default {
    name:'unshelved',
    data(){
       return{
          u_id:1,
          userUnshelvedGoods:[],
         }
    },
     components:{
        unshelvedInf
    },
     methods: {

        async getUnshelvedGoodsByuId(u_id) {//按用户Id查询自己已下架的商品
          var that=this;
           const params = {  u_id: this.u_id }
           console.log(params)
            myAxios
                 .get(`/goods/goods/findUnshelveGoodsByuId`,params)
               // .get('http://localhost:10010/api/goods/category2/findAllGoodsCategry')
                .then(res => {
                   console.log("aaaaaa");
                   console.log(res);
                   this.userUnshelvedGoods=res;
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

</style>