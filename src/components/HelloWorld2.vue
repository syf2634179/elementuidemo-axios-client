<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  	<h3>{{two}}</h3>
    <button @click="huanzhi">换值</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App222222222222222222222',
      count: 0
    }
  },
  computed: {
    two () {
      return this.$store.state.author + this.msg + '00000000000000000'
    }
  },
  methods: {
    huanzhi () {
      this.msg = 'syf' + (this.count++)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
