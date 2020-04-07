<template>
    <div>
        <ul>
           <li v-for="(ie,i) in Outter" :key="i">
               <outter :igName="ie.igName" :ieChangeIntegral="ie.ieChangeIntegral"
                :reason="ie.reason" :ieCreateTime="ie.ieCreateTime" :url="ie.url"></outter>
          </li>
       </ul>
    </div>
</template>
<script>
import outter from '@/views/integral/my_integral_in/my_integral_io/outter'
export default {
    name:'my_integral_third',
     components:{
        outter:outter
    },
    data(){
        return {
            Outter:[
         {igName:'购物津贴',ieChangeIntegral:'-'+10,reason:'活动扣积分',ieCreateTime:'2018-01-30',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴',ieChangeIntegral:'-'+50,reason:'活动扣积分',ieCreateTime:'2018-05-20',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴',ieChangeIntegral:'-'+80,reason:'活动扣积分',ieCreateTime:'2018-02-09',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴',ieChangeIntegral:'-'+100,reason:'活动扣积分',ieCreateTime:'2018-10-03',url:'../../../../static/ie/hd.jpg'}
        ]
        }
    }
}
</script>
<style scoped>
ul{
  padding-left:10px !important;

} 
ul li{
    list-style: none;
    display:inline-block;
}
</style>