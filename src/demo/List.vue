<template>
  <div class="demo-preview">
    <div class="demo-title">List</div>
    <v-list header="Basic Style">
      <v-list-item>Title</v-list-item>
    </v-list>
    <white-space size="lg"></white-space>
    <v-list>
      <v-list-item extra="extra content">Title Content</v-list-item>
    </v-list>

    <v-list header="subTitle">
      <v-list-item multipleLine>
        Title
        <v-brief>subtitle</v-brief>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import VList from '@/components/list/list'
import VListItem from '@/components/list/listItem'
import WhiteSpace from '@/components/whiteSpace/whiteSpace'
import VBrief from '@/components/list/brief'

export default {
  components: {
    VList,
    VListItem,
    WhiteSpace,
    VBrief
  }
}
</script>

<style lang="less">
  .demo-preview {
    margin-top: 15px;
  }
</style>


