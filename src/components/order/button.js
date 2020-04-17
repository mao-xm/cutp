/**
 * 请求退货退款函数
 */
function askReturn(ruleForm){
    this.$confirm('确认退货退款？')
        .then(_ => {
            console.log("succes");
            this.$refs[ruleForm].validate((valid) => {
                console.log("succes");
                if (valid) {
                    const askReturnParams = { oId: this.order.oId, uId: this.order.user.uId, oStatus: this.order.oStatus,orderReturn: this.orderReturn,orderReturnMedias: this.orderReturnMedias }
                    console.log(this.orderReturn)
                    console.log(this.orderReturnMedias)
                    myAxios
                        .post(`/order/order/askReturn`,askReturnParams)
                        .then(res => {
                            if(res == true){
                                const query = {type: 10}
                                console.log(query)
                                this.$router.push({path:'/orderTemp',query})
                            }
                        }).catch(err => {
                            this.$notify.error
                            ({
                                title: '失败',
                                message: err
                            });
                        });
                }
            });
        })
        .catch(_ => {

            });
}
export {//关键
    askReturn
}