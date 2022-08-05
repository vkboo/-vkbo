import { useCallback } from 'react';
import { useUpdateEffect, usePrevious } from 'ahooks';
import { useAliveController } from 'react-activation';
import { useLocation } from 'umi';
interface IOnCanCache {
  (params: { prevPathname: string; pathname: string }):
    | boolean
    | (() => string[]);
}

export interface IParams {
  routes: Array<string>[];
  type?: 'default' | 'custom';
  onCanCache?: IOnCanCache;
}

function useKeepAlive({
  type = 'default',
  routes,
  onCanCache = () => true,
}: IParams) {
  const location = useLocation();
  const pathname = location.pathname;
  const prevPathname = usePrevious(pathname);
  const { drop } = useAliveController();

  const getIndex = useCallback(() => {
    let outerIndex = -1;
    let innerIndex = -1;
    for (let i = 0, outLen = routes.length; i < outLen; i++) {
      for (let j = 0, inLen = routes[i].length; j < inLen; j++) {
        if (routes[i][j] === pathname) {
          outerIndex = i;
          innerIndex = j;
          continue;
        }
      }
      if (outerIndex > -1) continue;
    }
    return { innerIndex, outerIndex };
  }, [routes, pathname]);

  // 根据当前的路由，把除当前这个数组的其它数组所有的item都drop掉，把当前数组之后的路由drop掉了
  useUpdateEffect(() => {
    if (type === 'custom') return;
    const { innerIndex, outerIndex } = getIndex();
    if (innerIndex < 0 || outerIndex < 0) return;
    let clearRouteList = [];
    for (let i = 0, outLen = routes.length; i < outLen; i++) {
      for (let j = 0, inLen = routes[i].length; j < inLen; j++) {
        const currentPathname = routes[i][j];
        if (i !== outerIndex) {
          clearRouteList.push(currentPathname);
        } else if (j > innerIndex) {
          clearRouteList.push(currentPathname);
        }
      }
    }
    clearRouteList.forEach(drop);
  }, [getIndex, routes, drop, type]);

  useUpdateEffect(() => {
    if (type === 'default') return;
    const returnValue = onCanCache({
      prevPathname: prevPathname!,
      pathname,
    });
    if (typeof returnValue === 'boolean') {
      !returnValue && drop(prevPathname!);
    }
    if (typeof returnValue === 'function') {
      const list = returnValue();
      if (!Array.isArray(list)) return;
      list.forEach(drop);
    }
  }, [type, pathname, prevPathname, drop]);
}

export default useKeepAlive;
