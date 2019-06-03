<template>
  <section class="content">
    <div class="error-page">
      <h2 class="headline text-red">500</h2>

      <div class="error-content">
        <h3 style="padding-top:50px;">
          <i class="fa fa-warning text-red"></i> 服务器出错了.
        </h3>

        <p>
          服务器抢修中...
        </p>
      </div>
    </div>
    <!-- /.error-page -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: this.$store.state.msg
    };
  },
  created() {}
};
</script>

<style scoped>
</style>
