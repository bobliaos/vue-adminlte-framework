<template>
  <div class="hello">{{ msg }}
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'Welcome',
  data () {
    return {
      msg: this.$store.state.msg,
    }
  },
  created(){
    this.$store.state.API.test();
  }
}
</script>

<style scoped>
</style>
