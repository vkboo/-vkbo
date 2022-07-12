import { useState } from 'react';
import { useMount } from 'ahooks';

interface ISet<T> {
  (values: T): void;
}

interface IParams<T> {
  defaultValue?: T;
  manual?: boolean;
  serviceToSet: (values: any) => Promise<any>;
  serviceToGet: () => Promise<any>;
}

type IResult<T> = [
  data: T,
  set: ISet<T>,
  rest: {
    loading: boolean;
    loadingSet: boolean;
    refresh: () => void;
  },
];

function useServerCacheState<T>(options: IParams<T>): IResult<T> {
  const { defaultValue, manual, serviceToSet, serviceToGet } = options;

  const [data, setData] = useState<T>(defaultValue!);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingSet, setLoadingSet] = useState<boolean>(false);

  const refresh = async () => {
    // 队列问题
    setLoading(true);
    const res = await serviceToGet();
    setData(res);
    setLoading(false);
  };

  const set: ISet<T> = async (values) => {
    setLoadingSet(true);
    await serviceToSet(values);
    setLoadingSet(false);
  };

  useMount(() => {
    if (manual) return;
    refresh();
  });

  return [
    data!,
    set,
    {
      loading,
      loadingSet,
      refresh,
    },
  ];
}

export default useServerCacheState;
