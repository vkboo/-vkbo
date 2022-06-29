type IEmptyFunction = () => void;
type TAction = {
  type: 'ADD' | 'REMOVE' | 'RESET';
  key?: number;
  value?: number[];
  callback?: (params: { index?: number; length: number }) => void;
};
type TGroups = number[];
type THandleRemoveGroup = (key: number) => void;
export type TOnAdd = (params: { length: number }) => void;
export type TOnRemove = (params: { index: number; length: number }) => void;

export type TRenderLabel = (params: {
  index: number;
  remove: IEmptyFunction;
  length: number;
}) => React.ReactNode;
export type TRenderFooter = (params: { length: number }) => React.ReactNode;

export type TRenderAddItem = (params: {
  add: IEmptyFunction;
  length: number;
}) => React.ReactNode;

export interface IReducer {
  (state: TGroups, action: TAction): TGroups;
}

export interface IContext {
  groups: TGroups;
  handleAddGroup: IEmptyFunction;
  handleRemoveGroup: THandleRemoveGroup;

  renderAddItem?: TRenderAddItem;
  renderLabel?: TRenderLabel;
  renderFooter?: TRenderFooter;
}
