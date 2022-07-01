import React, { FC } from 'react';

interface IProps {
    /**
     * @description Text to display
     */
    children: string | number | Array<any> | undefined | null;
    /**
     * @description Display content when character is empty
     */
    emptyNode?: React.ReactNode;
    /**
     * @description Conditions for judging that characters are blank
     */
    emptyConditions?: Array<any>;
}

const Text: FC<IProps> = ({
    children,
    emptyNode = '-',
    emptyConditions = [undefined, null, ''],
}) => {
    if (React.isValidElement(children)) {
        return <>{children}</>;
    }
    const stringifyEmptyConditions = emptyConditions.map(item => JSON.stringify(item));
    const stringifyChildren = JSON.stringify(children);
    const text = stringifyEmptyConditions.includes(stringifyChildren) ? emptyNode : children;
    return <>{text}</>;
};

export default Text;