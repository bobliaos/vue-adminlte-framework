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
              <p class="login-box-msg">请登陆</p>

              <!-- <form action="#" method="post"> -->
              <div class="form-group has-feedback">
                <input type="phone" class="form-control" placeholder="请输入手机号码或邮箱地址">
                <span class="glyphicon glyphicon-phone form-control-feedback"></span>
              </div>
              <div class="form-group has-feedback">
                <input type="password" class="form-control" placeholder="请输入密码">
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div class="row">
                <div class="col-xs-8">
                  <div class="checkbox icheck">
                    <label>
                      <input type="checkbox" style="margin-left:0px;">&nbsp;&nbsp;&nbsp;&nbsp;记住我
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
                  <a href="#">忘记密码?马上找回</a>
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
          <div>
            <img :src="loginQRCodeImg" style="width:300px;height:300px;background:#ddd;"/>
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
    };
  },
  methods: {
    onLoginBtnClick() {
      Cookies.set("token", "test_token_aoipsz3xk99asdf3asdf21nwq");
      Cookies.set("user", { name: "test_user", avatar: "test_avatar.png" });
      this.$router.push("/home");
    },
    generateQRCode(){
      let qrCodeURL = "http://www.baidu.com";
      let QRCode = require('qrcode');
      QRCode.toDataURL(qrCodeURL)
        .then(url => {
          this.loginQRCodeImg = url;
        })
        .catch(err => {
          console.error(err)
        })
    },
  },
  mounted() {
    this.generateQRCode();
    setTimeout(() => {
      $("#myTabs a").click(function(e) {
        console.log(e);
        e.preventDefault();
        $(this).tab("show");
      });
    }, 0);
  }
};
</script>

<style>
body {
  background: #eee url(/static/img/bg.e9fd806.jpg) no-repeat 50% 50%;
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
</style>
