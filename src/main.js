// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App';
import router from './router/index';
import Vuex from 'vuex'
import axiosUtil from './util/axiosUtil';

import Loading from './components/loading';


Vue.use(VueRouter);
Vue.use(Vuex)
Vue.prototype.$axios = axiosUtil;

//store
import appStore from "./store/appStore"
const store = new Vuex.Store(appStore)
import lStorage from 'store'
Vue.prototype.$lStorage = lStorage

Vue.prototype.$Loading = Loading;

// const routes = [{
//   path: '/',
//   component: Home,
// }];

// const router = new VueRouter({
//   routes,
// });

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
