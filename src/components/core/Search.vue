<template>
  <div class="kmtt-input">
    <feather class="icon" size="16" type="search"/>
    <input placeholder="Поиск" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
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
.kmtt-input > .icon {
  margin-right: 8px;
}
</style>