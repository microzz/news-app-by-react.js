/// <reference types="react" />
import React from 'react';
import AnchorHelper from './anchorHelper';
export interface AnchorLinkProps {
    href: string;
    onClick: (href: string, component: Element) => void;
    active?: boolean;
    prefixCls?: string;
    children?: any;
    title?: React.ReactNode;
    offsetTop: number;
    bounds: number;
    target?: () => HTMLElement | Window;
    affix?: boolean;
}
export default class AnchorLink extends React.Component<AnchorLinkProps, any> {
    static contextTypes: {
        anchorHelper: React.Requireable<any>;
    };
    static defaultProps: {
        href: string;
        prefixCls: string;
    };
    context: {
        anchorHelper: AnchorHelper;
    };
    private _component;
    setActiveAnchor(): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    renderAnchorLink: (child: any) => any;
    refsTo: (component: any) => void;
    scrollTo: (e: any) => void;
    render(): JSX.Element;
}
