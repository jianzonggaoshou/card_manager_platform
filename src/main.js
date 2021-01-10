import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

//const axios = require('axios').default;

new Vue({
  render: h => h(App),
}).$mount('#app')
