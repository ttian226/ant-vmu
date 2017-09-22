<template>
  <div class="demo-preview">
    <div class="demo-title">Button</div>
    <div class="btn-container">
      <v-button class="btn">default</v-button>      
      <v-button class="btn" type="primary">primary button</v-button>
      <v-button class="btn" disabled>disabled button</v-button>
      <v-button class="btn" loading>(icon) loading button</v-button>

      <div style="height: .16rem;" />

      <p>inline / small</p>
      <div class="demo-flexbox">
        <v-button class="btn" type="primary" inline>inline</v-button>
        <v-button class="btn" type="ghost" inline>inline</v-button>
        <v-button class="btn" type="warning" inline>inline</v-button>
      </div>
      <div class="demo-flexbox">
        <v-button class="btn" type="primary" inline size="small">inline small</v-button>
        <v-button class="btn" type="ghost" inline size="small">inline small</v-button>
        <v-button class="btn" type="warning" inline size="small">inline small</v-button>
      </div>
    </div>
  </div>
</template>
<script>
  import VButton from '@/components/button/button'
  export default {
    components: {
      VButton
    }
  }
</script>

<style lang="less">
  .demo-preview {
    margin-left: 15px;
    margin-right: 15px;
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

  .demo-flexbox {
    display: flex;
    align-items: center;
  }

  .btn-container .btn {
    margin: .16rem .13rem 0;
  }
</style>

