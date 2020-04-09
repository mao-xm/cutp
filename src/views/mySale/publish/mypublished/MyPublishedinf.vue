<template>
    <div id="publishedInf">
         <el-card class="publishedInf-card">
             <div class="publishedInf-goods">
                <img src="http://www.xinhuanet.com/photo/2020-03/29/1125784084_15854580346431n.jpg" class="publishedInf-goods-img"/>
                <div class="publishedInf-goods-name">商品名 </div>
                <div class="publishedInf-goods-price">￥30</div>
                <div class="publishedInf-button">
                    <el-button type="danger" size="small" class="publishedInf-button-write">编辑</el-button>
                    <el-button type="danger" size="small" class="publishedInf-button-unshelved"> 下架</el-button>
                    <el-button type="danger" size="small" class="publishedInf-button-check"> 查看</el-button>
                </div>
            </div>
         </el-card>
         <div id="publishedInf-page">
            <el-pagination background layout="prev, pager, next" 
                 :total="totalnum" :page-size="pageSizeNum"
                 @current-change="handleCurrentChange" 
                 @size-change="handleSizeChange"
                 style="margin:0px auto;">
            </el-pagination>
         </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pageSizeNum: 3,
            currentPage:1,
            totalnum:5,
            disp:false
        }
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
}
</script>

<style scoped>
#publishedInf{
    width:70%;
    margin-left: 150px;
    margin-top: 5px;
}
.publishedInf-card{
    float: left;
}
.publishedInf-goods{
    width:100%;
    height: 150px;
    position: relative;
    margin-left: 70px;
}
.publishedInf-goods-img{
    width: 33%;
    height: 100%;
    position: relative;
    float: left;
}
.publishedInf-goods-name{
    width: 50%;
    font-size: 30px;
    position: relative;
    left: 50px;
    float: left;
}
.publishedInf-goods-price{
    width: 50%;
    font-size: 20px;
    left: 100px;
    color: red;
    position: relative;
    float: left;
}
.publishedInf-button{
    width: 50%;
    position: relative;
    left: 50px;
    float: left;
    margin-top: 53px;
    margin-left: 50px;
}
.publishedInf-button-unshelved{
    margin-left: 30px;
}
.publishedInf-button-check{
    margin-left: 30px;
}
#publishedInf-page /deep/.el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color:#F56C6C;
}
/* #publishedInf-page{
    position:fixed;固定位置 */
	/* z-index:99;设置优先级显示，保证不会被覆盖	 */
    /* right:30px; bottom:30px;
}  */
</style>
