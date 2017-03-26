/// <reference types="react" />
import React from 'react';
export declare type TabsType = 'line' | 'card' | 'editable-card';
export declare type TabsPosition = 'top' | 'right' | 'bottom' | 'left';
export interface TabsProps {
    activeKey?: string;
    defaultActiveKey?: string;
    hideAdd?: boolean;
    onChange?: (activeKey: string) => void;
    onTabClick?: Function;
    tabBarExtraContent?: React.ReactNode | null;
    type?: TabsType;
    tabPosition?: TabsPosition;
    onEdit?: (targetKey: string, action: any) => void;
    size?: 'default' | 'small';
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    animated?: boolean;
}
export interface TabPaneProps {
    /** 选项卡头显示文字 */
    tab?: React.ReactNode | string;
    style?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
}
export default class Tabs extends React.Component<TabsProps, any> {
    static TabPane: React.ClassicComponentClass<TabPaneProps>;
    static defaultProps: {
        prefixCls: string;
        hideAdd: boolean;
        animated: boolean;
    };
    createNewTab: (targetKey: any) => void;
    removeTab: (targetKey: any, e: any) => void;
    handleChange: (activeKey: any) => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
