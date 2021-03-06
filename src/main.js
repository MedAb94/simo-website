import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import i18n from './i18n'
import VueSmoothScroll from 'vue2-smooth-scroll'
import './registerServiceWorker'
Vue.use(VueSmoothScroll)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  VueSmoothScroll,
  render: h => h(App)
}).$mount('#app')
