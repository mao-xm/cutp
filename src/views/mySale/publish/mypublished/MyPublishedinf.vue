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
            <el-pagination background layout="prev, pager, next" :total="100" page-size="3">
            </el-pagination>
         </div>
    </div>
</template>
<script>
export default {
    
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
#publishedInf-page{
    position:fixed;/*固定位置*/
	z-index:99;/*设置优先级显示，保证不会被覆盖*/	
    right:30px; bottom:30px;
}
</style>
