import React, { FC, useReducer, useCallback, useEffect } from 'react';
import classnames from 'classnames';
import { Divider } from 'antd';
import type {
  TRenderLabel,
  TRenderAddItem,
  TRenderFooter,
  TOnAdd,
  TOnRemove,
} from './types';
import reducer from './reducer';
import AddableSectionContextProvider from './AddableSectionContextProvider';
import SectionLabel from './SectionLabel';
import SectionContent from './SectionContent';
import SectionAddItem from './SectionAddItem';
import SectionFooter from './SectionFooter';
import './style';

export interface IAddableSectionProps {
  /**
   * @description Render custom Add Item section
   */
  initCount?: number;
  /**
   * @description Render custom Add Item section
   */
  renderAddItem?: TRenderAddItem;
  /**
   * @description Render custom Label section
   */
  renderLabel?: TRenderLabel;
  /**
   * @description Render custom Footer section
   */
  renderFooter?: TRenderFooter;
  /**
   * @description when add item function callback
   */
  onAdd?: TOnAdd;
  /**
   * @description when remove item function callback
   */
  onRemove?: TOnRemove;
  /**
   * @description className
   */
  className?: string;
  /**
   * @description style
   */
  style?: React.CSSProperties;
}

const prefixCls = 'vkbo-components-addable-section';

const AddableSection: FC<IAddableSectionProps> = ({
  children,
  initCount,
  renderAddItem,
  renderLabel,
  renderFooter,
  className = '',
  style,
  onAdd,
  onRemove,
}) => {
  const [groups, dispatch] = useReducer(reducer, [Date.now()]);

  useEffect(() => {
    if (typeof initCount !== 'number') return;
    const value = Array.from({ length: initCount }).map((_: any, i) => i);
    dispatch({
      type: 'RESET',
      value,
    });
  }, [initCount]);

  const handleAddGroup = useCallback(() => {
    dispatch({
      type: 'ADD',
      callback: onAdd,
    });
  }, []);

  const handleRemoveGroup = useCallback((key) => {
    dispatch({
      type: 'REMOVE',
      key,
      callback: ({ index, length }) => {
        onRemove?.({
          index: index as number,
          length,
        });
      },
    });
  }, []);

  return (
    <AddableSectionContextProvider
      value={{
        groups,
        handleAddGroup,
        handleRemoveGroup,
        renderAddItem,
        renderLabel,
        renderFooter,
      }}
    >
      <div
        className={classnames([prefixCls, { [className]: !!className }])}
        style={style ?? {}}
      >
        {groups.map((group, index) => {
          return (
            <div key={group} className={`${prefixCls}-section`}>
              {index > 0 && (
                <Divider className={`${prefixCls}-section-divider`} />
              )}
              <SectionLabel
                className={`${prefixCls}-section-label`}
                index={index}
                groupKey={group}
              />
              <SectionContent
                className={`${prefixCls}-section-content`}
                index={index}
              >
                {children}
              </SectionContent>
            </div>
          );
        })}
        <SectionAddItem className={`${prefixCls}-add-item`} />
        <SectionFooter className={`${prefixCls}-footer`} />
      </div>
    </AddableSectionContextProvider>
  );
};

export default AddableSection;
