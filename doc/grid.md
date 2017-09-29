在水平和垂直方向，将布局切分成若干等大的区块。

## 使用方法

1. 区块中的内容应该是同类元素，eg：都是图片，或者都是图片+文字。
2. 图片支持两种，一种直接传图片路径，一种支持`Icon`组件传递svg对象{type, size}
3. `renderItem()`方法支持自定义区块内容
4. `onClick()`方法绑定点击每个区块的回调函数

* data为`{icon, text}`

```javascript
const data = Array.from(new Array(9)).map((val, index) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png', // image path
  text: `name${index}`
}))
```

* data为`{svg: {type, size}, text}`

```javascript
const icons = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'loading'
]

const data = icons.map(item => ({
  svg: {
    type: item, // 支持的type请参考Icon组件的type参数
    size: 'lg' // 支持的size请参考Icon组件的size参数
  },
  text: item
}))
```

* 通过renderItem方法自定义区块内容

```html
<v-grid :data="data" :columnNum="3" :renderItem="customerItem"></v-grid>
```

```javascript
function customerItem (item) {
  return `
    <div style="padding: 12.5px">
      <img src="${item.icon}" style="width: 75px; height: 75px;" alt="icon"/>
      <div style="color: #888; font-size: 14px; margin-top: 12px;">
        <span>I am title..</span>
      </div>
    </div>
  `
}
```

* 通过onClick方法绑定点击事件的回调函数

```html
<v-grid :data="data" :columnNum="3" @onClick="clickEvent"></v-grid>
```

```javascript
function clickEvent (item, index) {
  // do something
}
```

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| data    |    传入的菜单数据     | `Array<{icon, text}>` 或 `Array<{svg: {type, size}, text}>`  | [] |
| onClick    |   点击每个菜单的回调函数   | (item: Object, index: number): void  | - |
| columnNum    |   列数     | number  |  `4` |
| hasLine    |   是否有边框     | boolean  |  `true` |
| renderItem    |   自定义每个 grid 条目的创建函数   | el => html template string  | - |
| square    |   每个格子是否固定为正方形   | boolean | true |