// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import Vuex from 'vuex'
import store from './store/store'
import axios from 'axios'
import echarts from 'echarts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery';
import "babel-polyfill"; //解决IE兼容es6语法问题
//var Highcharts = require('highcharts/highmaps');
//import Highcharts from 'highcharts';
//Vue.use(Highcharts)

Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App },
  template: '<App/>'
})
