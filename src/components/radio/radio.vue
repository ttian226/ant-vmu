<template>
  <v-list-item :class="listItemCls">
    <label :class="wrapCls">
      <span :class="radioCls">
        <input
          type="radio"
          :class="radioInputCls"
          :name="name"
        >
      </span><slot></slot>
    </label>
  </v-list-item>

</template>

<script>
import VList from '../list'
const prefixCls = 'vm-radio'

export default {
  name: 'VRadio',
  components: {
    VListItem: VList.Item
  },
  props: {
    label: [String, Number],
    name: String
  },
  computed: {
    listItemCls () {
      return {
        [`${prefixCls}-item`]: true
      }
    },
    wrapCls () {
      return {
        [`${prefixCls}-wrapper`]: true
      }
    },
    radioCls () {
      return {
        [prefixCls]: true
      }
    },
    radioInputCls () {
      return {
        [`${prefixCls}-input`]: true
      }
    }
  }
}
</script>

<style lang="less">
  @import '../../style/mixins';

  @listPrefixCls: am-list;
  @radioWarpPrefixCls: vm-radio;

  .@{listPrefixCls} {

  }

</style>
