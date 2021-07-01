<template>
  <div class="kmtt-layout">
    <MenuBar v-if="data" v-bind="$props" @setTitle="setTitle" />
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
  @Prop() data: string | undefined;

  titlesPage: { namePage: string, title: string } | null = null;

  setTitle(titles: { namePage: string, title: string }) {
    this.titlesPage = titles;
  }
}
</script>

<style>
.kmtt-layout {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>