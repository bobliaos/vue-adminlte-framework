// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex';

import bootstrap from 'bootstrap';
import adminlte from 'admin-lte';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/ionicons/dist/css/ionicons.min.css';
import '../node_modules/admin-lte/dist/css/AdminLTE.min.css';
import '../node_modules/admin-lte/dist/css/skins/skin-blue.min.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})