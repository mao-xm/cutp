<template>
    <div id="mif">
        <ul>
        <li v-for="(ie,i) in Ainner" :key="i">
          <div v-if="ie.ieType==2" id="inner"><inner :gName="ie.goodsVo.gName" :ieChangeIntegral="ie.ieChangeIntegral"
          :ieId="ie.ieId" reason="购买商品" :ieCreateTime="ie.ieCreateTime|timefilters" :url="ie.goodsVo.goodsMedias[0].gmUrl"></inner></div>
        <div v-if="ie.ieType==1" id="outter"><outter :igName="ie.integralGoods.igName" :ieChangeIntegral="ie.ieChangeIntegral"
        :ieId="ie.ieId" reason="兑换积分商品" :ieCreateTime=" ie.ieCreateTime|timefilters " :url="ie.integralGoods.igImg"></outter></div>
         <div v-if="ie.ieType==3" id="outter1"><outter1 :gName="ie.goodsVo.gName" :ieChangeIntegral="ie.ieChangeIntegral"
         :ieId="ie.ieId" reason="退货退款" :ieCreateTime="ie.goodsVo.gCreateTime|timefilters" :url="ie.goodsVo.goodsMedias[0].gmUrl"></outter1></div>
        
        </li>
           
       </ul>
       <!-- <ul v-if="disp">
           
       </ul> -->
        <el-pagination
                    small
                    layout="prev, pager, next"
                    @current-change="changePage"
                    @prev-click="changePage"
                    @next-click="changePage"
                    :page-size="pagination.size"
                    :current-page.sync="pagination.currentPage"
                    :total="pagination.total" class="pagination">
        </el-pagination>
    </div>
   
</template>

<script>
import inner from '@/views/integral/my_integral_in/my_integral_io/inner'
import outter from '@/views/integral/my_integral_in/my_integral_io/outter'
import outter1 from '@/views/integral/my_integral_in/my_integral_io/outter1'
import myAxios from "@/utils/myAxios";
export default {
    name:'my_integral_first',
    components:{
        inner:inner,
        outter:outter,
        outter1:outter1
    },
    data(){
        return{
        Ainner:[

        ],
       
        type:1,
        uId:1,
         pagination:{
                total: 4,
                size: 6,
                currentPage:1
          }
        }
    },
    filters: {
    timefilters(val) {
      if (val == null || val == "") {
        return "暂无时间";
      } else {
        let d = new Date(val);   //val为取到的后台时间
        let month =
          d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
        let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
        let hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
        let min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
        let sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
       let times=d.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + sec;
        return times;
      }
    }
  },
     methods:{
      changePage(){
        
          this.getIe();
   
       },
        async getIe() {
            console.log("res");
            const that=this; 
            myAxios
              .get(`/integral/IEchangeController/SelectBytype/${this.type}/${this.uId}/${this.pagination.size}/${this.pagination.currentPage}`)
              .then(res => {
                   
                  this.Ainner=res.rows;
                  this.pagination.total=res.total;
                  console.log(res)
                  
              }).catch(err => {
                  console.log(err);
                  });
      }
        
      },
      created:function(){
         this.uId=localStorage.getItem("uId");
         this.getIe();  
      }
}
</script>
<style scoped>
 /* ul{
  padding-left:30px !important;
  display:inline-block;
  width:800px;
} 
ul li{
    margin-left:20px; 
    list-style: none;
    display:inline-block;
} */
#inner{
  margin-left:20px;
}
#outter{
   margin-left:20px;
}
#outter1{
   margin-left:20px;
}
ul{
  display:inline-block;
  margin-left:5px;
  /* width:800px; */
  /* margin-left:0px; */
} 
ul li{
    /* margin-left:10px; */
    list-style: none;
    display:inline-block;
}
.pagination{
    margin-left:350px;
}
</style>