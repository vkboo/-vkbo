import React, { FC } from 'react';
import AddableSectionContext from './Context';
import type { IContext } from './types';

interface IProps {
  value: IContext;
}

const AddableSectionContextProvider: FC<IProps> = ({ children, value }) => {
  return (
    <AddableSectionContext.Provider value={value}>
      {children}
    </AddableSectionContext.Provider>
  );
};

export default AddableSectionContextProvider;
