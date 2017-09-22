<template>
  <div class="demo-preview">
    <div class="demo-title">List</div>
    <v-list>
      <v-list-item>Title</v-list-item>
    </v-list>
  </div>
</template>

<script>
  import VList from '@/components/list/list'
  import VListItem from '@/components/list/listItem'

  export default {
    components: {
      VList,
      VListItem
    }
  }
</script>

<style lang="less">
  .demo-preview {
    margin-top: 15px;
  }

  .demo-title {
    text-align: left;
    padding: 15px 0 9px 15px;
    color: #000;
    font-size: 16px;
    line-height: 16px;
    height: 16px;
    font-weight: bolder;
    position: relative;
  }
</style>


