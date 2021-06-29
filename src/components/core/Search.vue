<template>
  <div class="kmtt-input">
    <SearchIcon/>
    <input v-on="$listeners" placeholder="Поиск" :value="value">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { SearchIcon } from 'vue-feather-icons';

@Component({
  components: { SearchIcon }
})
export default class Search extends Vue {
  @Prop({ default: '' }) value: String | undefined;
}
</script>

<style>
.kmtt-input {
  height: 24px;
  padding: 4px;
  color: #585c62;
  border-radius: 16px;
  border: 1px solid #585c62;
  display: inline-flex;
  align-items: center;
}
.kmtt-input > input {
  height: 100%;
  width: 100%;
  color: #585c62;
  background-color: inherit;
}
.kmtt-input > svg {
  height: 16px;
  width: 16px;
  margin-right: 8px;
}
</style>