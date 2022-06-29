---
order: 2
---

# AddableSection

## Props

<API src="../../src/AddableSection/index.tsx" hideTitle></API>


### TRenderAddItem

```typescript
type TRenderAddItem = (params: {
  add: () => void,
  length: number,
}) => React.ReactNode;
```

### TRenderLabel

```typescript
type TRenderLabel = (params: {
  index: number,
  remove: () => void,
  length: number
}) => React.ReactNode;
```

### TRenderFooter

```typescript
type TRenderFooter = (params: {
  length: number
}) => React.ReactNode;
```

### TOnAdd

```typescript
type TOnAdd = (params: {
  length: number
}) => void;
```

### TOnRemove

```typescript
type TOnRemove = (params: {
  index: number,
  length: number
}) => void;
```

## Examples

<code src="./demos/AddableSection.tsx"></code>
