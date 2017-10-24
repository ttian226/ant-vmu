<template>
  <div class="demo-preview">
    <div class="demo-title">Button</div>
    <div class="demo-title">类型/尺寸</div>
    <div class="demo-container">
      <wing-blank>
        <v-button class="btn">default</v-button>
        <white-space size="sm"></white-space>
        <v-button class="btn" disabled>default disabled</v-button>
        <white-space size="sm"></white-space>

        <v-button class="btn" type="primary">primary</v-button>
        <white-space size="sm"></white-space>
        <v-button class="btn" type="primary" disabled>primary disabled</v-button>
        <white-space size="sm"></white-space>

        <v-button class="btn" type="warning">warning</v-button>
        <white-space size="sm"></white-space>
        <v-button class="btn" type="warning" disabled>warning disabled</v-button>
        <white-space size="sm"></white-space>

        <v-button class="btn" loading>loading button</v-button>
        <white-space size="sm"></white-space>

        <v-button class="btn" icon="check-circle-o">with icon</v-button>
        <white-space size="lg"></white-space>

        <v-button class="btn" type="primary" inline>inline primary</v-button>
        <v-button class="btn" type="ghost" inline>inline ghost</v-button>
        <white-space size="sm"></white-space>

        <v-button class="btn" type="primary" inline size="small">inline small</v-button>
        <v-button class="btn" type="primary" inline size="small" disabled>inline disabled</v-button>
        <v-button class="btn" type="ghost" inline size="small">inline small</v-button>
        <white-space size="sm"></white-space>

        <v-button class="btn" type="ghost" inline size="small">ghost small</v-button>
        <v-button class="btn" type="ghost" inline size="small" disabled>ghost disabled</v-button>
      </wing-blank>
    </div>
  </div>
</template>
<script>
  import WingBlank from '@/components/wingblank'
  import WhiteSpace from '@/components/whitespace'
  import VButton from '@/components/button'
  export default {
    components: {
      WingBlank,
      WhiteSpace,
      VButton
    }
  }
</script>

<style lang="less">
  .demo-preview {
    margin-top: 15px;
  }

  .demo-flexbox {
    display: flex;
    align-items: center;
  }

  .btn-container .btn {
    margin: .16rem .13rem 0;
  }
</style>

