<template>
  <div class="vm-flex" :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'vm-flex'

export default {
  name: 'VFlex',
  props: {
    direction: String,
    wrap: String,
    justify: String,
    align: String,
    alignContent: String
  },
  data () {
    return {
      classNames: {
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

<style lang="less">
  @import '../../style/mixins';
  
  @flexPrefixCls: vm-flex;

  .@{flexPrefixCls} {
    display: flex;
    align-items: center;
    overflow-y: hidden;
    text-align: left;

    &&-dir-row {
      flex-direction: row;
    }

    &&-dir-row-reverse {
      flex-direction: row-reverse;
    }

    &&-dir-column {
      flex-direction: column;
    }

    &&-dir-column-reverse {
      flex-direction: column-reverse;
    }

    &&-nowrap {
      flex-wrap: nowrap;
    }

    &&-wrap {
      flex-wrap: wrap;
    }

    &&-wrap-reverse {
      flex-wrap: wrap-reverse;
    }

    &&-justify-start {
      justify-content: flex-start;
    }

    &&-justify-end {
      justify-content: flex-end;
    }

    &&-justify-center {
      justify-content: center;
    }

    &&-justify-between {
      justify-content: space-between;
    }

    &&-justify-around {
      justify-content: space-around;
    }

    &&-align-start {
      align-items: flex-start;
    }

    &&-align-center {
      align-items: center;
    }

    &&-align-end {
      align-items: flex-end;
    }

    &&-align-baseline {
      align-items: baseline;
    }

    &&-align-stretch {
      align-items: stretch;
    }

    &&-align-content-start {
      align-content: flex-start;
    }

    &&-align-content-end {
      align-content: flex-end;
    }

    &&-align-content-center {
      align-content: center;
    }

    &&-align-content-between {
      align-content: space-between;
    }

    &&-align-content-around {
      align-content: space-around;
    }

    &&-align-content-stretch {
      align-content: stretch;
    }
  }
</style>
