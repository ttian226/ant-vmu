<template>
  <div :class="inputCls">
    <div :class="labelCls"><slot></slot></div>
    <div :class="`${prefixCls}-control`">
      <input
        :placeholder="placeholder"
        @focus="handleFocus"
      >
    </div>
  </div>

</template>

<script>
const prefixCls = 'vm-input'
const listPrefixCls = 'vm-list'

export default {
  name: 'VInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      prefixCls: prefixCls
    }
  },
  computed: {
    inputCls () {
      return {
        [`${listPrefixCls}-item`]: true,
        [`${prefixCls}-item`]: true
      }
    },
    labelCls () {
      return {
        [`${prefixCls}-label`]: true,
        [`${prefixCls}-label-5`]: true
      }
    }
  },
  methods: {
    handleFocus (event) {
      this.$emit('focus', event)
    }
  }
}
</script>

<style lang="less">
  @import '../../style/mixins';

  @listPrefixCls: vm-list;
  @inputPrefixCls: vm-input;

  .@{listPrefixCls}-item {
    position: relative;
    display: flex;
    padding-left: @h-spacing-lg;
    min-height: @list-item-height;
    background-color: @fill-base;
    vertical-align: middle;
    overflow: hidden;
    transition: background-color 200ms;
    align-items: center;

    &.@{inputPrefixCls}-item {
      height: @list-item-height;
      padding-left: @h-spacing-lg;
      padding-right: @h-spacing-lg;
      .hairline('bottom');
    }

    .@{inputPrefixCls}-label {
      color: @color-text-base;
      font-size: @font-size-heading;

      &.@{inputPrefixCls}-label-5 {
        width: 5 * @input-label-width;
      }
    }

    .@{inputPrefixCls}-control {
      flex: 1;
      font-size: 17px;
      width: auto;
      input {
        color: @color-text-base;
        font-size: @font-size-heading;
        appearance: none;
        border: 0;
        background-color: transparent;
        width: 100%;
        line-height: 1;
        padding: 2px 0;
        box-sizing: border-box;

        &::placeholder {
          color: @color-text-placeholder;
        }
      }
    }
  }
</style>
