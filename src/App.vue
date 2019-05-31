<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  created(){
    let user = Cookies.get('user');
    let token = Cookies.get('token');
    console.log(user,token);
    if(!user || !token){
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
/* #app {
} */
.country-flag {
  height: 18px;
}
.language-select-item {
  display: flex;
  align-items: center;
}
.language-select-item img {
  height: 24px;
  margin-right: 8px;
}
</style>
