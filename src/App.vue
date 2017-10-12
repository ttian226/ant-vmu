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

html {
  line-height: 1.15;
}

body {
  margin: 0;
}

button, input, optgroup, select, textarea {
  font-family: sans-serif;
  margin: 0;
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

.sub-title {
  color: #888;
  font-size: 14px;
  padding: 15px 0 9px 15px;
}
</style>
