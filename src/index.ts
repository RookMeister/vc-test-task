import Vue from 'vue';
import router from './router';
import App from './components/App.vue';
import VueFeather from 'vue-feather';

require('./assets/style.css');

Vue.use(VueFeather);

new Vue({
  el: '#root',
  router,
  render: h => h(App)
});