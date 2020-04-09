<template>
    <div>
        <ul>
           <li v-for="(ie,i) in Outter" :key="i">
               <outter :igName="ie.igName" :ieChangeIntegral="ie.ieChangeIntegral"
                :reason="ie.reason" :ieCreateTime="ie.ieCreateTime" :url="ie.url"></outter>
          </li>
       </ul>
       <el-pagination
            background
            layout="prev, pager, next"
            :total="total3"
            :page-size="pageSize"
            @current-change="handleCurrentChange" 
            @size-change="handleSizeChange"
           class="pagination3" >
        </el-pagination>
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
         {igName:'购物津贴1',ieChangeIntegral:'-'+10,reason:'活动扣积分',ieCreateTime:'2018-01-30',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴1',ieChangeIntegral:'-'+50,reason:'活动扣积分',ieCreateTime:'2018-05-20',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴1',ieChangeIntegral:'-'+80,reason:'活动扣积分',ieCreateTime:'2018-02-09',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴1',ieChangeIntegral:'-'+100,reason:'活动扣积分',ieCreateTime:'2018-10-03',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴2',ieChangeIntegral:'-'+10,reason:'活动扣积分',ieCreateTime:'2018-01-30',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴2',ieChangeIntegral:'-'+50,reason:'活动扣积分',ieCreateTime:'2018-05-20',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴2',ieChangeIntegral:'-'+80,reason:'活动扣积分',ieCreateTime:'2018-02-09',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴2',ieChangeIntegral:'-'+100,reason:'活动扣积分',ieCreateTime:'2018-10-03',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴3',ieChangeIntegral:'-'+10,reason:'活动扣积分',ieCreateTime:'2018-01-30',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴3',ieChangeIntegral:'-'+50,reason:'活动扣积分',ieCreateTime:'2018-05-20',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴3',ieChangeIntegral:'-'+80,reason:'活动扣积分',ieCreateTime:'2018-02-09',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴3',ieChangeIntegral:'-'+100,reason:'活动扣积分',ieCreateTime:'2018-10-03',url:'../../../../static/ie/hd.jpg'},
         
        ],
        pageSize: 1,
        currentPage:1,
        total3:4
        }
    },
     methods:{
     handleCurrentChange:function(cpage){
           this.$data.Outter=
        [
         {igName:'购物津贴1',ieChangeIntegral:'-'+10,reason:'活动扣积分',ieCreateTime:'2018-01-30',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴1',ieChangeIntegral:'-'+50,reason:'活动扣积分',ieCreateTime:'2018-05-20',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴1',ieChangeIntegral:'-'+80,reason:'活动扣积分',ieCreateTime:'2018-02-09',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴1',ieChangeIntegral:'-'+100,reason:'活动扣积分',ieCreateTime:'2018-10-03',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴2',ieChangeIntegral:'-'+10,reason:'活动扣积分',ieCreateTime:'2018-01-30',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴2',ieChangeIntegral:'-'+50,reason:'活动扣积分',ieCreateTime:'2018-05-20',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴2',ieChangeIntegral:'-'+80,reason:'活动扣积分',ieCreateTime:'2018-02-09',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴2',ieChangeIntegral:'-'+100,reason:'活动扣积分',ieCreateTime:'2018-10-03',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴3',ieChangeIntegral:'-'+10,reason:'活动扣积分',ieCreateTime:'2018-01-30',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴3',ieChangeIntegral:'-'+50,reason:'活动扣积分',ieCreateTime:'2018-05-20',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴3',ieChangeIntegral:'-'+80,reason:'活动扣积分',ieCreateTime:'2018-02-09',url:'../../../../static/ie/hd.jpg'},
         {igName:'购物津贴3',ieChangeIntegral:'-'+100,reason:'活动扣积分',ieCreateTime:'2018-10-03',url:'../../../../static/ie/hd.jpg'}
          
        ]
            this.$data.currentPage=cpage;
            
            var begin=((this.$data.currentPage-1)*8)*(this.$data.pageSize);
         
            var end=(this.$data.currentPage*8)*(this.$data.pageSize);
             
             this.$data.Outter= this.$data.Outter.slice(begin,end);
        // {},
        // {}
        }, 
        handleSizeChange:function(psize){
          this.$data.pageSize = psize;
          //this.$options.methods.chandedata();
        }
      },
      created:function(){
           this.$data.total3=Math.ceil((this.$data.Outter.length)/8);
           var begin=((this.$data.currentPage-1)*8)*(this.$data.pageSize);
           var end=(this.$data.currentPage*8)*(this.$data.pageSize);
           this.$data.Outter= this.$data.Outter.slice(begin,end);
    
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
.pagination3{
     margin-left:350px;
}
</style>