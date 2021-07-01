import Vue, { PropOptions } from 'vue';

export interface IComponent {
  component: Vue,
  props: PropOptions
}

export interface IComponentProps {
  name: string,
  props: PropOptions
}