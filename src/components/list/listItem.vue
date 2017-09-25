<template>
  <div class="vm-list-item">
    <div class="vm-list-line">
      <div class="vm-list-content">
        <slot></slot>
      </div>
      <div class="vm-list-extra">{{extra}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VListItem',
    props: {
      extra: String
    }
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
      vertical-align: middle;
      overflow: hidden;
      transition: background-color 200ms;
      align-items: center;
    }

    &-line {
      position: relative;
      flex: 1;
      display: flex;
      align-self: stretch;
      padding-right: @h-spacing-lg;
      min-height: @list-item-height;
      overflow: hidden;
      align-items: center;

      .@{listPrefixCls}-content {
        flex: 1;
        color: @color-text-base;
        font-size: @font-size-heading;
        line-height: @line-height-paragraph;
        text-align: left;
        .ellipsis();
      }

      .@{listPrefixCls}-extra {
        flex-basis: 36%;
        color: @color-text-caption;
        font-size: @font-size-caption;
        line-height: @line-height-paragraph;
        text-align: right;
        .ellipsis();
      }
    }
  }
</style>
