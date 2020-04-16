<template>
    <div id="homeTypeInf">
        
        <!-- <el-table :data="typeList" borderstyle="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table> -->

        <div v-for="(item,i) in typeList" :key="i"  id="homeTypeInf-type">
            <div id="homeTypeInf-type-icon">
               <i :class="item.icon" id="homeTypeInf-icon" @click="clickTypeIcon(item.id,item.typeItem,flag)"></i>
            </div>
            <div id="homeTypeInf-type-name">
               <span class="homeTypeInf-typeName">{{item.typeItem}}</span>
            </div>
        </div>
         <!-- <i class="iconfontType icon-nvzhuang " id="homeTypeInf-icon"></i> 
        <span class="homeTypeInf-typeName">女装</span> -->
    </div>
</template>
<script>
//import '@/assets/iconfontType/iconfont.css'
export default {
    data () {
      return {
         typeList: [
            {id:'1',typeItem: '女装',icon:'iconfontType icon-nvzhuang'},
            {id:'2',typeItem: '男装',icon:'iconfontType icon-nanzhuang'},
            {id:'3',typeItem: '女鞋',icon:'iconfontType icon-nvxie'},
            {id:'4',typeItem: '男鞋',icon:'iconfontType icon-nanxie'},
            {id:'5',typeItem: '配饰',icon:'iconfontType icon-peishi'},
            {id:'6',typeItem: '数码产品',icon:'iconfontType icon-shuma'},
            {id:'7',typeItem: '电器',icon:'iconfontType icon-zu'},
            {id:'8',typeItem: '美妆',icon:'iconfontType icon-meizhuang'},
            {id:'9',typeItem: '生活百货',icon:'iconfontType icon-shenghuoyongpin'},
            {id:'10',typeItem: '运动健身',icon:'iconfontType icon-jianshen'},
            {id:'11',typeItem: '家居',icon:'iconfontType icon-jiajupeishi'},
            {id:'12',typeItem: '玩具',icon:'iconfontType icon-wanju'},
            {id:'13',typeItem: '宠物用品',icon:'iconfontType icon-chongwuyongpin'},
            {id:'14',typeItem: '园艺',icon:'iconfontType icon-yuanyiyongpin'},
            {id:'15',typeItem: '箱包',icon:'iconfontType icon-xiexiangbao'},
            {id:'16',typeItem: '乐器',icon:'iconfontType icon-leqi'},
            {id:'17',typeItem: '食品',icon:'iconfontType icon-shipinrihuakuaixiaopin'},
            {id:'18',typeItem: '学习用品',icon:'iconfontType icon-shu'}
         ],
        flag:'two',
      }
   },
   methods: {
    // 点击类别图标跳入按图标类别搜索的结果页面
        clickTypeIcon(typeid,typeName,flag){
            //alert("点击类别图标"+typeid+typeName+flag);
            console.log(typeid);
             this.$router.push({name:'goodSearch',params:{typeid,typeName,flag}});
        },
       

    },
}
</script>
<style scoped>
#homeTypeInf{
    width: 110%;
    height: 100%;
    margin-left: 20px;
}
#homeTypeInf-type{
    /* width: 20%;
    height: 100%; */
    width: 130px;
    margin-left: 35px;
    float: left;
    margin-bottom: 33px;
}
#homeTypeInf-type-icon{
    width: 64px;
    height: 40px;
    text-align: center; 
}
#homeTypeInf-type-name{
    width: 64px;
    height: 22px;
    /* padding-left: 2px; */
     text-align: center; 
    
}
/* #homeTypeInf-icon{
    width:100%;
    height: 100%;
} */

.iconfontType{
   font-size:35px;
   color: #dd3035;
}
.homeTypeInf-typeName{
    font-family: PingFangSC-Thin;
    color: #333333;
    /* margin-left: 3px; */
}
</style>