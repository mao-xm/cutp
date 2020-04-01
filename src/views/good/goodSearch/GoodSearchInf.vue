<template>
    <div id="goodSearchInf"  @click="clickGoodInf">
       <el-card class="goodSearchInf-card">
            <img src="http://www.xinhuanet.com/photo/2020-03/29/1125784084_15854580346431n.jpg" class="goodSearchInf-card-img"/>
            <div class="goodSearchInf-card-name">商品名 </div>
            <div class="goodSearchInf-card-price">￥30</div>
       </el-card>

    </div>
</template>
<script>
export default {
     methods: {
        clickGoodInf(){
            console.log("lll");
            alert("拉拉");
        }
    },
}
</script>
<style scoped>
#goodSearchInf{
    margin-bottom: 20px;
}
.goodSearchInf-card{
    width: 20%;
    height: 100%;
    position: relative;
    margin-left: 35px;
    float: left;
    margin-bottom: 20px;
}

.goodSearchInf-card-img{
    width: 100%;
    height: 100%;
    position: relative;
}
.goodSearchInf-card-name{
    width: 50%;
    font-size: 18px;
    position: relative;
    margin-top:4px;
    /* left: 50px; */
}
.goodSearchInf-card-price{
    width: 50%;
    font-size: 15px;
    /* left: 58px; */
    color: red;
    position: relative;
}
</style>