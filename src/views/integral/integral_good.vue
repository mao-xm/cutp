<template>
  <div id="integral-goods">
    <h1>积分商品</h1>
    <div>
       用户id:<input v-model="ca1_id" type="text" placeholder="请输入用户id">
      <button v-on:click="test">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'integral_good.vue',
  data(){
    return {
      ca1_id:''
      }
  },
  methods:{
    test(){
    // this.$axios({
    //     url: "http://api.gomai.com/api/goods/category1/list?ca1_id=1",  // 后台接口
    //     method:"post",  // 请求方式
    // }).then(response => {  // 请求成功
    //    document.write('请求成功');
    //     document.write(response.data);
    // }).catch(error => {  // 请求失败
    //     document.write('请求失败');
    //     document.write(error);
    // })


  // this.$axios.post('http://api.gomai.com/api/goods/category1/list?ca1_id=1')
  // .then(function (response) {
  //   document.write("请求成功");
  //   console.log(response);
  // })
  // .catch(function (error) {
  //    document.write("请求失败");
  //   console.log(error);
  // });

  this.$axios.get('http://api.gomai.com/api/goods/category1/list?ca1_id=1',JSON.stringify(this.ca1_id))
  .then(data=>{
    document.write("请求成功")
    console.log(data)
  })
  .catch(err=>{
    document.write("请求失败")
    console.log(err)
  })
    }
  }
}
</script>
<style>
#integral-goods{
  position:absolute;
  left:200px;
}
</style>