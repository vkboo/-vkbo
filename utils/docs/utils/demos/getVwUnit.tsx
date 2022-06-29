import React from 'react';
import { getVwUnit } from '@vkbo/utils';

export default () => {
  const vwUnit = getVwUnit(375);
  return <div>{vwUnit}</div>;
};
