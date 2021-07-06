<template>
  <component v-if="component" :is="isComponent" v-bind="propsComponent"></component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IComponentProps } from '@/interfaces/component.interface';

@Component
export default class DynamicComponent extends Vue {
  @Prop() component: IComponentProps | undefined;

  get isComponent() {
    return () => this.component && import('./' + this.component.name + '.vue') || null;
  }

  get propsComponent() {
    return this.component && this.component.props;
  }
}
</script>

<style>
.kmtt-page {
  padding: 32px;
  width: 100%;
}
.kmtt-page > .components {
  margin-top: 24px;
}
.kmtt-page > h2 {
  font-size: bold;
  color: #bbbcc1;
  margin: 8px 0;
  /* margin-bottom: 32px; */
}
</style>