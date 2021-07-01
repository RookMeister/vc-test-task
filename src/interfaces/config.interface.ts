
import  { RouteConfig, Route } from 'vue-router';
import Vue, { ComponentOptions, AsyncComponent } from 'vue'

type RoutePropsFunction = (route: Route) => Object;
type Dictionary<T> = { [key: string]: T };
type Component = ComponentOptions<Vue> | typeof Vue | AsyncComponent

export interface IConfig {
  page?: string;
  path: string;
  name?: string;
  children?: RouteConfig[];
  component: Component;
  props?: Dictionary<boolean | Object | RoutePropsFunction>;
}