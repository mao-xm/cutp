<template>
   <div>
        <ul>
           <li v-for="(ie,i) in Ainner" :key="i">
               <inner :gName="ie.gName" :ieChangeIntegral="ie.ieChangeIntegral"
                :reason="ie.reason" :ieCreateTime="ie.ieCreateTime" :url="ie.url"></inner>
          </li>
       </ul>
       <el-pagination
            background
            layout="prev, pager, next"
            :total="total2"
            :page-size="pageSize"
            @current-change="handleCurrentChange" 
            @size-change="handleSizeChange"
           class="pagination2" >
         
        </el-pagination>
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
        {gName:'吹风机1',ieChangeIntegral:'+'+100,reason:'购物送积分',ieCreateTime:'2018-06-30',url:'../../../../static/ie/cfj.jpg'},
        {gName:'短袖1',ieChangeIntegral:'+'+40,reason:'购物送积分',ieCreateTime:'2019-03-08',url:'../../../../static/ie/dx.jpg'},
        {gName:'口红1',ieChangeIntegral:'+'+60,reason:'购物送积分',ieCreateTime:'2019-09-23',url:'../../../../static/ie/kh.jpg'},
        {gName:'镜子1',ieChangeIntegral:'+'+80,reason:'购物送积分',ieCreateTime:'2019-02-16',url:'../../../../static/ie/jz.jpg'},
        {gName:'吹风机2',ieChangeIntegral:'+'+100,reason:'购物送积分',ieCreateTime:'2018-06-30',url:'../../../../static/ie/cfj.jpg'},
        {gName:'短袖2',ieChangeIntegral:'+'+40,reason:'购物送积分',ieCreateTime:'2019-03-08',url:'../../../../static/ie/dx.jpg'},
        {gName:'口红2',ieChangeIntegral:'+'+60,reason:'购物送积分',ieCreateTime:'2019-09-23',url:'../../../../static/ie/kh.jpg'},
        {gName:'镜子2',ieChangeIntegral:'+'+80,reason:'购物送积分',ieCreateTime:'2019-02-16',url:'../../../../static/ie/jz.jpg'},
        {gName:'吹风机3',ieChangeIntegral:'+'+100,reason:'购物送积分',ieCreateTime:'2018-06-30',url:'../../../../static/ie/cfj.jpg'},
        {gName:'短袖3',ieChangeIntegral:'+'+40,reason:'购物送积分',ieCreateTime:'2019-03-08',url:'../../../../static/ie/dx.jpg'},
        {gName:'口红3',ieChangeIntegral:'+'+60,reason:'购物送积分',ieCreateTime:'2019-09-23',url:'../../../../static/ie/kh.jpg'}
        // {},
        // {}
        ],
        pageSize: 1,
        currentPage:1,
        total2:4
        }
        },
     methods:{
     handleCurrentChange:function(cpage){
            this.$data.Ainner=[
                {gName:'吹风机1',ieChangeIntegral:'+'+100,reason:'购物送积分',ieCreateTime:'2018-06-30',url:'../../../../static/ie/cfj.jpg'},
                {gName:'短袖1',ieChangeIntegral:'+'+40,reason:'购物送积分',ieCreateTime:'2019-03-08',url:'../../../../static/ie/dx.jpg'},
                {gName:'口红1',ieChangeIntegral:'+'+60,reason:'购物送积分',ieCreateTime:'2019-09-23',url:'../../../../static/ie/kh.jpg'},
                {gName:'镜子1',ieChangeIntegral:'+'+80,reason:'购物送积分',ieCreateTime:'2019-02-16',url:'../../../../static/ie/jz.jpg'},
                {gName:'吹风机2',ieChangeIntegral:'+'+100,reason:'购物送积分',ieCreateTime:'2018-06-30',url:'../../../../static/ie/cfj.jpg'},
                {gName:'短袖2',ieChangeIntegral:'+'+40,reason:'购物送积分',ieCreateTime:'2019-03-08',url:'../../../../static/ie/dx.jpg'},
                {gName:'口红2',ieChangeIntegral:'+'+60,reason:'购物送积分',ieCreateTime:'2019-09-23',url:'../../../../static/ie/kh.jpg'},
                {gName:'镜子2',ieChangeIntegral:'+'+80,reason:'购物送积分',ieCreateTime:'2019-02-16',url:'../../../../static/ie/jz.jpg'},
                {gName:'吹风机3',ieChangeIntegral:'+'+100,reason:'购物送积分',ieCreateTime:'2018-06-30',url:'../../../../static/ie/cfj.jpg'},
                {gName:'短袖3',ieChangeIntegral:'+'+40,reason:'购物送积分',ieCreateTime:'2019-03-08',url:'../../../../static/ie/dx.jpg'},
                {gName:'口红3',ieChangeIntegral:'+'+60,reason:'购物送积分',ieCreateTime:'2019-09-23',url:'../../../../static/ie/kh.jpg'},
                {gName:'镜子3',ieChangeIntegral:'+'+80,reason:'购物送积分',ieCreateTime:'2019-02-16',url:'../../../../static/ie/jz.jpg'},
                {gName:'吹风机4',ieChangeIntegral:'+'+100,reason:'购物送积分',ieCreateTime:'2018-06-30',url:'../../../../static/ie/cfj.jpg'},
                {gName:'短袖4',ieChangeIntegral:'+'+40,reason:'购物送积分',ieCreateTime:'2019-03-08',url:'../../../../static/ie/dx.jpg'},
                {gName:'口红4',ieChangeIntegral:'+'+60,reason:'购物送积分',ieCreateTime:'2019-09-23',url:'../../../../static/ie/kh.jpg'},
                {gName:'镜子4',ieChangeIntegral:'+'+80,reason:'购物送积分',ieCreateTime:'2019-02-16',url:'../../../../static/ie/jz.jpg'},
                ]
            this.$data.currentPage=cpage;
            
            var begin=((this.$data.currentPage-1)*8)*(this.$data.pageSize);
         
            var end=(this.$data.currentPage*8)*(this.$data.pageSize);
             
             this.$data.Ainner= this.Ainner.slice(begin,end);
        // {},
        // {}
        }, 
        handleSizeChange:function(psize){
          this.$data.pageSize = psize;
          //this.$options.methods.chandedata();
        }
},
      created:function(){
           this.$data.total2=Math.ceil((this.$data.Ainner.length)/8);
           var begin=((this.$data.currentPage-1)*8)*(this.$data.pageSize);
           var end=(this.$data.currentPage*8)*(this.$data.pageSize);
          this.$data.Ainner= this.$data.Ainner.slice(begin,end);
    
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
.pagination2{
     margin-left:350px;
}
</style>