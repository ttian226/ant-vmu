<template>
  <div :class="wrapCls">
    <div :class="lineCls">
      <div :class="contentCls">
        <slot></slot>
      </div>
      <div :class="extraCls" v-if="extra">{{extra}}</div>
    </div>
  </div>
</template>

<script>
const prefixCls = 'vm-list'

export default {
  name: 'VListItem',
  props: {
    extra: {
      type: String,
      default: ''
    },
    multipleLine: Boolean
  },
  data () {
    return {
      wrapCls: `${prefixCls}-item`,
      contentCls: `${prefixCls}-content`,
      extraCls: `${prefixCls}-extra`,
      lineCls: {
        [`${prefixCls}-line`]: true,
        [`${prefixCls}-line-multiple`]: this.multipleLine
      }
    }
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

      &-multiple {
        padding: 12.5 * @hd @h-spacing-lg 12.5 * @hd 0;
      }
    }
  }
</style>
