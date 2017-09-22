<template>
  <div class="vm-list-item">
    <div class="vm-list-line">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VListItem'
  }
</script>

<style lang="less">
  @import '../../style/mixins';

  @listPrefixCls: vm-list;

  .@{listPrefixCls} {
    &-item {
      position: relative;
      display: flex;
      padding-left: @h-spacing-lg;
      min-height: @list-item-height;
      background-color: @fill-base;
      // vertical-align: middle;
      overflow: hidden;
      transition: background-color 200ms;
      align-items: center;
    }
  }
</style>
