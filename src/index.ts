import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Layout from './components/layout/Layout.vue';

import routes from './config.pages';

require('./assets/style.css');

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:
  routes.pages.map((el: any) => {
    return {
      path: el.path,
      component: Layout,
      props: {...routes.propsLayout, ...el.props}
    }
  })
})

new Vue({
  el: '#root',
  router,
  render: h => h(App)
});