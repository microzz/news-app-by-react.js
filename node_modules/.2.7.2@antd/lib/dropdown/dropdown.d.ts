/// <reference types="react" />
import React from 'react';
export interface DropDownProps {
    trigger?: ('click' | 'hover')[];
    overlay: React.ReactNode;
    style?: React.CSSProperties;
    onVisibleChange?: (visible?: boolean) => void;
    visible?: boolean;
    align?: Object;
    getPopupContainer?: () => HTMLElement;
    prefixCls?: string;
    placement?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
}
export default class Dropdown extends React.Component<DropDownProps, any> {
    static Button: React.ReactNode;
    static defaultProps: {
        prefixCls: string;
        mouseEnterDelay: number;
        mouseLeaveDelay: number;
        placement: string;
    };
    getTransitionName(): "slide-up" | "slide-down";
    render(): JSX.Element;
}
