import Vue from 'vue';
import Buefy from 'buefy';
import router from './router';
import 'buefy/dist/buefy.css';
import App from './App.vue';

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
