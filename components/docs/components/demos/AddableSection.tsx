import React from 'react';
import { AddableSection } from '@vkbo/components';

export default () => {
  return (
    <AddableSection onAdd={console.log} onRemove={console.log}>
      {({ index }) => {
        return <h2 data-index={index}>This section index is : {index}</h2>;
      }}
    </AddableSection>
  );
};
