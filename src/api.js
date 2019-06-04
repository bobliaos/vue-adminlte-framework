// 注意:在请求头中设置cookie让后台得到token即可

export default ({

    $store: null,

    install(Vue) {
        Vue.prototype.$api = this;
    },

    test() {
        $.get(CONFIG.host + CONFIG.path + "query", (value) => {
            console.log("[API.test()]:jQuery version:", $.fn.jquery, value, $(window).resize());
        });
    },

    tip(msg, code) {
        let class_name, title;
        switch (code) {
            case "info":
                title = "提示";
                class_name = "modal-info";
                break;
            case "success":
                title = "成功";
                class_name = "modal-success";
                break;
            case "warning":
                title = "警告";
                class_name = "modal-warning";
                break;
            case "error":
            case "danger":
                title = "错误";
                class_name = "modal-danger";
                break;
            default:
                title = "提示";
                class_name = "modal-default";
                break;
        }
        this.$store.commit("msg_tips", { class: class_name, title: title, msg: msg });
        $("#modal_tips").modal();
    },

    sendVerifyCode(phone) {
        var result = new Promise((resolve, reject) => {
            setTimeout(function() {
                console.log("[Api.sendVerifyCode()] 接入发送短信接口:", phone);
                resolve(true);
            }, 1000);
        });
        return result;
    },
    login(form_data) {
        var result = new Promise((resolve, reject) => {
            setTimeout(function() {
                console.log("[Api.login()] 接入登录接口:", form_data);
                resolve(true);
            }, 1000);
        });
        return result;
    },
    resetPassword(form_data) {
        var result = new Promise((resolve, reject) => {
            setTimeout(function() {
                console.log("[Api.login()] 接入重置密码接口:", form_data);
                resolve(false);
            }, 1000);
        });
        return result;
    },
});