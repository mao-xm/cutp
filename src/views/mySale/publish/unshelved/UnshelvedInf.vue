<template>
    <div id="unshelvedInf">
         <el-card class="unshelvedInf-card">
             <div class="unshelvedInf-goods">
                <img src="http://www.xinhuanet.com/photo/2020-03/29/1125784084_15854580346431n.jpg" class="unshelvedInf-goods-img"/>
                <div class="unshelvedInf-goods-name">商品名 </div>
                <div class="unshelvedInf-goods-price">￥30</div>
                <div class="unshelvedInf-goods-unshelvedReason">下架原因</div>
                <div class="unshelvedInf-button">
                    <el-button type="danger" size="small" class="unshelvedInf-button-reset">重新发布</el-button>
                    <el-button type="danger" size="small" class="unshelvedInf-button-delete"> 删除</el-button>
                    <el-button type="danger" size="small" class="unshelvedInf-button-check"> 查看</el-button>
                </div>
            </div>
         </el-card>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
#unshelvedInf{
    width:70%;
    margin-left: 150px;
    margin-top: 5px;
}
.unshelvedInf-goods{
    width:100%;
    height: 150px;
    position: relative;
    margin-left: 70px;
}
.unshelvedInf-goods-img{
    width: 33%;
    height: 100%;
    position: relative;
    float: left;
}
.unshelvedInf-goods-name{
    width: 50%;
    font-size: 30px;
    position: relative;
    left: 50px;
    float: left;
}
.unshelvedInf-goods-price{
    width: 50%;
    font-size: 20px;
    left: 50px;
    color: red;
    margin-top: 5px;
    position: relative;
    float: left;
}
.unshelvedInf-goods-unshelvedReason{
    width: 50%;
    font-size: 15px;
    left: 50px;
    margin-top: 5px;
    color: gray;
    position: relative;
    float: left;
}
.unshelvedInf-button{
    width: 50%;
    position: relative;
    left: 50px;
    float: left;
    margin-top: 27px;
    margin-left: 50px;
}
.unshelvedInf-button-delete{
    margin-left: 30px;
}
.unshelvedInf-button-check{
    margin-left: 30px;
}
</style>
