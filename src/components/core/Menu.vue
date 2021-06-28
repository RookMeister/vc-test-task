<template>
  <div class="kmtt-menu">
    <div class="title">{{ title }}<ChevronDownIcon class="chevron-icon" /></div>
    <div class="links" v-for="item in menu" :key="item.title">
      <div v-if="item.title" class="title">{{ item.title.toUpperCase() }}</div>
      <template v-if="item.links">
        <a class="link" v-for="link in item.links" :href="link.url" :key="link.name">
          {{ link.name }}
        </a>
      </template>
    </div>
    <a class="link last-link" href="/">
      <LayersIcon class="layers-icon"/> Библиотека компонентов
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { LayersIcon, ChevronDownIcon } from 'vue-feather-icons';

interface ILinks{
  name: String;
  href: String;
}

interface IMenu {
  title: String;
  links: ILinks[];
}

@Component({
  components: { LayersIcon, ChevronDownIcon }
})
export default class Menu extends Vue {
  @Prop() menu: IMenu[] | undefined;
  @Prop() title: String | undefined;
}
</script>

<style>
.kmtt-menu {
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  width: 350px;
  border-right: 1px solid #1d1f22;
  font-size: 16px;
}
.kmtt-menu > .title {
  cursor: pointer;
  padding: 16px;
  border-bottom: 1px solid #1d1f22;
  display: inline-flex;
}
.kmtt-menu > .title > .chevron-icon {
  margin-left: auto;
  color: #585c62;
}
.kmtt-menu > .links {
  padding: 12px  0;
}
.kmtt-menu > .links > .title {
  padding: 12px 16px;
  color: #585c62;
}
.kmtt-menu .link {
  color: #909198;
  padding: 8px 16px;
  display: block;
}
.kmtt-menu .link:hover {
  background-color: #23252a;
  cursor: pointer;
}
.kmtt-menu .link.last-link {
  margin-top: auto;
}
.kmtt-menu >.layers-icon {
  vertical-align: text-top;
  margin-right: 8px;
}
</style>