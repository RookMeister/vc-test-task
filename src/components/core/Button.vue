<template>
  <button v-on="$listeners" @click="action" class="kmtt-button">{{ text }}</button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
  @Prop() text: String | undefined;
  @Prop() action: void | undefined;
}
</script>

<style>
.kmtt-button {
  color: #fff;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: #3680ec;
  cursor: pointer;
}
</style>