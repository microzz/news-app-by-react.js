/// <reference types="react" />
import React from 'react';
import AnchorLink from './AnchorLink';
import AnchorHelper from './anchorHelper';
export interface AnchorProps {
    target: () => HTMLElement | Window;
    children: React.ReactNode;
    prefixCls?: string;
    offsetTop?: number;
    bounds?: number;
    className?: string;
    style?: React.CSSProperties;
    affix?: boolean;
}
export default class Anchor extends React.Component<AnchorProps, any> {
    static Link: typeof AnchorLink;
    static defaultProps: {
        prefixCls: string;
        affix: boolean;
    };
    static childContextTypes: {
        anchorHelper: React.Requireable<any>;
    };
    refs: {
        ink?: any;
    };
    private scrollEvent;
    private anchorHelper;
    private _avoidInk;
    constructor(props: any);
    handleScroll: () => void;
    getChildContext(): {
        anchorHelper: AnchorHelper;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    updateInk: () => void;
    clickAnchorLink: (href: any, component: any) => void;
    renderAnchorLink: (child: any) => any;
    render(): JSX.Element;
}
