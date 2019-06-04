<template>
  <div id="app">
    <router-view/>

    <!-- Modal Error -->
    <div class="modal fade" :class="$store.state.modal_tips_data.class" id="modal_tips">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">{{ $store.state.modal_tips_data.title }}</h4>
          </div>
          <div class="modal-body">{{ $store.state.modal_tips_data.msg }}</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">确定</button>
          </div>
        </div>
      </div>
    </div>

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
