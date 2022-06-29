import React, { FC } from 'react';

const Text: FC = ({ children }) => {
  const characters = [undefined, null, ''];
  let text = characters.includes(children as string) ? '-' : children;
  return <>{text}</>;
};

export default Text;
