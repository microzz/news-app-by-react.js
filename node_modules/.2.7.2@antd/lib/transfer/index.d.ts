/// <reference types="react" />
import React from 'react';
import List from './list';
import { TransferListProps } from './list';
import Operation from './operation';
import Search from './search';
export interface TransferItem {
    key: string;
    title: string;
    description?: string;
    disabled?: boolean;
}
export interface TransferProps {
    prefixCls?: string;
    className?: string;
    dataSource: TransferItem[];
    targetKeys: string[];
    selectedKeys?: string[];
    render?: (record: TransferItem) => React.ReactNode;
    onChange?: (targetKeys: string[], direction: string, moveKeys: any) => void;
    onSelectChange?: (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void;
    style?: React.CSSProperties;
    listStyle?: React.CSSProperties;
    titles?: string[];
    operations?: string[];
    showSearch?: boolean;
    filterOption: (inputValue: any, item: any) => boolean;
    searchPlaceholder?: string;
    notFoundContent?: React.ReactNode;
    footer?: (props: TransferListProps) => React.ReactNode;
    body?: (props: TransferListProps) => React.ReactNode;
    rowKey?: (record: TransferItem) => string;
    onSearchChange?: (direction: 'left' | 'right', e: Event) => void;
    lazy?: {};
}
export interface TransferContext {
    antLocale?: {
        Transfer?: any;
    };
}
export default class Transfer extends React.Component<TransferProps, any> {
    static List: typeof List;
    static Operation: typeof Operation;
    static Search: typeof Search;
    static defaultProps: {
        dataSource: never[];
        render: () => void;
        showSearch: boolean;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        dataSource: React.Requireable<any>;
        render: React.Requireable<any>;
        targetKeys: React.Requireable<any>;
        onChange: React.Requireable<any>;
        height: React.Requireable<any>;
        listStyle: React.Requireable<any>;
        className: React.Requireable<any>;
        titles: React.Requireable<any>;
        operations: React.Requireable<any>;
        showSearch: React.Requireable<any>;
        filterOption: React.Requireable<any>;
        searchPlaceholder: React.Requireable<any>;
        notFoundContent: React.Requireable<any>;
        body: React.Requireable<any>;
        footer: React.Requireable<any>;
        rowKey: React.Requireable<any>;
        lazy: React.Requireable<any>;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: TransferContext;
    splitedDataSource: any;
    constructor(props: TransferProps);
    componentWillReceiveProps(nextProps: TransferProps): void;
    splitDataSource(props: TransferProps): any;
    moveTo: (direction: any) => void;
    moveToLeft: () => void;
    moveToRight: () => void;
    handleSelectChange(direction: string, holder: string[]): void;
    handleSelectAll: (direction: any, filteredDataSource: any, checkAll: any) => void;
    handleLeftSelectAll: (filteredDataSource: any, checkAll: any) => void;
    handleRightSelectAll: (filteredDataSource: any, checkAll: any) => void;
    handleFilter: (direction: any, e: any) => void;
    handleLeftFilter: (e: any) => void;
    handleRightFilter: (e: any) => void;
    handleClear: (direction: any) => void;
    handleLeftClear: () => void;
    handleRightClear: () => void;
    handleSelect: (direction: any, selectedItem: any, checked: any) => void;
    handleLeftSelect: (selectedItem: any, checked: any) => void;
    handleRightSelect: (selectedItem: any, checked: any) => void;
    getTitles(): string[];
    getSelectedKeysName(direction: any): "sourceSelectedKeys" | "targetSelectedKeys";
    render(): JSX.Element;
}
