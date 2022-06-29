---
order: 1
---

# useTabsSocket

## API
```typescript
const [data, setData] = useTabsSocket(key: string);
```

### Result
| Property            | Description                                                                                      | Type                                         |
| ------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| data                | Data sent from other tabs                                                                        | `any`                                        |
| setData             | Send data to other tabs                                                                          | `any`                                        |


### Params
| Property            | Description                                                                                      | Type                                         |
| ------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| key                 | Socket ID, only the tabs between the same ID can respond to each other's messages.               | `string`                                     |

## Examples
<code src="./demos/useTabsSocket"></code>