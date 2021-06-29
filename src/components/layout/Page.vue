<template>
  <div class="kmtt-page">
    <div>{{ title }}</div>
    <h2>{{ namePage }}</h2>
    <component class="components" v-for="item in components" :key="item.name" :is="item.name" v-bind="item.props"></component>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

const ButtonComponent = () => import('../core/Button.vue');
const SearchComponent = () => import('../core/Search.vue');
const TableComponent = () => import('../core/Table.vue');

@Component({
  components: {
    ButtonComponent,
    TableComponent,
    SearchComponent
  }
})
export default class Page extends Vue {
  @Prop() title: String | undefined;
  @Prop() namePage: String | undefined;
  @Prop() components: any | undefined;
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