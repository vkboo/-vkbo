import type { IReducer } from './types';

const reducer: IReducer = (state, action) => {
  let newState: number[] = [];
  switch (action.type) {
    case 'ADD':
      newState = [...state, Date.now()];
      action.callback?.({
        length: newState.length,
      });
      break;
    case 'REMOVE':
      let index = -1;
      newState = state.filter((key, idx) => {
        if (key === action.key) {
          index = idx;
          return false;
        } else {
          return true;
        }
      });
      action.callback?.({
        index,
        length: newState.length,
      });
      break;
    case 'RESET':
      newState = action?.value as number[];
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

export default reducer;
