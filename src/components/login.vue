<template>
  <div class="login">
    <div @click="test">123</div>
    <el-button type="primary">123</el-button>
  </div>
</template>

<script type="text/ECMAScript-6">
  export default {
    name: 'home',
    components: {  },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      test () {
        this.$router.push('/home');
      }
    }
  }

</script>
