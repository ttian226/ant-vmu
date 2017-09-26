<template>
  <div class="demo-preview">
    <div class="demo-title">WingBlank</div>
    <div class="demo-container">
      <wing-blank>
        <div class="demo-grid">Block</div>
      </wing-blank>
      <white-space></white-space>
      <wing-blank size="md">
        <div class="demo-grid">Block</div>
      </wing-blank>
      <white-space></white-space>
      <wing-blank size="sm">
        <div class="demo-grid">Block</div>
      </wing-blank>
    </div>
  </div>
</template>

<script>
  import WingBlank from '@/components/WingBlank/WingBlank'
  import WhiteSpace from '@/components/whitespace/whitespace'
  export default {
    components: {
      WingBlank,
      WhiteSpace
    }
  }
</script>

<style lang="less">
  .demo-preview {
    margin-top: 15px;
  }

  .demo-grid {
    background-color: rgb(235, 235, 239);
    color: rgb(187, 187, 187);
    text-align: center;
    height: 30px;
    line-height: 30px;
    width: 100%;
  }
</style>
