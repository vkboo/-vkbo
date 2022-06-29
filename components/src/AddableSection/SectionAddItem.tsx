import React, { FC, useContext } from 'react';
import classnames from 'classnames';
import { Button } from 'antd';
import useContextData from './useContextData';

interface IProps {
  className?: string;
}

const SectionAddItem: FC<IProps> = ({ className = '' }) => {
  const { handleAddGroup, renderAddItem, groups } = useContextData();
  return (
    <div className={classnames({ [className]: !!className })}>
      {renderAddItem ? (
        renderAddItem({
          add: handleAddGroup,
          length: groups.length,
        })
      ) : (
        <Button onClick={handleAddGroup}>
          Add Item
        </Button>
      )}
    </div>
  );
};

export default SectionAddItem;
