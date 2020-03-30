<template>
  <div id="my-integral">
     <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="demo-basic--circle">
        <div class="block"><el-avatar :size="80" :src="circleUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </el-col> 
    <div id="total">
      <span id="spa">3737</span>
    </div>
     </el-row>
   <el-tabs v-model="activeName" @tab-click="handleClick" class="el-t">
    <el-tab-pane label="全部" name="first"><myIntegralFirst></myIntegralFirst></el-tab-pane>
    <el-tab-pane label="收入" name="second"><myIntegralSecond></myIntegralSecond></el-tab-pane>
    <el-tab-pane label="支出" name="third"><myIntegralThird></myIntegralThird></el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
import myIntegralFirst from '@/views/integral/my_integral_in/my_integral_first'
import myIntegralSecond from '@/views/integral/my_integral_in/my_integral_second'
import myIntegralThird from '@/views/integral/my_integral_in/my_integral_third'
export default {
  name: 'my_integral',
   data() {
      return {
        activeName: 'first',
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      };
    },
    methods: {
      handleClick(tab, event) {
        //console.log(tab, event);
      }
    },
    components:{
      myIntegralFirst:myIntegralFirst,
      myIntegralSecond:myIntegralSecond,
      myIntegralThird:myIntegralThird
    }
}
</script>
<style>
#my-integral{
  position:absolute;
  top:70px;
  left:200px;
  width:1000px;
  height:1000px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.demo-avatar demo-basic{
  float: left;
}
#total{
  float: left;
  margin-left:30px;
  margin-top:20px;
}
.el-col-12{
  width:54px;
}
.el-tabs__item.is-active{
  color:#dd3035 !important;
}
.el-tabs__item:hover{
  color:#dd3035 !important;
}
.el-tabs__active-bar{
  background-color:#dd3035;
}
.el-tabs__header{
  top:40px;
}
.el-tabs__item{
  width:150px;
  text-align: center;
}
#spa{
  font-size:25px;
}
.el-tabs{
  width:1000px;
  /* margin-left:100px; */
}
</style>