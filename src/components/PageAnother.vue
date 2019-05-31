<template>
  <div>
    <com-email></com-email>
  </div>
</template>

<script>
import ComEmail from "./page_another/ComEmail";

export default {
  name: "PageAnother",
  data() {
    return {
      msg: "THIS IS ANOTHER PAGE"
    };
  },
  components: { ComEmail: ComEmail },
  created() {
  }
};
</script>

<style scoped>
</style>
