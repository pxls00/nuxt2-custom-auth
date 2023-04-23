<template>
  <div class="svg-icon" :style="computedStyle" v-html="iconPath"></div>
</template>

<script>
export default {
  name: 'SvgIcon',

  props: {
    name: {
      type: String,
      required: true,
    },

    width: {
      type: [Number, String],
      default: () => 'auto',
    },

    height: {
      type: [Number, String],
      default: () => 'auto',
    },
  },

  computed: {
    iconPath() {
      const src = require(`assets/icons/${this.name}.svg?raw`)
      return src
    },

    computedStyle() {
      let widthVal = this.width
      let heightVal = this.height
      if (typeof widthVal === 'number') widthVal = `${widthVal}rem`
      if (typeof heightVal === 'number') heightVal = `${heightVal}rem`

      return {
        width: widthVal,
        height: heightVal,
      }
    },
  },
}
</script>

<style lang='scss'>
.svg-icon {
  & > svg {
    display: flex;
    width: inherit;
    height: inherit;
  }
}
</style>
