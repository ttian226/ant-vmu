<template>
  <div class="demo-preview">
    <div class="demo-title">Radio</div>
    <div class="demo-title">基本</div>
    <v-list header="Customize to focus">
      <v-radio v-model="radio1">Doctor</v-radio>
    </v-list>
  </div>
</template>

<script>
import WhiteSpace from '@/components/whitespace'
import VList from '@/components/list'
import VRadio from '@/components/radio'

export default {
  name: 'VRadio',
  data () {
    return {
      radio1: false
    }
  },
  components: {
    WhiteSpace,
    VList,
    VRadio
  }
}
</script>
