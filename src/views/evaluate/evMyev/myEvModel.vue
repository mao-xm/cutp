<template>
    <div id="myEvModel">
        <div id="myEvModel1">
            <div id="myEvModel1-1">评价内容</div>
            <div id="myEvModel1-2">评价时间</div>
            <div id="myEvModel1-3">
              <img src="../../../../src/assets/Login/toux.jpg" width="100px" height="100px" id="img1">
              <img src="../../../../src/assets/Login/txb.jpg" width="100px" height="100px" id="img2">
            </div>
        </div>
        <div id="myEvModel2">
            <img src="../../../assets/goods/kouhong.jpg" width="100px" height="100px" id="img3">
            <div id="gp1">
                <div id="gName1">商品名</div>
                <div id="gPrice1">钱</div>
                <div id="button1">
                <el-button type="danger" plain>查看</el-button>
                </div>
            </div>
        </div>
        <div id="myEvModel3">
            <div id="button2">
            <el-button type="danger" plain>查看</el-button>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
#myEvModel{
    margin-left:270px;
    margin-top:50px;
    border:1px solid #ccc;
    height:440px;
    width:702px;
}
#myEvModel1-1{
    width:400px;
    height:50px;
    margin-left:120px;
    margin-top:20px;
}
#myEvModel2{
    border:1px solid #ccc;
    height:120px;
    width:700px;
    margin-top:20px;
}
#myEvModel1-3{
   height:100px;
}
#myEvModel1-2{
    width:100px;
    height:30px;
    margin-left:570px;
}
#img1,#img2{
    margin-left:10px;
   
}
#gp1{
margin-left:50px;
padding-top:10px;
width:400px;
float:left;
}
#gName1{
    font-size:20px;
}
#button1{
    width:100px;
    height:100px;
    margin-left:400px;
}
#button2{
    margin-top:30px;
    margin-left:500px;
}
#gPrice1{
    margin-top:10px;
}
#img3{
    float:left;
     margin-top:10px;
     margin-left:10px;
}
</style>