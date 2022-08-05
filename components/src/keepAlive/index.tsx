import React, { FC } from 'react';
import type { KeepAliveProps } from 'react-activation';
import KeepAlive, {
  AliveScope,
  useActivate,
  useUnactivate,
  withActivation,
} from 'react-activation';
import IglooAliveScope from './AliveScope';

function withKeepAlive(WrappedComponent: FC<{ [prop: string]: any }>) {
  return (props: Omit<KeepAliveProps, 'children'>) => {
    return () => (
      <KeepAlive {...props}>
        <WrappedComponent />
      </KeepAlive>
    );
  };
}

export default withKeepAlive;

const reactActivation = {
  KeepAlive,
  AliveScope,
  useActivate,
  useUnactivate,
  withActivation,
} as {
  KeepAlive: typeof KeepAlive;
  AliveScope: typeof AliveScope;
  useActivate: typeof useActivate;
  useUnactivate: typeof useUnactivate;
  withActivation: typeof withActivation;
};

export { reactActivation, IglooAliveScope };
