import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'

Vue.use(VueOnsen);


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
