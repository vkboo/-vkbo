---
order: 2
---

# useClientCacheState

## API

```typescript

type Tvalue<T> = T | ((prevState?: T) => T) | undefined, opts?: { expires?: number; }): void;

const [state, setState] = useClientCacheState<T>(
    key: string,
    options: Options<T>
): [T?, ((value?: TValue<T>];

```

### Options

| Property            | Description                                                                                      | Type                                         |
| ------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| expires             | Expiration time(unit: `ms`), If not specified, it means permanent.                               | `boolean`                                    |
| ...                 | More options are extends from [ahooks useLocalStorageState](https://ahooks.js.org/hooks/use-local-storage-state#options)            | `-`       |

## Examples

<code src="./demos/useClientCacheState"></code>
