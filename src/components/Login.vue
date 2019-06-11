<template>
  <div>
    <div class="login-box">
      <!-- Nav tabs -->
      <ul class="nav nav-pills nav-justified" role="tablist" id="myTabs">
        <li role="presentation" class="active">
          <a href="#login" aria-controls="home" role="tab" data-toggle="tab">登录</a>
        </li>
        <li role="presentation">
          <a href="#qrcode" aria-controls="profile" role="tab" data-toggle="tab">扫码</a>
        </li>
      </ul>

      <!-- Tab panes -->
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="login">
          <div>
            <!-- <div class="login-logo">
          <b>OTS</b> UserCenter
            </div>-->
            <!-- /.login-logo -->
            <div class="login-box-body">
              <h4 class="login-box-msg">请登陆</h4>

              <!-- <form action="#" method="post"> -->
              <div class="form-group has-feedback">
                <input
                  type="phone"
                  class="form-control"
                  v-model="form_data.phone"
                  placeholder="请输入手机号码或邮箱地址"
                >
                <span class="glyphicon glyphicon-phone form-control-feedback"></span>
              </div>
              <div class="form-group has-feedback">
                <input
                  type="password"
                  class="form-control"
                  v-model="form_data.psw"
                  placeholder="请输入密码"
                >
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div class="row">
                <div class="col-xs-8">
                  <div class="checkbox icheck">
                    <label>
                      <input
                        type="checkbox"
                        v-model="form_data.remember_checked"
                        style="margin-left:0px;"
                      >&nbsp;&nbsp;&nbsp;&nbsp;记住我
                    </label>
                  </div>
                </div>
                <!-- /.col -->
                <div class="col-xs-4">
                  <button
                    type="submit"
                    @click="onLoginBtnClick"
                    class="btn btn-primary btn-block btn-flat"
                  >登录</button>
                </div>
                <!-- /.col -->
              </div>
              <!-- </form> -->
              <hr>
              <div style="padding:0px 0px 20px 0px;">
                <div class="pull-left">
                  忘记密码?
                  <router-link to="reset">马上找回</router-link>
                </div>
                <div class="pull-right">
                  还没账号?
                  <router-link to="/register">我要注册</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div role="tabpanel" class="tab-pane text-center" id="qrcode" style="padding:20px;">
          <h4 class="login-box-msg">请扫码</h4>
          <div>
            <img :src="loginQRCodeImg" style="width:240px;height:240px;background:#ddd;">
            <br>请用微信扫描上面的二维码登录
          </div>
        </div>
      </div>
    </div>
    <!-- /.login-box-body -->
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  data() {
    return {
      msg: this.$store.state.msg,
      loginQRCodeImg: "",
      form_data: { phone: "", paw: "" }
    };
  },
  methods: {
    onLoginBtnClick() {
      if (!/^1[34578]\d{9}$/.test(this.form_data.phone)) {
        this.$api.tip("请输入正确的电话号码", "warning");
        return;
      }
      if (
        !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(this.form_data.psw)
      ) {
        this.$api.tip("密码为6到16位数字和字母混合", "warning");
        return;
      }

      this.$api
        .login(this.form_data)
        .then(result => {
          if (result) {
            Cookies.set("token", "test_token_aoipsz3xk99asdf3asdf21nwq");
            Cookies.set("user", {
              name: "test_user",
              avatar: "test_avatar.png"
            });

            this.$api.tip("登录成功", "success");
            this.$router.push("/home");
          } else {
            this.$api.tip("登录失败,请检查用户名和密码!", "warning");
          }
        })
        .catch(error => {
          this.$api.tip("登录失败,请检查用户名和密码!", "error");
        });
    },
    generateQRCode() {
    }
  },
  mounted() {
    this.generateQRCode();
  }
};
</script>

<style>
body {
  background: #eee url(/static/img/bg3.jpg) no-repeat 50% 0%;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}
.login-box {
  background: #fff;
}
.nav-pills > li > a,
.nav-pills > li > a:focus,
.nav-pills > li > a:hover {
  color: #fff;
  background-color: #337ab7;
  border-top-color: #3c8dbc;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:focus,
.nav-pills > li.active > a:hover {
  color: #337ab7;
  background-color: #fff;
  border-top-color: #fff;
}
.login-box {
  box-shadow: 0px 2px 2px #00000038;
}
</style>
