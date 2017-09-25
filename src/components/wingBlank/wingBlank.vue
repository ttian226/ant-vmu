<template>
  <div class="vm-whiteblank"
    :class="['vm-whiteblank-' + size]"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'WhiteBlank',
    props: {
      size: {
        type: String,
        default: 'lg'
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
