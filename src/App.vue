<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  created() {
    let user = Cookies.get("user");
    let token = Cookies.get("token");
    console.log(user, token);
    if (!user || !token) {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
#app {
  /* background: #eee; */
}
</style>
