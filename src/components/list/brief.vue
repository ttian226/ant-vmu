<template>
  <div :class="`${briefCls}-brief`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VBrief',
  data () {
    return {
      briefCls: 'vm-list'
    }
  }
}
</script>

<style lang="less" src="./list.less"></style>