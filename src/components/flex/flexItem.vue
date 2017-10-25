<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'vm-flexbox'

export default {
  name: 'VFlexItem',
  data () {
    return {
      className: prefixCls + '-item'
    }
  }
}
</script>

<style lang="less" src="./flex.less"></style>
