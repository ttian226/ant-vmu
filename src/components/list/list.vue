<template>
  <div :class="prefixCls">
    <div :class="`${prefixCls}-header`" v-if="header">{{ header }}</div>
    <div :class="`${prefixCls}-body`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VList',
  props: {
    header: String
  },
  data () {
    return {
      prefixCls: 'vm-list'
    }
  }
}
</script>

<style lang="less" src="./list.less"></style>