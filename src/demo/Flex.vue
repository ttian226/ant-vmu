<template>
  <div class="flex-demo">
    <div class="sub-title">基本</div>
    <v-flex>
      <v-flex-item><div class="flex-content">Item</div></v-flex-item>
      <v-flex-item><div class="flex-content">Item</div></v-flex-item>
    </v-flex>
    <v-flex>
      <v-flex-item><div class="flex-content">Item</div></v-flex-item>
      <v-flex-item><div class="flex-content">Item</div></v-flex-item>
      <v-flex-item><div class="flex-content">Item</div></v-flex-item>
    </v-flex>
    <v-flex>
      <v-flex-item><div class="flex-content">Item</div></v-flex-item>
      <v-flex-item><div class="flex-content">Item</div></v-flex-item>
      <v-flex-item><div class="flex-content">Item</div></v-flex-item>
      <v-flex-item><div class="flex-content">Item</div></v-flex-item>
    </v-flex>
    <div class="sub-title">direction</div>
    <v-flex direction="row-reverse">
      <v-flex-item><div class="flex-content">1</div></v-flex-item>
      <v-flex-item><div class="flex-content">2</div></v-flex-item>
      <v-flex-item><div class="flex-content">3</div></v-flex-item>
      <v-flex-item><div class="flex-content">4</div></v-flex-item>
    </v-flex>
    <v-flex direction="column">
      <div class="flex-content inline">1</div>
      <div class="flex-content inline">2</div>
      <div class="flex-content inline">3</div>
    </v-flex>
    <v-flex direction="column-reverse">
      <div class="flex-content inline">1</div>
      <div class="flex-content inline">2</div>
      <div class="flex-content inline">3</div>
    </v-flex>
    <div class="sub-title">wrap</div>
    <v-flex wrap="wrap">
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline">Item</div>
    </v-flex>
    <div class="sub-title">justify</div>
    <v-flex justify="center">
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline">Item</div>
    </v-flex>
    <v-flex justify="end">
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline">Item</div>
    </v-flex>
    <v-flex justify="between">
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline">Item</div>
    </v-flex>
    <div class="sub-title">align</div>
    <v-flex>
      <div class="flex-content inline small">Item</div>
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline big">Item</div>
    </v-flex>
    <v-flex align="start">
      <div class="flex-content inline small">Item</div>
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline big">Item</div>
    </v-flex>
    <v-flex align="end">
      <div class="flex-content inline small">Item</div>
      <div class="flex-content inline">Item</div>
      <div class="flex-content inline big">Item</div>
    </v-flex>
  </div>
</template>

<script>
import VFlex from '@/components/flex'

export default {
  components: {
    VFlex,
    VFlexItem: VFlex.Item
  }
}
</script>

<style lang="less">
  .flex-demo {
    margin: 0 10px;

    .flex-content {
      background-color: #ebebef;
      color: #bbbbbb;
      text-align: center;
      height: 30px;
      line-height: 30px;
      width: 100%;
    }

    .flex-content.inline {
      width: 80px !important;
      margin: 9px 9px 9px 0;
    }

    .flex-content.inline.small {
      height: 20px;
      line-height: 20px;
    }

    .flex-content.inline.big {
      height: 40px;
      line-height: 40px;
    }

    .vm-flexbox {
      margin-bottom: 15px;
    }
  }
</style>