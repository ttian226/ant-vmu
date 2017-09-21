<template>
  <div class="vm-flex-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VFlexItem'
}
</script>

<style lang="less">
  @import '../../style/mixins';

  @flexPrefixCls: vm-flex;

  .@{flexPrefixCls} {
    .@{flexPrefixCls}-item {
      box-sizing: border-box;
      flex: 1;
      margin-left: @h-spacing-md;
      min-width: 10 * @hd;

      &:first-child {
        margin-left: 0;
      }
    }

    &&-dir-row-reverse {
      .@{flexPrefixCls}-item {
        &:first-child {
          margin-left: @h-spacing-md;
        }

        &:last-child {
          margin-left: 0;
        }
      }
    }
  }
</style>
