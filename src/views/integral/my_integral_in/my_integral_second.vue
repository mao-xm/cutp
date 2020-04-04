<template>
   <div>
        <ul>
           <li v-for="(ie,i) in Ainner" :key="i">
               <inner :gName="ie.gName" :ieChangeIntegral="ie.ieChangeIntegral"
                :reason="ie.reason" :ieCreateTime="ie.ieCreateTime" :url="ie.url"></inner>
          </li>
       </ul>
    </div>
</template>
<script>
import inner from '@/views/integral/my_integral_in/my_integral_io/inner'
export default {
    name:'my_integral_second',
    components:{
        inner:inner
    },
      data(){
        return{
        Ainner:[
        {gName:'吹风机',ieChangeIntegral:'+'+100,reason:'购物送积分',ieCreateTime:'2018-06-30',url:'../../../../static/ie/cfj.jpg'},
        {gName:'短袖',ieChangeIntegral:'+'+40,reason:'购物送积分',ieCreateTime:'2019-03-08',url:'../../../../static/ie/dx.jpg'},
        {gName:'口红',ieChangeIntegral:'+'+60,reason:'购物送积分',ieCreateTime:'2019-09-23',url:'../../../../static/ie/kh.jpg'},
        {gName:'镜子',ieChangeIntegral:'+'+80,reason:'购物送积分',ieCreateTime:'2019-02-16',url:'../../../../static/ie/jz.jpg'}
        // {},
        // {}
        ]}
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