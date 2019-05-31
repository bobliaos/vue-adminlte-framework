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
    $.get(CONFIG.host + CONFIG.path + "query",(value)=>{
      console.log("jQuery version:",$.fn.jquery);
    });
  }
}
</script>

<style scoped>
</style>
