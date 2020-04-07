<template>
    <div id="mif">
        <ul>
            
            <li v-for="(ie,i) in Ainner" :key="i">
            <inner :gName="ie.gName" :ieChangeIntegral="ie.ieChangeIntegral"
            :reason="ie.reason" :ieCreateTime="ie.ieCreateTime" :url="ie.url"></inner>
            </li>
            <template v-if="disp">
            <li v-for="(ie,i) in Outter" :key="i">
                <outter :igName="ie.igName" :ieChangeIntegral="ie.ieChangeIntegral"
                    :reason="ie.reason" :ieCreateTime="ie.ieCreateTime" :url="ie.url"></outter>
            </li>
            </template>
       </ul>
       <!-- <ul v-if="disp">
           
       </ul> -->
        <el-pagination
            background
            layout="prev, pager, next"
            :total="total1"
            :page-size="pageSize"
            @current-change="handleCurrentChange" 
            @size-change="handleSizeChange"
            style="margin:0px auto;" >
        </el-pagination>
    </div>
   
</template>

<script>
import inner from '@/views/integral/my_integral_in/my_integral_io/inner'
import outter from '@/views/integral/my_integral_in/my_integral_io/outter'
export default {
    name:'my_integral_first',
    components:{
        inner:inner,
        outter:outter
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
        total1:4,
        disp:false
        }
    },
    watch:{
        // if(this.currentPage==this.total)

    },
     methods:{
         changedata(){
            var begin=((this.currentPage-1)*4)*(this.pageSize);
            var end=(this.currentPage*4)*(this.pageSize);
            this.Ainner= this.Ainner.slice(begin,end);
            this.Outter= this.Outter.slice(begin,end);
         },
        handleCurrentChange:function(cpage){
            console.log(this.$data.total);
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
        {gName:'口红3',ieChangeIntegral:'+'+60,reason:'购物送积分',ieCreateTime:'2019-09-23',url:'../../../../static/ie/kh.jpg'}
        
        // {},
        // {}
        ];
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
        // {}
        
            this.$data.currentPage=cpage;
            
            var begin=((this.$data.currentPage-1)*4)*(this.$data.pageSize);
         
            var end=(this.$data.currentPage*4)*(this.$data.pageSize);
             
            this.$data.Ainner= this.Ainner.slice(begin,end);
            this.$data.Outter= this.$data.Outter.slice(begin,end);
              console.log( this.$data.Ainner);
            if(this.$data.Ainner.length==this.$data.total1&(this.$data.Ainner.length/8)!==0){
               this.$data.disp=true;
               
            }
            else{
                this.$data.disp=false;
            }
        },
        handleSizeChange:function(psize){
          this.$data.pageSize = psize;
          //this.$options.methods.chandedata();
        }
      },
      created:function(){
           this.$data.total1=Math.ceil((this.$data.Ainner.length+this.$data.Outter.length)/8);
            var begin=((this.$data.currentPage-1)*4)*(this.$data.pageSize);
            var end=(this.$data.currentPage*4)*(this.$data.pageSize);
            this.$data.Ainner= this.$data.Ainner.slice(begin,end);
            this.$data.Outter= this.$data.Outter.slice(begin,end);
      }
}
</script>
<style scoped>
 ul{
  padding-left:10px !important;
  display:inline-block;

} 
ul li{
    list-style: none;
    display:inline-block;
}
</style>