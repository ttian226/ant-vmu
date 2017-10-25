<template>
  <div :class="wrapCls"></div>
</template>

<script>
  const prefixCls = 'vm-whitespace'

  export default {
    name: 'VWhiteSpace',
    props: {
      size: {
        type: String,
        default: 'md'
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

  @whitespacePrefixCls: vm-whitespace;

  .@{whitespacePrefixCls} {
    &&-xs {
      height: @v-spacing-xs;
    }

    &&-sm {
      height: @v-spacing-sm;
    }

    &&-md {
      height: @v-spacing-md;
    }

    &&-lg {
      height: @v-spacing-lg;
    }

    &&-xl {
      height: @v-spacing-xl;
    }
  }
</style>
