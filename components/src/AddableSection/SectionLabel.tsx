import React, { FC } from 'react';
import { Row, Typography, Button } from 'antd';
import classnames from 'classnames';
import useContextData from './useContextData';

interface IProps {
  index: number;
  groupKey: number;
  className?: string;
}

const SectionLabel: FC<IProps> = ({ index, groupKey, className = '' }) => {
  const { groups, handleRemoveGroup, renderLabel } = useContextData();
  return (
    <div className={classnames({ [className]: !!className })}>
      {renderLabel ? (
        renderLabel({
          index,
          remove: () => handleRemoveGroup(groupKey),
          length: groups.length,
        })
      ) : (
        <Row justify="space-between">
          <Typography.Text>
            Item {index + 1}
          </Typography.Text>
          {groups.length > 1 && (
            <Button
              type="link"
              onClick={() => {
                handleRemoveGroup(groupKey);
              }}
            >
              Remove
            </Button>
          )}
        </Row>
      )}
    </div>
  );
};

export default SectionLabel;
