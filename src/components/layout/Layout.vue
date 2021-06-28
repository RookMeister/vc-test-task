<template>
  <div class="kmtt-page-layout">
    <MenuBar v-if="menu" :menu="menu" :title="title" @setTitle="setTitle" />
    <router-view v-bind="titlesPage"></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

const MenuBar = () => import('../core/Menu.vue');

@Component({
  components: {
    MenuBar
  }
})
export default class Layout extends Vue {
  @Prop() title: String | undefined;
  @Prop() menu: string | undefined;

  titlesPage = null;

  setTitle(titles: any) {
    this.titlesPage = titles;
  }
}
</script>

<style>
.kmtt-page-layout {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>