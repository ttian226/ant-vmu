Flex 是 CSS flex 布局的一个封装。

## 使用方法

1. `VFlexItem`不能单独使用，它一定要作为`VFlex`子节点而存在
2. `VFlexItem`组件默认加上了样式`flex:1`,保证所有item平均分宽度, `VFlex`容器的children不一定是`VFlexItem`

* 基本用法VFlex+VFLexItem

```html
<v-flex>
  <v-flex-item><div class="flex-content">Item</div></v-flex-item>
  <v-flex-item><div class="flex-content">Item</div></v-flex-item>
</v-flex>
```

* 单独使用VFlex

```html
<v-flex>
  <div class="flex-content inline">1</div>
  <div class="flex-content inline">2</div>
  <div class="flex-content inline">3</div>
</v-flex>
```

## API

### VFLex

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| direction | 项目定位方向，值可以为 `row`,`row-reverse`,`column`,`column-reverse` | String | `row` |
| wrap | 子元素的换行方式，可选`nowrap`,`wrap`,`wrap-reverse` | String | `nowrap` |
| justify | 子元素在主轴上的对齐方式，可选`start`,`end`,`center`,`between`,`around` | String | `start` |
| align | 子元素在交叉轴上的对齐方式，可选`start`,`center`,`end`,`baseline`,`stretch` | String | `center` |
| alignContent | 有多根轴线时的对齐方式，可选`start`,`end`,`center`,`between`,`around`,`stretch` | String | `stretch` |