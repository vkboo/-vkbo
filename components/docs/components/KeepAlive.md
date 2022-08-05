---
order: 3
---

# keepAlive

The secondary encapsulation of [react-activation](https://github.com/CJY0208/react-activation) makes it realize the caching function of React Project.

## NodeAliveScope
It is consistent with `AliveScope` of `react-activation`. Configured to realize routing page-level caching.

| Property            | Description                                                                                      | Type                                         | Default              |
| ------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------- |
| type                | Use the default caching scheme or the custom caching scheme?                                     | `'default' or 'custom'`                      | `default `           |
| routes              | Routes config                                                                                    | `string[][]`                                 | `(required)`         |
| onCanCache          | When customizing the caching scheme, Needs cache the page every time the route changes?         | `IOnCanCache`                                 | `() => true`         |

```ts
interface IOnCanCache {
  (params: { prevPathname: string; pathname: string }):
    | boolean
    | (() => string[]);
}

```


## withKeepAlive (HOC)
The `KeepAlive` component in `react-activation` is wrapped by HOC.

## reactActivation
The methods/components available in functional components in `react-activation` are exported intact.

| Property            | Description                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| KeepAlive           | Exactly the same as `KeepAlive` in `react-activation`.                                           |
| AliveScope          | Exactly the same as `AliveScope` in `react-activation`.                                          |
| useActivate         | Exactly the same as `useActivate` in `react-activation`.                                         |
| useUnactivate       | Exactly the same as `useUnactivate` in `react-activation`.                                       |
| withActivation      | Exactly the same as `withActivation` in `react-activation`.                                      |

## Examples

```tsx | pure
// layout/index.tsx

import { FC } from 'react';
import { useModel, useDispatch } from 'umi';
import { CurrencyContext, LocaleProvider } from 'iglooform';
import { NodeAliveScope, reactActivation } from '@vkbo/components';
import { IntlProvider } from 'react-intl';
import { locales } from '@/locales';

const Layout: FC = ({ children }) => {
    const { currentLang, exchange, exchangeBack } = useModel('@@qiankunStateFromMaster');
    return (
        <IntlProvider
            locale={currentLang}
            messages={locales[currentLang]}
        >
            <LocaleProvider currentLang={currentLang}>
                <CurrencyContext.Provider value={{ exchange, exchangeBack }}>
                     <NodeAliveScope
                        type="custom"
                        routes={[
                        ['/policy', '/policy/detail'],
                        ['/claim', '/claim/detail'],
                        ['/reimburse', '/reimburse/detail'],
                        ['/activity']
                        ]}
                        onCanCache={({prevPathname, pathname}) => {
                            // no cache
                            return false;

                            // return () => {
                            // There is no cached routing list.
                            //     return ['/policy'];
                            // }    
                        }}
                    >
                        {children}
                    </NodeAliveScope>
                </CurrencyContext.Provider>
            </LocaleProvider>
        </IntlProvider>
    )
};
export default Layout;
```

```tsx | pure

// pages/policy/index.tsx

import { FC } from 'react';
import { useModel, useDispatch } from 'umi';
import { withKeepAlive, reactActivation } from '@vkbo/components';

const { useActivate, } = reactActivation;

const Policy: FC = () => {

    const dispatch = useDispatch();

    // When returning to this page from cache, request to render the latest data.
    useActivate(() => {
        dispatch({
            type: 'policy/getData',
        })
    });

    return <>Policy Cotent</>
};

export default withKeepAlive(Policy)({
    // The value of name needs to be consistent with pathname of the current route.
    name: '/policy'
});


```
