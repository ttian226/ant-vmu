<template>
  <div :class="classNames">
    <div :class="`${classNames}-header`" v-if="header">{{header}}</div>
    <div :class="`${classNames}-body`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const prefixCls = 'vm-list'

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
      classNames: prefixCls
    }
  }
}
</script>

<style lang="less">
  @import '../../style/mixins';

  @listPrefixCls: vm-list;

  .@{listPrefixCls} {
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
