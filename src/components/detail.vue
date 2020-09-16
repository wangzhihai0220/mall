<template>
  <div class="page">
    <h1>{{message}}</h1>
    <router-view name="left"></router-view>
    <router-view name="right"></router-view>
  </div>
  
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      message: '我是详情页面'
    }
  },
  components: {

  }
}
</script>

<style scoped>
</style>