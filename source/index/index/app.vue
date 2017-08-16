<style>

</style>

<template>
  <div>
    <h1>node.js+express+mysql+webpack+vue+axios多页面开发</h1>
    <h2>前后端完全分离，利用axios与后端进行数据交互</h2>
    <h3>开发完成，利用webpack进行打包编译后，只需把webpages文件夹与webstatics文件夹放到服务器相应目录，然后即可访问</h3>
    <pre v-if="getData!=null">
        {{getData}}
    </pre>
  </div>
</template>

<script>
export default {
    data () {
        return {
            getData:null
        }

    },
    created(){
        var _this=this;
        this.$axios({
            method: 'get',
            url: '/testApi'
         }).then(function(result){
            _this.getData=result.data;
            console.log(JSON.stringify(result))
         });
    }
}
</script>
