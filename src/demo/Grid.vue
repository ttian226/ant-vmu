<template>
  <div class="grid-demo">
    <div class="sub-title">no border</div>
    <v-grid :data="data" :hasLine="false"></v-grid>
    <div class="sub-title">grid item adjust accroiding to img size</div>
    <v-grid :data="data" :square="false" class="not-square-grid"></v-grid>
    <div class="sub-title">columnNum=3</div>
    <v-grid :data="data" :columnNum="3" @onClick="clickEvent"></v-grid>
    <div class="sub-title">always square grid item</div>
    <v-grid :data="data"></v-grid>
    <div class="sub-title">custom content</div>
    <v-grid :data="data" :columnNum="3" :renderItem="customerItem"></v-grid>
  </div>
</template>

<script>
import VGrid from '@/components/grid'

export default {
  components: {
    VGrid
  },
  data () {
    return {
      data: Array.from(new Array(9)).map((val, index) => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `name${index}`
      }))
    }
  },
  methods: {
    clickEvent (el, index) {
      console.log(el, index)
    },
    customerItem (item) {
      return `
        <div style="padding: 12.5px">
          <img src="${item.icon}" style="width: 75px; height: 75px;" alt="icon"/>
          <div style="color: #888; font-size: 14px; margin-top: 12px;">
            <span>I am title..</span>
          </div>
        </div>
      `
    }
  }
}
</script>

<style lang="less">
.not-square-grid .vm-grid-icon {
  width: 40px;
  height: 60px;
}
</style>

