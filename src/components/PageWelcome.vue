<template>
  <div>WELCOME<small>{{ msg }}</small></div>
</template>

<script>
export default {
  data () {
    return {
      msg: this.$store.state.msg,
    }
  },
  created(){
  }
}
</script>

<style scoped>
</style>
