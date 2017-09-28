<template>
  <div class="icon-demo">
    <div class="sub-title">Basic</div>
    <v-grid :data="data" :columnNum="3" :hasLine="false"></v-grid>
    <div class="sub-title">Size</div>
    <v-grid :data="sdata" :columnNum="5" :hasLine="false"></v-grid>
  </div>
</template>

<script>
import VGrid from '@/components/grid'

const icons = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'loading'
]

const sizes = ['xxs', 'xs', 'sm', 'md', 'lg']

export default {
  components: {
    VGrid
  },
  data () {
    return {
      data: icons.map(item => ({
        svg: {
          type: item
        },
        text: item
      })),
      sdata: sizes.map(item => ({
        svg: {
          type: 'search',
          size: item
        },
        text: item
      }))
    }
  }
}
</script>
