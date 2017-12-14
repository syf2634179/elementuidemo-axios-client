<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="list-group">
      <router-link class="list-group-item" to="/">Home</router-link>
      <router-link class="list-group-item" to="/HelloWorld2">About</router-link>
    </div>
    <router-view/>
    <p>
      Copyright&nbsp;&copy;&nbsp;{{author}} - 2016 All rights reserved{{two}}{{logoMsg}}
    </p>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      logoMsg: 'syf'
    }
  },
  computed: {
    author () {
      return this.$store.state.author
    },
    two () {
      return this.$store.state.logo
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
