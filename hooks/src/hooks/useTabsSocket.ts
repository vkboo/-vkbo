import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useEventListener } from 'ahooks';

const keyPrefix = '@vkbo/hooks-tabs-scoket';

interface IUseTabsSocket {
  (key: string): [IData, (data: IData) => void];
}

interface IObjectData {
  [propname: string]: any;
}

type IData = IObjectData | null;

const useTabsSocket: IUseTabsSocket = (key) => {
  const [data, setData] = useState<IData>(null);
  useEventListener('storage', (event) => {
    const { value, id } = JSON.parse(event.newValue ?? '{}');
    if (key !== id) return;
    setData(value);
  });

  const setStorage: (data: IData) => void = (data) => {
    localStorage.setItem(
      keyPrefix,
      JSON.stringify({
        id: key,
        uid: nanoid(),
        value: data,
      }),
    );
  };

  return [data as IData, setStorage];
};

export default useTabsSocket;
