<template>
  <div class="demo-preview">
    <div class="demo-title">WhiteSpace</div>
    <div class="demo-container">
      <white-space size="xs"></white-space>
      <div class="demo-grid">Block</div>
      <white-space size="sm"></white-space>
      <div class="demo-grid">Block</div>
      <white-space></white-space>
      <div class="demo-grid">Block</div>
      <white-space size="lg"></white-space>
      <div class="demo-grid">Block</div>
      <white-space size="xl"></white-space>
      <div class="demo-grid">Block</div>
    </div>
  </div>
</template>

<script>
  import WhiteSpace from '@/components/whitespace'
  export default {
    components: {
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
