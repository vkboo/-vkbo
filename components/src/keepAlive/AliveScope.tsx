import React, { FC } from 'react';
import { AliveScope } from 'react-activation';
import useKeepAlive from './useKeepAlive';
import type { IParams } from './useKeepAlive';

const IglooAliveScope: FC<IParams> = ({ children, ...rest }) => {
  return (
    <AliveScope>
      <Container {...rest}>{children}</Container>
    </AliveScope>
  );
};

export default IglooAliveScope;

const Container: FC<IParams> = ({ children, type, routes, onCanCache }) => {
  useKeepAlive({
    type,
    routes,
    onCanCache,
  });
  return <>{children}</>;
};
