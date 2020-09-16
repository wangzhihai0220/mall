<template>
  <div id="app">
      <div id="header">
          <!-- <a href="/question">问答</a>
          <a href="/detail">详情</a>
          <a href="/call">客服</a> -->
          <router-link to="/question" active-class="act">问答</router-link>
          <router-link to="/detail" active-class="act">详情</router-link>
          <router-link to="/call" active-class="act">客服</router-link>
          <router-link to="/left" active-class="act">左边</router-link>
          <router-link to="/right" active-class="act">右边</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Question from '@/components/Question.vue'
// import detail from '@/components/detail.vue'
// import Call from '@/components/Call.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Question,
    // detail,
    // Call
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#header{
  background-color: black;
  color: white;
  height: 40px;
  font-size: 16px;
  padding-left: 20px;
}
#header a{
  font-size: 18px;
  text-decoration: none;
  display: inline-block;
  margin-left: 10px;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 40px;
  color: white;
  font-family: inherit;
}
.act{
  background-color: brown;
}
</style>
