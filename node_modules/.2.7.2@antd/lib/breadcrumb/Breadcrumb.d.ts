/// <reference types="react" />
import React from 'react';
export interface BreadcrumbProps {
    prefixCls?: string;
    routes?: Array<any>;
    params?: Object;
    separator?: React.ReactNode;
    itemRender?: (route: any, params: any, routes: Array<any>, paths: Array<string>) => React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
export default class Breadcrumb extends React.Component<BreadcrumbProps, any> {
    static Item: any;
    static defaultProps: {
        prefixCls: string;
        separator: string;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        separator: React.Requireable<any>;
        routes: React.Requireable<any>;
        params: React.Requireable<any>;
        linkRender: React.Requireable<any>;
        nameRender: React.Requireable<any>;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
