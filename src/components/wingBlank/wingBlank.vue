<template>
  <div :class="wrapCls">
    <slot></slot>
  </div>
</template>

<script>
  const prefixCls = 'vm-whiteblank'

  export default {
    name: 'WhiteBlank',
    props: {
      size: {
        type: String,
        default: 'lg'
      }
    },
    data () {
      return {
        wrapCls: {
          [prefixCls]: true,
          [`${prefixCls}-${this.size}`]: true
        }
      }
    }
  }
</script>

<style lang="less">
  @import '../../style/mixins';

  @whitespacePrefixCls: vm-whiteblank;

  .@{whitespacePrefixCls} {
    &&-sm {
      margin-left: @h-spacing-sm;
      margin-right: @h-spacing-sm;
    }

    &&-md {
      margin-left: @h-spacing-md;
      margin-right: @h-spacing-md;
    }

    &&-lg {
      margin-left: @h-spacing-lg;
      margin-right: @h-spacing-lg;
    }
  }

</style>
