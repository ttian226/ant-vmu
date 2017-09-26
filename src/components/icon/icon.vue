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
        [`${prefixCls}-${this.type}`]: true,
        [`${prefixCls}-${this.size}`]: true
      }
    }
  },
  mounted () {
    loadSprite()
  }
}
</script>

<style lang="less">
  @import '../../style/mixins';
  @import '../../style/themes/default';

  @flexPrefixCls: vm-icon;

  .@{flexPrefixCls} {
    fill: currentColor;
    background-size: cover;
    width: @icon-size-md;
    height: @icon-size-md;

    &-xxs {
      width: @icon-size-xxs;
      height: @icon-size-xxs;
    }

    &-xs {
      width: @icon-size-xs;
      height: @icon-size-xs;
    }

    &-sm {
      width: @icon-size-sm;
      height: @icon-size-sm;
    }

    &-md {
      width: @icon-size-md;
      height: @icon-size-md;
    }

    &-lg {
      width: @icon-size-lg;
      height: @icon-size-lg;
    }

    &-loading {
      animation: cirle-anim 1s linear infinite;
    }

    @keyframes cirle-anim {
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
