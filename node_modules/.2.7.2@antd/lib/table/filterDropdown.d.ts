/// <reference types="react" />
import React from 'react';
export interface FilterMenuProps {
    locale: any;
    selectedKeys: string[];
    column: {
        filterMultiple?: boolean;
        filterDropdown?: React.ReactNode;
        filters?: string[];
        filterDropdownVisible?: boolean;
        onFilterDropdownVisibleChange?: (visible: boolean) => any;
    };
    confirmFilter: (column: Object, selectedKeys: string[]) => any;
    prefixCls: string;
    dropdownPrefixCls: string;
}
export default class FilterMenu extends React.Component<FilterMenuProps, any> {
    static defaultProps: {
        handleFilter(): void;
        column: {};
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    setSelectedKeys: ({selectedKeys}: {
        selectedKeys: any;
    }) => void;
    setVisible(visible: any): void;
    handleClearFilters: () => void;
    handleConfirm: () => void;
    onVisibleChange: (visible: any) => void;
    confirmFilter(): void;
    renderMenuItem(item: any): JSX.Element;
    renderMenus(items: any): any;
    handleMenuItemClick: (info: any) => void;
    render(): JSX.Element;
}
