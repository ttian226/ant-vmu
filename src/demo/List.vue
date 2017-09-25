<template>
  <div class="demo-preview">
    <div class="demo-title">List</div>
    <div class="sub-title">Basic Style</div>
    <v-list>
      <v-list-item extra="extra content">Title</v-list-item>
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
</style>


