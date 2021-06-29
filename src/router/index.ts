import Vue from 'vue';
import VueRouter from 'vue-router';

import routesConfig from './config.pages';

Vue.use(VueRouter);

const Layout = () => import('../components/layout/Layout.vue');
const Page = () => import('../components/layout/Page.vue');

const getRoutes = (config: any) => {
  return config.map((el: any) => {
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

export default router;