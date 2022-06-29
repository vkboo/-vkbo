---
order: 1
---

# getVwUnit

考虑到PostCSS无法处理行内的样式，因此需要自己实现一个获取vw单位的方法。

## API
```typescript
const vw = getVwUnit(size: number, designBaseWidthPx?: number);
```

### Result
| Property            | Description                                                                                      | Type                                         |
| ------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| vw                  | 返回带有`vw`单位的长度值                                                                             | `string`                                     |


### Params
| Property            | Description                                                                                      | Type                                         | Default |
| ------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- | ------- |
| size                | 需要设置的单位是`px`的长度值                                                                          | `number`                                     |   -    |
| designBaseWidthPx   | 设计稿单位是`px`的`width`长度值                                                                      | `number`                                     |  `750`  |

## Examples
<code src="./demos/getVwUnit"></code>