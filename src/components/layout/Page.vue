<template>
  <div class="kmtt-page">
    666
    {{ title }}
    {{ nameLink }}
    {{ title123 }}
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
export default class Page extends Vue {
  @Prop() title: String | undefined;
  @Prop() nameLink: String | undefined;
  @Prop() title123: String | undefined;
}
</script>

<style>
/* .kmtt-page-layout {
  display: flex;
  width: 100%;
  height: 100%;
} */
</style>