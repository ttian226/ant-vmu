<template>
  <div :class="wrapCls">
    <v-flex justify="center" align="stretch" v-for="(row, rowIndex) in rowNum" :key="rowIndex">
      <v-flex-item v-for="(item, colIndex) in items.slice(rowIndex * columnNum, rowIndex * columnNum + columnNum)" :key="colIndex" :class="`${prefixCls}-item`" :style="colStyle">
        <div v-if="item" :class="`${prefixCls}-item-content`" @click="clickGridItem(item, rowIndex * columnNum + colIndex)">
          <div v-if="!renderItem" :class="`${prefixCls}-item-inner-content column-num-${columnNum}`">
            <img :class="`${prefixCls}-icon`" :src="item.icon">
            <div :class="`${prefixCls}-text`">{{ item.text }}</div>
          </div>
          <div v-else v-html="renderItem(item)"></div>
        </div>
      </v-flex-item>
    </v-flex>
  </div>
</template>

<script>
import VFlex from '../flex'

const prefixCls = 'vm-grid'

export default {
  name: 'VGrid',
  components: {
    VFlex,
    VFlexItem: VFlex.Item
  },
  props: {
    data: Array,
    columnNum: {
      type: Number,
      default: 4
    },
    hasLine: {
      type: Boolean,
      default: true
    },
    square: {
      type: Boolean,
      default: true
    },
    renderItem: Function
  },
  data () {
    return {
      prefixCls,
      wrapCls: {
        [prefixCls]: true,
        [`${prefixCls}-square`]: this.square,
        [`${prefixCls}-line`]: this.hasLine
      },
      colStyle: {
        width: `${100 / this.columnNum}%`
      }
    }
  },
  computed: {
    rowNum () {
      return this.data.length % this.columnNum === 0 ? this.data.length / this.columnNum : Math.floor(this.data.length / this.columnNum) + 1
    },
    items () {
      const restNum = this.data.length % this.columnNum
      return !restNum ? this.data : this.data.concat(new Array(this.columnNum - restNum))
    }
  },
  methods: {
    clickGridItem (item, index) {
      this.$emit('onClick', item, index)
    }
  }
}
</script>

<style lang="less">
  @import '../../style/mixins';
  @import '../../style/themes/default';

  @flexPrefixCls: vm-flexbox;
  @gridPrefixCls: vm-grid;

  /* flexbox */
  .@{gridPrefixCls} {
    .@{flexPrefixCls} {
      background: @fill-base;

      .@{flexPrefixCls}-item {
        margin-left: 0;

        &.@{gridPrefixCls}-item {
          position: relative;
        }

        &.@{gridPrefixCls}-item-active {
          .@{gridPrefixCls}-item-content {
            background-color: @fill-tap;
          }
        }

        .@{gridPrefixCls}-item-content {
          text-align: center;
          width: 100%;
          height: 100%;
          padding: @v-spacing-lg 0;

          .@{gridPrefixCls}-item-inner-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .@{gridPrefixCls}-icon {
              max-width: 100%;
            }

            .@{gridPrefixCls}-text {
              margin-top: @v-spacing-md;
              font-size: @font-size-caption-sm;
              color: @color-text-base;
              text-align: center;
            }

            &.column-num-3 {
              .@{gridPrefixCls}-text {
                font-size: @font-size-caption;
              }
            }

            &.column-num-2 {
              .@{gridPrefixCls}-text {
                margin-top: @v-spacing-lg;
                font-size: 18 * @hd;
              }
            }
          }
        }
      }
    }

    &.@{gridPrefixCls}-line {
      position: relative;
      // &:not(.@{gridPrefixCls}-carousel) {
      //   .hairline('top');
      //   .hairline('right');
      // }
      .hairline('top');
      .hairline('right');

      .@{flexPrefixCls} {
        position: relative;
        .hairline('bottom');

        .@{flexPrefixCls}-item {
          position: relative;
          &:first-child {
            .hairline('left');
          }
          &:not(:last-child) {
            .hairline('right');
          }
        }
      }
    }

    &.@{gridPrefixCls}-square {
      .@{gridPrefixCls}-item {
        &:before {
          display: block;
          content: ' ';
          padding-bottom: 100%;
        }
        .@{gridPrefixCls}-item-content {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .@{gridPrefixCls}-item-inner-content {
          height: 100%;
          .@{gridPrefixCls}-icon {
            margin-top: @v-spacing-md;
            width: 28%!important;
          }
        }
      }
    }
  }
</style>
