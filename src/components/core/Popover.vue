<template>
  <div class="kmtt-popover" ref="popover">
    <div @click="handleOpenPopover">
      <slot></slot>
    </div>
    <transition name="popover">
      <div v-show="visible" class="body">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Popover extends Vue {
  visible = false;

  mounted() {
    window.addEventListener('click', (e) => this.onOutsideClicked(e))
  }

  onOutsideClicked(e: MouseEvent) {
    if ((this.$refs['popover'] as Element).contains(e.target as Element)) {
      return;
    }

    this.handleClosePopover();
  }

  handleOpenPopover() {
    this.visible = true;
  }

  handleClosePopover() {
    this.visible = false;
  }

  beforeDestroy() {
    window.removeEventListener('click', (e) => this.onOutsideClicked(e))
  }

}
</script>

<style>
.kmtt-popover {
  position: relative;
  cursor: pointer;
}

.kmtt-popover .body {
  position: absolute;
  z-index: 1;
  right: 0;
  width: 100%;
  background-color: #17191c;
  box-shadow: 0 3px 24px rgba(0,0,0,.4);
}

.popover-enter, .popover-leave-to  {
  opacity: 0;
  transition: opacity 0.1s linear;
}

.popover-enter-active, .popover-leave-active {
  transition: opacity 0.1s linear;
}


</style>