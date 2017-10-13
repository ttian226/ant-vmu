<template>
  <div class="demo-preview">
    <div class="demo-title">Input</div>
    <div class="demo-title">基本</div>
    <v-list header="Customize to focus">
      <v-input placeholder="auto focus" v-model="input1" autofocus>标题</v-input>
      <v-input placeholder="default" v-model="input1">标题</v-input>
      <v-input placeholder="click the button below to focus" v-model="input2" :click-to-focus="clickToFocus">标题</v-input>
      <v-list-item>
        <div style="text-align: center; color: #108ee9; width: 100%;" @click="handleClickToFocus()">click to focus</div>
      </v-list-item>
    </v-list>
    <v-list header="Click label to focus input">
      <v-input placeholder="click label to focus input" v-model="input3" label="label">标题</v-input>
    </v-list>
    <!-- <v-list header="Show clear icon">
      <v-input placeholder="displayed clear icon while typing" v-model="input3" clear>标题</v-input>
      <Icon type="cross-circle"></Icon>
    </v-list> -->
    <v-list header="Not editable / Disabled">
      <v-input v-model="input4" readonly>标题</v-input>
      <v-input v-model="input5" disabled>标题</v-input>
    </v-list>
    <v-list header="Format">
      <v-input placeholder="click to show number keyboard" v-model="input6" type="number">数字键盘</v-input>
      <v-input placeholder="****" v-model="input7" type="password">密码</v-input>
    </v-list>
  </div>
</template>

<script>
import WhiteSpace from '@/components/whitespace'
import VList from '@/components/list'
import VInput from '@/components/input'
// import Icon from '@/components/icon'

export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: 'Not editable',
      input5: 'disabled',
      clickToFocus: false
    }
  },
  components: {
    WhiteSpace,
    VList,
    VListItem: VList.Item,
    VInput
  },
  methods: {
    handleClickToFocus () {
      this.clickToFocus = !this.clickToFocus
    }
  }
}
</script>

<style lang="less">
  .demo-preview {
    margin-top: 15px;
  }
</style>


