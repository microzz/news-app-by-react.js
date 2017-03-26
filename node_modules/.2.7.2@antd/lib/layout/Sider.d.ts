/// <reference types="react" />
import React from 'react';
export interface SiderProps {
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    collapsible?: boolean;
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    reverseArrow?: boolean;
    onCollapse?: (collapsed: boolean) => void;
    trigger?: React.ReactNode;
    width?: number | string;
    collapsedWidth?: number;
}
export default class Sider extends React.Component<SiderProps, any> {
    static defaultProps: {
        prefixCls: string;
        collapsible: boolean;
        defaultCollapsed: boolean;
        reverseArrow: boolean;
        width: number;
        collapsedWidth: number;
        style: {};
        name: string;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    setCollapsed: (collapsed: any) => void;
    toggle: () => void;
    render(): JSX.Element;
}
