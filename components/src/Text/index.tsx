import React, { FC } from 'react';

const Text: FC<{ children: string }> = ({ children }) => {
    const characters = [undefined, null, ''];
    let text = characters.includes(children) ? '-' : children;
    return <>{text}</>;
};

export default Text;
