/// <reference types="react" />
import React from 'react';
import { TransferItem } from './index';
export interface TransferListProps {
    prefixCls: string;
    dataSource: TransferItem[];
    filter?: string;
    showSearch?: boolean;
    searchPlaceholder?: string;
    titleText?: string;
    style?: React.CSSProperties;
    handleFilter: (e: any) => void;
    handleSelect: (selectedItem: any, checked: boolean) => void;
    handleSelectAll: (dataSource: any[], checkAll: boolean) => void;
    handleClear: () => void;
    render?: (item: any) => any;
    body?: (props: any) => any;
    footer?: (props: any) => void;
    checkedKeys: string[];
    checkStatus?: boolean;
    position?: string;
    notFoundContent?: React.ReactNode;
    filterOption: (filterText: any, item: any) => boolean;
    lazy?: boolean | {};
}
export interface TransferListContext {
    antLocale?: {
        Transfer?: any;
    };
}
export default class TransferList extends React.Component<TransferListProps, any> {
    static defaultProps: {
        dataSource: never[];
        titleText: string;
        showSearch: boolean;
        render: () => void;
        lazy: {};
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: TransferListContext;
    timer: number;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(...args: any[]): any;
    getCheckStatus(filteredDataSource: any): "none" | "all" | "part";
    handleSelect: (selectedItem: any) => void;
    handleFilter: (e: any) => void;
    handleClear: () => void;
    matchFilter: (text: any, item: any) => boolean;
    renderItem: (item: any) => {
        renderedText: any;
        renderedEl: any;
    };
    render(): JSX.Element;
}
