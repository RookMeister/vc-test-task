import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { IConfig } from '@/interfaces/config.interface';

import routesConfig from './config.pages';

Vue.use(VueRouter);

const Layout = () => import('../components/layout/Layout.vue');
const Page = () => import('../components/layout/Page.vue');

const getRoutes = (config: IConfig[] | RouteConfig[]) => {
  return config.map((el: IConfig | RouteConfig) => {
    const route: RouteConfig = {
      path: el.path,
      component: (el.path === '/') ? Layout : Page,
      props: el.props,
      children: []
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