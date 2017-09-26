<template>
  <svg :class="classNames">
    <use :xlink:href="`#${type}`" />
  </svg>
</template>

<script>
import loadSprite from './loadSprite'

const prefixCls = 'vm-icon'

export default {
  name: 'Icon',
  props: {
    type: {
      type: String
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  data () {
    return {
      classNames: {
        [prefixCls]: true,
        [`${prefixCls}-${this.type}`]: true
      }
    }
  },
  mounted () {
    loadSprite()
  }
}
</script>

