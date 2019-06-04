// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router.js';
import store from './store.js';

import bootstrap from 'bootstrap';
import adminlte from 'admin-lte';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/font-awesome/css/font-awesome.min.css';

import '../node_modules/admin-lte/dist/css/AdminLTE.min.css';
import '../node_modules/admin-lte/dist/css/skins/skin-blue.min.css';

import api from './api.js'
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