import React, { FC } from 'react';
import classnames from 'classnames';

interface IProps {
  className?: string;
  index: number;
}

const SectionContent: FC<IProps> = ({ children, index, className = '' }) => {
  const isChildrenFunc = typeof children === 'function';

  const content = isChildrenFunc
    ? children({ index })
    : React.Children.map(children, (child) => {
        return React.isValidElement(child) ? React.cloneElement(child) : child;
      });

  return (
    <div className={classnames({ [className]: !!className })}>{content}</div>
  );
};

export default SectionContent;
