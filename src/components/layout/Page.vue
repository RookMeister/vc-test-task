<template>
  <div class="kmtt-page">
    <div>{{ title }}</div>
    <h2>{{ namePage }}</h2>
    <component v-for="item in componentsPage" :key="item.name" class="components" :is="item.component" v-bind="item.props"></component>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { IComponent, IComponentProps } from '@/interfaces/component.interface';
const SearchComponent = () => import('../core/Search.vue');

@Component({
  components: {
    SearchComponent
  }
})
export default class Page extends Vue {
  @Prop() title: String | undefined;
  @Prop() namePage: String | undefined;
  @Prop() components: IComponentProps[] | undefined;

  componentsPage: IComponent[] = [];

  @Watch('components', {immediate: true})
  wathedPropsComponnmets(val: IComponentProps[]) {
    if (val) {
      this.components && this.components.forEach((el: IComponentProps) => {
        import('../core/'+ el.name).then(b => (this.componentsPage.push({component: b.default, props: el.props})) )
      });
    }
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