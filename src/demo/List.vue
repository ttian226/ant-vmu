<template>
  <div class="demo-preview">
    <div class="demo-title">List</div>
    <v-list header="Basic Style">
      <v-list-item>Title</v-list-item>
    </v-list>
    <white-space></white-space>
    <v-list>
      <v-list-item extra="extra content">Title Content</v-list-item>
    </v-list>

    <v-list header="subTitle">
      <v-list-item multipleLine arrow="horizontal">
        Title
        <v-brief>subtitle</v-brief>
      </v-list-item>
    </v-list>

    <v-list header="Customized Right Side（Empty Content / Text / Image）">
      <v-list-item>Title</v-list-item>
      <v-list-item arrow="horizontal" click>Title</v-list-item>
      <v-list-item extra="extra content" arrow="horizontal" click>Title</v-list-item>
      <v-list-item
        extra="what?"
        arrow="horizontal"
        multipleLine
        align="top"
      >
        Title
        <v-brief>subtitle</v-brief>
      </v-list-item>
      <v-list-item
        extra="default"
        arrow="horizontal"
        multipleLine
      >
        Title
        <v-brief>subtitle</v-brief>
      </v-list-item>
      <v-list-item
        extra="PM 09:00"
        arrow="horizontal"
        multipleLine
        align="bottom"
      >
        Title
        <v-brief>subtitle</v-brief>
      </v-list-item>
    </v-list>

    <v-list header="Icon in the left">
      <v-list-item
        click
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
      >
        Title
      </v-list-item>
      <v-list-item
        click
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
      >
        Title
      </v-list-item>
    </v-list>
    <white-space></white-space>
    <v-list>
      <v-list-item
        click
        multipleLine
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
      >
        Title
        <v-brief>subtitle</v-brief>
      </v-list-item>
      <v-list-item
        click
        multipleLine
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
      >
        Title
        <v-brief>subtitle</v-brief>
      </v-list-item>
    </v-list>

    <v-list header="Text Wrapping">
      <v-list-item>
        Single line，long text will be hidden with ellipsis；
      </v-list-item>
      <v-list-item wrap>
        Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text
      </v-list-item>
    </v-list>
    <white-space></white-space>
  </div>
</template>

<script>
import VList from '@/components/list'
import WhiteSpace from '@/components/whitespace'

export default {
  components: {
    WhiteSpace,
    VList,
    VListItem: VList.Item,
    VBrief: VList.Brief
  }
}
</script>

<style lang="less">
  .demo-preview {
    margin-top: 15px;
  }
</style>


