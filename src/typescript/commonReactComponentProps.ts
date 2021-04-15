import React from 'react';

type commonReactComponentProps = {
    style?: React.CSSProperties;
    className?: string;
    onClick?: React.MouseEventHandler<any>;
    id?: string;
    title?: string;
    children?: React.ReactNode;
};

export default commonReactComponentProps;
