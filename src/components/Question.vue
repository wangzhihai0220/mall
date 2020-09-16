<template>
  <div class="page">
    <h1>{{message}}</h1>
     <div id="moreques">
       <router-link to="/question/one" tag="li" active-class="active" >问题一</router-link>
       <router-link to="/question/two" tag="li" active-class="active">问题二</router-link>
       <router-link to="/question/three" tag="li" active-class="active">问题三</router-link>
     </div>
     <router-view></router-view> 
     <router-view name='sider'></router-view>
     <router-view name='homecontent'></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      message: '我是问答页面'
    }
  },
  components: {

  }
}
</script>

<style scoped>
#moreques{
  width: 100%;
  height: 200px;
}
li{
  width: 200px;
  height: 200px;
  background-color: chocolate;
  color: white;
  list-style: none;
  text-align: center;
  line-height: 200px;
  float: left;
  margin-left: 20px;
  color: white;
  text-decoration: none;
}
.active{
  background-color: blue;
}
#context{
  text-align: center;
  width: 100%;
  height: 1000px;
  background-color: gray;
}
</style>