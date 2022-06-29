import { createContext } from 'react';
import type { IContext } from './types';

const AddableSectionContext = createContext<IContext>({
  groups: [],
  handleAddGroup: () => {},
  handleRemoveGroup: () => {},
});

export default AddableSectionContext;
