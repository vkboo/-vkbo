import React, { FC } from 'react';
import classnames from 'classnames';
import useContextData from './useContextData';

interface IProps {
  className?: string;
}

const SectionFooter: FC<IProps> = ({ className = '' }) => {
  const { renderFooter, groups } = useContextData();
  return renderFooter ? (
    <div className={classnames({ [className]: !!className })}>
      {renderFooter({
        length: groups.length,
      })}
    </div>
  ) : (
    <></>
  );
};

export default SectionFooter;
