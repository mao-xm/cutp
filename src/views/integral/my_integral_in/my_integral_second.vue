<template>
   <div>
        <ul>
           <li v-for="(ie,i) in Ainner" :key="i">
       
        
         <div v-if="ie.ieType==2" id="inner1"><inner :gName="ie.goodsVo.gName" :ieChangeIntegral="ie.ieChangeIntegral"
        :ieId="ie.ieId"  reason="购买商品" :ieCreateTime="ie.ieCreateTime|timefilters" :url="ie.goodsVo.goodsMedias[0].gmUrl"></inner></div>
        
        </li>
        </ul>
      <el-pagination
                    small
                    layout="prev, pager, next"
                    @current-change="changePage"
                    @prev-click="changePage"
                    @next-click="changePage"
                    :page-size="pagination.size"
                    :current-page.sync="pagination.currentPage"
                    :total="pagination.total" class="pagination2">
        </el-pagination>
    </div>
</template>
<script>
import inner from '@/views/integral/my_integral_in/my_integral_io/inner'
import myAxios from "@/utils/myAxios";
export default {
    name:'my_integral_second',
    components:{
        inner:inner
    },
      data(){
        return{
        type:2,
        uId:1,
        Ainner:[
        
        ],
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
        
          this.getIe1();
   
       },
      async getIe1() {
            console.log("res");
            const that=this; 
            myAxios
              .get(`/integral/IEchangeController/SelectBytype/${this.type}/${this.uId}/${this.pagination.size}/${this.pagination.currentPage}`)
              .then(res => {
                   
                  this.Ainner=res.rows;
                  this.pagination.total=res.total;
                  
              }).catch(err => {
                  console.log(err);
                  });
      }
},
created:function(){
    this.uId=localStorage.getItem("uId");
}
}
</script>
<style scoped>
 ul{
  /* padding-left:10px !important; */
 margin-left:5px;
} 
ul li{
    list-style: none;
    display:inline-block;
}
.pagination2{
     margin-left:350px;
}
#inner1{
    margin-left:20px;
}
</style>