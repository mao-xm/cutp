<template>
    <div id="return-detail">
        <el-card class="return-detail-information" >
            <div slot="header" class="clearfix">
                <span class="return-detail-card-span" v-if="orderReturnVo.orStatus == 1">买家申请退货退款</span>
                <span class="return-detail-card-span" v-if="orderReturnVo.orStatus == 2">卖家同意申请，已退款</span>
                <span class="return-detail-card-span" v-if="orderReturnVo.orStatus == 3">卖家拒绝申请</span>
            </div>
            <p>订单：{{orderReturnVo.oId}}</p>
            <p>退货退款理由：{{orderReturnVo.orReason}}</p>
            <p>图片/视频：</p>
            <div class="return-detail-medias">
                    <el-image
                        v-for="item in orderReturnVo.imgs"
                        :key="item"
                            class="return-detail-media"
                        :preview-src-list ="orderReturnVo.imgs"
                        :src="item"
                    ></el-image>
                    <video class="return-detail-media" controls="controls" autoplay="autoplay" v-for="item in orderReturnVo.vedios" :key="item">
                        <source :src="item" type="video/mp4" />
                    </video> 
            </div>
            <div class="return-detail-buttons" v-if="param.isBuy">
                <el-button type="danger" class="order-item-button" round v-if="orderReturnVo.orStatus == 1 || orderReturnVo.orStatus == 3" @click="backout()">撤销申请</el-button>
                <el-button type="danger" class="order-item-button" round v-if="orderReturnVo.orStatus == 3">举报</el-button>
            </div>
            <div class="return-detail-buttons" v-if="!param.isBuy">
                <el-button type="danger" class="order-item-button" round v-if="orderReturnVo.orStatus == 1 || orderReturnVo.orStatus == 3" @click="agree()">同意</el-button>
                <el-button type="danger" class="order-item-button" round v-if="orderReturnVo.orStatus == 1"  @click="refused()">拒绝</el-button>
            </div>
            <div class="return-detail-bottom"></div>
    </el-card>
    </div>
</template>
<script>
import myAxios from "@/utils/myAxios";
export default {
    created(){
        console.log('aa')
        this.param = this.$route.query.param
        console.log(this.param)
        this.getReturnDetail(this.param)
    },
    methods:{
        /**
         * 同意函数
         */
        async agree(){
            this.$confirm('确认同意该申请？')
            .then(_ => {
                console.log("bbbb")
                myAxios
                .post(`/order/order/goReturn/${this.orderReturnVo.orId}`)
                .then(res => {
                    if(res == true){
                        const query = {type: 11}
                        console.log(query)
                        this.$router.push({path:'/orderTemp',query})
                    }
                }).catch(err => {
                    console.log(err,'bb');
                    });
            })
            .catch(_ => {});
        },
        /**
         * 拒绝函数
         */
        async refused(){
            this.$confirm('确认拒绝该申请？')
            .then(_ => {
                console.log("bbbb")
                myAxios
                .post(`/order/order/refusedReturn/${this.orderReturnVo.orId}`)
                .then(res => {
                    if(res == true){
                        const query = {type: 12}
                        console.log(query)
                        this.$router.push({path:'/orderTemp',query})
                    }
                }).catch(err => {
                    console.log(err,'bb');
                    });
            })
            .catch(_ => {});
        },
        /**
         * 撤销函数
         */
        async backout(){
            this.$confirm('确认撤销该申请？')
            .then(_ => {
                console.log("bbbb")
                myAxios
                .post(`/order/order/backoutReturn/${this.orderReturnVo.orId}`)
                .then(res => {
                    if(res == true){
                        const query = {type: 13}
                        console.log(query)
                        this.$router.push({path:'/orderTemp',query})
                    }
                }).catch(err => {
                    console.log(err,'bb');
                    });
            })
            .catch(_ => {});
        },
        /**
         * 查询详细信息函数
         */
        async getReturnDetail(param){
            myAxios
            .post(`/order/order/getReturnDetail/${param.oId}/${param.uId}/${param.oStatus}/${param.isBuy}`)
            .then(res => {
                this.orderReturnVo = res
                console.log(this.orderReturnVo,'ccc')
                this.$set(this.orderReturnVo,'imgs',[])
                this.$set(this.orderReturnVo,'vedios',[])
                for(let item of this.orderReturnVo.orderReturnMedias){
                    if(item.ormType == 0){
                        console.log('bb')
                        this.orderReturnVo.imgs.push(item.ormUrl)
                    }else{
                        this.orderReturnVo.vedios.push(item.ormUrl)
                    }
                }
                
            }).catch(err => {
                console.log(err,'bb');
                });
        }
    },
    data(){
        return{
            param:null,
            orderReturnVo:{oId: 0}
        }
    }
}
</script>
<style scoped>
    .return-detail-information{
        position: relative;
        width: 80%;
        margin: auto auto;
        margin-top: 20px;
    }
    .return-detail-medias{
        width: 90%;
        display: flex;
        flex-wrap: wrap;
    }
    .return-detail-media{
        width: 200px;
        height: 200px;
    }
    .return-detail-bottom{
        height: 50px;
    }
    .return-detail-buttons{
        position: absolute;
        height: 100px;
        right:  5%;
        /* margin-bottom: 10px; */
        /* margin-top: 20px; */
        /* bottom: 10px; */
    }
</style>