<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import 'style/index';

html, body {
  font-family: "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", Helvetica, "Microsoft YaHei", Arial;
}

body {
  margin: 0;
}

.sub-title {
  color: #888;
  font-size: 14px;
  padding: 15px 0 9px 15px;
}
</style>
