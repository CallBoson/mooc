import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import services from './assets/apis.js';
Vue.prototype.services = services;

require('./assets/plugins/index.js') //插件

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
