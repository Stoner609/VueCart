import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import store from './store'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
