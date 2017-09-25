<template>
  <div :class="`${classNames}-brief`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VBrief',
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

  .@{listPrefixCls}-line {
    .@{listPrefixCls}-brief {
      color: @color-text-caption;
      font-size: @font-size-subhead;
      line-height: @line-height-paragraph;
      margin-top: @v-spacing-sm;
      .ellipsis();
    }
  }
</style>


