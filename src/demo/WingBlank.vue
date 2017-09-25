<template>
  <div class="demo-preview">
    <div class="demo-title">WingBlank</div>
    <white-blank>
      <div class="demo-grid">Block</div>
    </white-blank>
    <white-space></white-space>
    <white-blank size="md">
      <div class="demo-grid">Block</div>
    </white-blank>
    <white-space></white-space>
    <white-blank size="sm">
      <div class="demo-grid">Block</div>
    </white-blank>
  </div>
</template>

<script>
  import WingBlank from '@/components/WingBlank/WingBlank'
  import WhiteSpace from '@/components/WhiteSpace/WhiteSpace'
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
    background-color: #ebebef;
    color: #bbb;
    text-align: center;
    height: 0.6rem;
    line-height: 0.6rem;
    width: 100%;
  }
</style>
