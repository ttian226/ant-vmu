<template>
  <div class="vm-whitespace"
    :class="['vm-whitespace-' + size]"
  ></div>
</template>

<script>
  export default {
    name: 'VWhiteSpace',
    props: {
      size: {
        type: String,
        default: 'md'
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
