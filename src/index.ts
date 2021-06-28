import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';

import routesConfig from './config.pages';

require('./assets/style.css');

Vue.use(VueRouter);

const Layout = () => import('./components/layout/Layout.vue');
const Page = () => import('./components/layout/Page.vue');

const getRoutes = (config: any) => {
  return config.map((el: any) => {
    console.log(el.page);
    const route = {
      path: el.path,
      component: el.page ? Layout : Page,
      props: el.props,
      children: ''
    }
    if (el.children) route.children = getRoutes(el.children);
    return route;
  });
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: getRoutes(routesConfig),
})

new Vue({
  el: '#root',
  router,
  render: h => h(App)
});