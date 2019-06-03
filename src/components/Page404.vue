<template>
  <!-- Main content -->
  <div class="content">
    <div class="error-page">
      <h2 class="headline text-yellow">404</h2>
      <div class="error-content">
        <h3 style="padding-top: 50px;">
          <i class="fa fa-warning text-yellow"></i> SORRY! 页面未找到.
        </h3>
        <p>无法找到这个页面...</p>
      </div>
      <!-- /.error-content -->
    </div>
    <!-- /.error-page -->
  </div>
  <!-- /.content -->
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
