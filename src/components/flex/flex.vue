<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'vm-flexbox'

export default {
  name: 'VFlex',
  props: {
    direction: String,
    wrap: String,
    justify: String,
    align: {
      type: String,
      default: 'center'
    },
    alignContent: String
  },
  data () {
    return {
      classNames: {
        [prefixCls]: true,
        [`${prefixCls}-dir-row`]: this.direction === 'row',
        [`${prefixCls}-dir-row-reverse`]: this.direction === 'row-reverse',
        [`${prefixCls}-dir-column`]: this.direction === 'column',
        [`${prefixCls}-dir-column-reverse`]: this.direction === 'column-reverse',
        [`${prefixCls}-nowrap`]: this.wrap === 'nowrap',
        [`${prefixCls}-wrap`]: this.wrap === 'wrap',
        [`${prefixCls}-wrap-reverse`]: this.wrap === 'wrap-reverse',
        [`${prefixCls}-justify-start`]: this.justify === 'start',
        [`${prefixCls}-justify-end`]: this.justify === 'end',
        [`${prefixCls}-justify-center`]: this.justify === 'center',
        [`${prefixCls}-justify-between`]: this.justify === 'between',
        [`${prefixCls}-justify-around`]: this.justify === 'around',
        [`${prefixCls}-align-start`]: this.align === 'start',
        [`${prefixCls}-align-center`]: this.align === 'center',
        [`${prefixCls}-align-end`]: this.align === 'end',
        [`${prefixCls}-align-baseline`]: this.align === 'baseline',
        [`${prefixCls}-align-stretch`]: this.align === 'stretch',
        [`${prefixCls}-align-content-start`]: this.alignContent === 'start',
        [`${prefixCls}-align-content-end`]: this.alignContent === 'end',
        [`${prefixCls}-align-content-center`]: this.alignContent === 'center',
        [`${prefixCls}-align-content-between`]: this.alignContent === 'between',
        [`${prefixCls}-align-content-around`]: this.alignContent === 'around',
        [`${prefixCls}-align-content-stretch`]: this.alignContent === 'stretch'
      }
    }
  }
}
</script>

<style lang="less" src="./flex.less"></style>
