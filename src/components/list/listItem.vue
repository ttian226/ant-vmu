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
      extra: String,
      arrow: String,
      thumb: String,
      align: {
        type: String,
        default: 'middle'
      },
      click: Boolean,
      multipleLine: Boolean,
      wrap: Boolean
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
          [`${prefixCls}-line-multiple`]: this.multipleLine,
          [`${prefixCls}-line-wrap`]: this.wrap
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

<style lang="less" src="./list.less"></style>