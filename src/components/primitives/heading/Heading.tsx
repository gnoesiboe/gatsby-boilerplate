import React from 'react';
import createClassName from 'classnames';
import styles from './heading.module.scss';

export enum TagOptions {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    span = 'span',
}

interface Props {
    tag: TagOptions;
    uppercase?: boolean;
    flatten?: boolean;
    children: React.ReactNode;
    className?: string;
}

const Heading: React.FC<Props> = ({
    tag,
    uppercase = true,
    flatten = false,
    children,
    className: incommingClassName,
    ...otherProps
}) => {
    const className: string = createClassName(
        styles.heading,
        {
            [styles.headingUppercase]: uppercase,
            [styles.headingFlatten]: flatten,
        },
        incommingClassName
    );

    return React.createElement(tag, { className, ...otherProps }, children);
};

export default Heading;
