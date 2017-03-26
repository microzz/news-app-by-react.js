/// <reference types="react" />
import React from 'react';
export declare type SelectValue = string | any[] | {
    key: string;
    label: React.ReactNode;
} | Array<{
    key: string;
    label: React.ReactNode;
}>;
export interface AbstractSelectProps {
    size?: 'default' | 'large' | 'small';
    className?: string;
    notFoundContent?: React.ReactNode | null;
    prefixCls?: string;
    transitionName?: string;
    optionLabelProp?: string;
    choiceTransitionName?: string;
    showSearch?: boolean;
    allowClear?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
    placeholder?: string;
}
export interface SelectProps extends AbstractSelectProps {
    value?: SelectValue;
    defaultValue?: SelectValue;
    combobox?: boolean;
    multiple?: boolean;
    filterOption?: boolean | ((inputValue: string, option: Object) => any);
    tags?: boolean;
    onSelect?: (value: SelectValue, option: Object) => any;
    onDeselect?: (value: SelectValue) => any;
    onSearch?: (value: string) => any;
    dropdownMatchSelectWidth?: boolean;
    optionFilterProp?: string;
    defaultActiveFirstOption?: boolean;
    labelInValue?: boolean;
    getPopupContainer?: (triggerNode: React.ReactNode) => React.ReactNode | HTMLElement;
    dropdownStyle?: React.CSSProperties;
    dropdownMenuStyle?: React.CSSProperties;
    onChange?: (value: SelectValue) => void;
    tokenSeparators?: string[];
    getInputElement?: () => React.ReactElement<any>;
}
export interface OptionProps {
    disabled?: boolean;
    value?: any;
}
export interface OptGroupProps {
    label?: string | React.ReactElement<any>;
}
export interface SelectContext {
    antLocale?: {
        Select?: any;
    };
}
export default class Select extends React.Component<SelectProps, any> {
    static Option: React.ClassicComponentClass<OptionProps>;
    static OptGroup: React.ClassicComponentClass<OptGroupProps>;
    static defaultProps: {
        prefixCls: string;
        showSearch: boolean;
        transitionName: string;
        choiceTransitionName: string;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        className: React.Requireable<any>;
        size: React.Requireable<any>;
        combobox: React.Requireable<any>;
        notFoundContent: React.Requireable<any>;
        showSearch: React.Requireable<any>;
        optionLabelProp: React.Requireable<any>;
        transitionName: React.Requireable<any>;
        choiceTransitionName: React.Requireable<any>;
    };
    context: SelectContext;
    render(): JSX.Element;
}
