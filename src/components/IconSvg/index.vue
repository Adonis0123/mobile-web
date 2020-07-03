<!--
用法：<icon-svg icon-class="name" />
  -->
<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'IconSvg',
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style>
.svg-icon {
  width: 100px;
  height: 100px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
