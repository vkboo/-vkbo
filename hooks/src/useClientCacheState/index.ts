import { useMemo, useEffect } from 'react';
import { useLocalStorageState } from 'ahooks';

interface IState<T> {
  data: T;
  expiresTime?: number;
}

interface IFuncUpdater<T> {
  (previousState?: T): T;
}

interface ISetCache<T> {
  (value?: T | IFuncUpdater<T> | undefined, opts?: { expires?: number }): void;
}

interface Options<T> {
  defaultValue?: T | (() => T);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
  expires?: number;
}

function useClientCacheState<T>(key: string, options: Options<T> = {}) {
  const getLocalStorageStateOptions: () => Omit<
    Options<IState<T>>,
    'expires'
  > = () => {
    const opts: { [prop: string]: any } = {};
    Object.entries(options).forEach(([k, v]) => {
      if (k !== 'expires') {
        opts[k] = v;
      }
      if (k === 'defaultValue') {
        opts[k] = { data: v };
      }
    });
    return opts;
  };

  const localStorageStateOptions = getLocalStorageStateOptions();
  const [state, setState] = useLocalStorageState<IState<T>>(
    key,
    localStorageStateOptions,
  );

  const isExpired = useMemo(() => {
    if (typeof state?.expiresTime !== 'number') return false;
    return state?.expiresTime <= +new Date();
  }, [state?.expiresTime, +new Date()]);

  const cache = useMemo(
    () => (isExpired ? undefined : state?.data),
    [state?.data, isExpired],
  );

  useEffect(() => {
    if (!isExpired) return;
    setCache(undefined);
  }, [isExpired]);

  const getExpiresTime = (expires: number) => {
    const nowTime = +new Date();
    return nowTime + expires;
  };

  const setCache: ISetCache<T> = (value, opts = {}) => {
    let expiresTime!: number;
    if (typeof options?.expires === 'number') {
      expiresTime = getExpiresTime(options?.expires);
    }
    if (typeof opts?.expires === 'number') {
      expiresTime = getExpiresTime(opts?.expires);
    }

    if (typeof value === 'function') {
      setState((prevState) => ({
        data: (value as IFuncUpdater<T>)(prevState?.data),
        expiresTime,
      }));
      return;
    }

    setState({
      data: value as T,
      expiresTime,
    });
  };

  return [cache, setCache];
}

export default useClientCacheState;
