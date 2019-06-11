// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store.js';
import router from './router.js';
import App from './App';

import bootstrap from 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import adminlte from 'admin-lte';
import '../node_modules/admin-lte/dist/css/AdminLTE.min.css';
import '../node_modules/admin-lte/dist/css/skins/skin-blue.min.css';

import 'bootstrap-datepicker';
import '../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';

import 'bootstrap-daterangepicker';
import '../node_modules/bootstrap-daterangepicker/daterangepicker.css';

import api from './api.js'
//配置
if (process.env.NODE_ENV === 'production') {
    // 发布配置
    window.CONFIG = {
        host: "http://user.800abk.com:30022",
        path: "/api/user/",
    };
} else {
    // 开发配置
    window.CONFIG = {
        host: "http://10.10.10.14:30011",
        path: "/mock/5cef9a76b2e3fe00211806ff/user/",
    };
}
Vue.use(api);

Vue.config.productionTip = false


/* eslint-disable no-new */
var vue = new Vue({
    el: '#app',
    router,
    store,
    api,
    components: { App },
    template: '<App/>'
})

//hack,后面最好找出在插件 api 中直接使用 vuex 的办法
vue.$api.$store = vue.$store;