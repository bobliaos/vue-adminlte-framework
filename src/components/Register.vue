<template>
  <div class="register-box">
    <div class="register-box-body">
      <h4 class="login-box-msg">用户注册</h4>

      <div class="form-group has-feedback">
        <input v-model="form_data.phone" type="text" class="form-control" placeholder="请输入手机号码">
        <span class="glyphicon glyphicon-phone form-control-feedback"></span>
      </div>

      <div class="row form-group">
        <div class="col-xs-7">
          <input v-model="form_data.code" type="text" class="form-control" placeholder="请输入验证码">
        </div>
        <!-- /.col -->
        <div class="col-xs-5">
          <button class="btn btn-primary btn-flat" style="width:100%;" @click="onVerifyCodeBtnClick">发送验证码</button>
        </div>
        <!-- /.col -->
      </div>
      <div class="form-group has-feedback">
        <input v-model="form_data.psw" type="password" class="form-control" placeholder="请输入密码">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input
          v-model="form_data.psw_repeat"
          type="password"
          class="form-control"
          placeholder="请确认密码"
        >
        <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
      </div>
      <div class="row">
        <div class="col-xs-8">
          <div class="checkbox icheck">
            <label>
              <input v-model="form_data.agreement_checked" type="checkbox" style="margin-left:0px;">&nbsp;&nbsp;&nbsp;&nbsp;我已同意
              <a href="#">服务协议</a>
            </label>
          </div>
        </div>
        <!-- /.col -->
        <div class="col-xs-4">
          <button class="btn btn-primary btn-block btn-flat" @click="onRegisterBtnClick">注册</button>
        </div>
        <!-- /.col -->
      </div>
      <hr>
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
      msg: this.$store.state.msg,
      form_data: {
        phone: "",
        code: "",
        psw: "",
        psw_repeat: "",
        agreement_checked: ""
      }
    };
  },
  methods: {
    onRegisterBtnClick(e) {
      if(!(/^1[34578]\d{9}$/.test(this.form_data.phone))) { this.$api.tip("请输入正确的电话号码","warning");return; }
      if(this.form_data.code.length != 6) { this.$api.tip("请输入正确的验证码","warning");return; }
      if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(this.form_data.psw))) { this.$api.tip("密码为6到16位数字和字母混合","warning");return; }
      if(this.form_data.psw != this.form_data.psw_repeat) { this.$api.tip("两次密码不一致","warning");return; }
      if(this.form_data.agreement_checked) { this.$api.tip("必须同意服务协议才能注册","warning");return; }
      this.$api.login(this.form_data).then((result)=>{
        if(result){
          this.$api.tip("注册成功","success");
        }else{
          this.$api.tip("登录失败,请检查用户名和密码","error"); 
        }
      });

    },
    onVerifyCodeBtnClick(e){
      if(!(/^1[34578]\d{9}$/.test(this.form_data.phone))) { this.$api.tip("请输入正确的电话号码","warning");return; }
      this.$api.sendVerifyCode(this.form_data.phone).then((result)=>{
        if(result) this.$api.tip("验证码发送成功","success"); else this.$api.tip("验证码发送失败","error");
      });
    },
  },
  created() {}
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
.register-box {
  box-shadow: 0px 2px 2px #00000038;
}
</style>
