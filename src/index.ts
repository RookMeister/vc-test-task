import Vue from 'vue';
import router from './router';
import App from './components/App.vue';

require('./assets/style.css');


new Vue({
  el: '#root',
  router,
  render: h => h(App)
});