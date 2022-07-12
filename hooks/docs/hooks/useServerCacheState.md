---
order: 3
---

# useServerCacheState

## API

```typescript

interface ISet<T> {
  (values: T): void;
}

const [data, set, { loading, loadingSet, refresh }] = useServerCacheState<T>(options: {
    defaultValue?: T;
    manual?: boolean;
    serviceToSet: (values: any) => Promise<any>;
    serviceToGet: () => Promise<any>;
}): [
  T,
  ISet<T>,
  {
    loading: boolean;
    loadingSet: boolean;
    refresh: () => void;
  },
];

```

### Result
| Property            | Description                                                                                      | Type                                         |
| ------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| data                | Cache data.                                                                                      | `T`                                          |
| set                 | Set cache data.                                                                                  | `(values: T) => void`                        |
| loading             | Get cache loading.                                                                               | `boolean`                                    |
| loadingSet          | Set cache loading.                                                                               | `boolean`                                    |
| refresh             | refresh to get latest cache data                                                                 | `() => void`                                 |


### Options

| Property            | Description                                                                                      | Type                                         |
| ------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| defaultValue        | Default data value when NO remote cache is requested.                                            | `T`                                          |
| manual              | Auto request remote cache data.                                                                  | `boolean`                                    |
| serviceToSet        | service function to set cache data.                                                              | `() => Promise<any>`                         |
| serviceToGet        | service function to get cache data.                                                              | `() => Promise<any>`                         |


## Examples

<code src="./demos/useServerCacheState"></code>
