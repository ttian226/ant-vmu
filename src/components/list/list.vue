<template>
  <div :class="classNames">
    <div :class="`${classNames}-header`" v-if="header">{{header}}</div>
    <div :class="`${classNames}-body`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VList',
  props: {
    header: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      classNames: 'vm-list'
    }
  }
}
</script>

<style lang="less">
  @import '../../style/mixins';

  @listPrefixCls: vm-list;

  .@{listPrefixCls} {
    &-header {
      padding: @v-spacing-lg @h-spacing-lg @v-spacing-md @h-spacing-lg;
      font-size: @font-size-base;
      color: @color-text-caption;
      display: inline-block;
      width: 100%;
      box-sizing: border-box;
    }

    &-body {
      position: relative;
      background-color: @fill-base;
      .hairline('top');
      .hairline('bottom');

      div:not(:last-child) {
        .@{listPrefixCls}-line {
          .hairline('bottom');
        }
      }
    }
  }
</style>
