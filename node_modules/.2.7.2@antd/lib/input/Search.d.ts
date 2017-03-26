/// <reference types="react" />
import React from 'react';
export interface SearchProps {
    className?: string;
    placeholder?: string;
    prefixCls?: string;
    style?: React.CSSProperties;
    defaultValue?: any;
    value?: any;
    onChange?: React.FormEventHandler<any>;
    onSearch?: (value: string) => any;
    size?: 'large' | 'default' | 'small';
    disabled?: boolean;
    readOnly?: boolean;
}
export default class Search extends React.Component<SearchProps, any> {
    static defaultProps: {
        prefixCls: string;
        onSearch(): void;
    };
    input: any;
    onSearch: () => void;
    render(): JSX.Element;
}
