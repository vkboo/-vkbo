import React from 'react';
import { useMobile } from '@vkbo/hooks';

export default () => {
  const isMobile = useMobile();
  return <h2>Current Mode: {isMobile ? 'Mobile' : 'Desktop'}</h2>;
};
