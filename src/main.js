import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router/router'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
