  <template>
    <div :class="listItemCls">
      <div :class="`${prefixCls}-thumb`" v-if="thumb">
        <img :src="thumb">
      </div>
      <div :class="lineCls">
        <div :class="`${prefixCls}-content`">
          <slot></slot>
        </div>
        <div :class="`${prefixCls}-extra`" v-if="extra">{{extra}}</div>
        <span :class="arrowCls" v-if="arrow"></span>
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
      arrow: {
        type: String,
        default: ''
      },
      thumb: {
        type: String,
        default: ''
      },
      align: {
        type: String,
        default: 'middle'
      },
      click: Boolean,
      multipleLine: Boolean
    },
    data () {
      return {
        prefixCls: prefixCls
      }
    },
    computed: {
      listItemCls () {
        return {
          [`${prefixCls}-item`]: true,
          [`${prefixCls}-item-click`]: this.click,
          [`${prefixCls}-item-top`]: this.align === 'top',
          [`${prefixCls}-item-middle`]: this.align === 'middle',
          [`${prefixCls}-item-bottom`]: this.align === 'bottom'
        }
      },
      lineCls () {
        return {
          [`${prefixCls}-line`]: true,
          [`${prefixCls}-line-multiple`]: this.multipleLine
        }
      },
      arrowCls () {
        return {
          [`${prefixCls}-arrow`]: true,
          [`${prefixCls}-arrow-horizontal`]: this.arrow === 'horizontal'
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

        img {
          width: @icon-size-md;
          height: @icon-size-md;
          vertical-align: middle;
        }

        /* list左图片显示*/
        .@{listPrefixCls}-thumb {
          &:first-child {
            margin-right: @h-spacing-lg;
          }

          &:last-child {
            margin-left: @h-spacing-md;
          }
        }

        &-click {
          &:active {
            background-color: @fill-tap;
          }
        }

        &.@{listPrefixCls}-item-top {
          .@{listPrefixCls}-line {
            align-items: flex-start;

            .@{listPrefixCls}-arrow {
              margin-top: 2 * @hd;
            }
          }
        }

        &.@{listPrefixCls}-item-middle {
          .@{listPrefixCls}-line {
            align-items: center;
          }
        }

        &.@{listPrefixCls}-item-bottom {
          .@{listPrefixCls}-line {
            align-items: flex-end;
          }
        }

        .@{listPrefixCls}-line {
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

          /* list右侧箭头 */
          // .@{listPrefixCls}-arrow {
          //   display: block;
          //   width: @icon-size-xxs;
          //   height: @icon-size-xxs;
          //   margin-left: @h-spacing-md;
          //   .encoded-svg-background('right');
          // }
        }
      }
    }
  </style>
