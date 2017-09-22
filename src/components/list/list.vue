<template>
  <div class="vm-list">
    <div class="vm-list-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VList'
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
