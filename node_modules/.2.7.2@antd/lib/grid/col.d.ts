/// <reference types="react" />
import React from 'react';
export interface ColSize {
    span?: number;
    order?: number;
    offset?: number;
    push?: number;
    pull?: number;
}
export interface ColProps {
    className?: string;
    span?: number;
    order?: number;
    offset?: number;
    push?: number;
    pull?: number;
    xs?: number | ColSize;
    sm?: number | ColSize;
    md?: number | ColSize;
    lg?: number | ColSize;
    prefixCls?: string;
    style?: React.CSSProperties;
}
export default class Col extends React.Component<ColProps, any> {
    static propTypes: {
        span: React.Requireable<any>;
        order: React.Requireable<any>;
        offset: React.Requireable<any>;
        push: React.Requireable<any>;
        pull: React.Requireable<any>;
        className: React.Requireable<any>;
        children: React.Requireable<any>;
        xs: React.Requireable<any>;
        sm: React.Requireable<any>;
        md: React.Requireable<any>;
        lg: React.Requireable<any>;
    };
    render(): JSX.Element;
}
