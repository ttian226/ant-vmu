<template>
  <div class="demo-preview">
    <div class="demo-title">Input</div>
    <div class="demo-title">基本</div>
    <v-list header="Customize to focus">
      <v-input placeholder="auto focus">标题</v-input>
      <v-input placeholder="click the button below to focus" @focus="handleFocus($event)">标题</v-input>
    </v-list>
  </div>
</template>

<script>
import WhiteSpace from '@/components/whitespace/whitespace'
import VList from '@/components/list/list'
import VListItem from '@/components/list/listItem'
import VInput from '@/components/input/input'

export default {
  components: {
    WhiteSpace,
    VList,
    VListItem,
    VInput
  },
  methods: {
    handleFocus (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less">
  .demo-preview {
    margin-top: 15px;
  }
</style>


