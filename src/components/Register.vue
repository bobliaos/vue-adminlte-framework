<template>
  <div class="register-box">
    <div class="register-logo">
      <b>OTS</b>UserCenter
    </div>

    <div class="register-box-body">
      <p class="login-box-msg">用户注册</p>

      <form action="/#/home" method="post">
        <div class="form-group has-feedback">
          <input type="text" class="form-control" placeholder="请输入手机号码或邮箱地址">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>

        <div class="row form-group">
          <div class="col-xs-7">
            <input type="text" class="form-control" placeholder="请输入验证码">
          </div>
          <!-- /.col -->
          <div class="col-xs-5">
            <button class="btn btn-primary btn-flat" style="width:100%;">发送验证码</button>
          </div>
          <!-- /.col -->
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="请输入密码">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="请确认密码">
          <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <div class="checkbox icheck">
              <label>
                <input type="checkbox" style="margin-left:0px;">&nbsp;&nbsp;&nbsp;&nbsp;我已同意
                <a href="#">服务协议</a>
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">注册</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      <div class="text-center">
        <router-link to="login">我已经有一个账号</router-link>
      </div>
    </div>
    <!-- /.form-box -->
  </div>
  <!-- /.register-box -->
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
