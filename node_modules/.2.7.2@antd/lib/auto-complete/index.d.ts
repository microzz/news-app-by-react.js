/// <reference types="react" />
import React from 'react';
import { AbstractSelectProps, OptionProps, OptGroupProps } from '../select';
export interface SelectedValue {
    key: string;
    label: React.ReactNode;
}
export interface DataSourceItemObject {
    value: string;
    text: string;
}
export declare type DataSourceItemType = string | DataSourceItemObject;
export interface InputProps {
    onChange?: React.FormEventHandler<any>;
    value: any;
}
export declare type ValidInputElement = HTMLInputElement | HTMLTextAreaElement | React.ReactElement<InputProps>;
export interface AutoCompleteProps extends AbstractSelectProps {
    size?: 'large' | 'small' | 'default';
    className?: string;
    notFoundContent?: Element;
    dataSource: DataSourceItemType[];
    defaultValue?: string | Array<any> | SelectedValue | Array<SelectedValue>;
    value?: string | Array<any> | SelectedValue | Array<SelectedValue>;
    onChange?: (value: string | Array<any> | SelectedValue | Array<SelectedValue>) => void;
    onSelect?: (value: string | Array<any> | SelectedValue | Array<SelectedValue>, option: Object) => any;
    disabled?: boolean;
    children: ValidInputElement | React.ReactElement<OptionProps> | Array<React.ReactElement<OptionProps>>;
}
export default class AutoComplete extends React.Component<AutoCompleteProps, any> {
    static Option: React.ClassicComponentClass<OptionProps>;
    static OptGroup: React.ClassicComponentClass<OptGroupProps>;
    static defaultProps: {
        prefixCls: string;
        transitionName: string;
        optionLabelProp: string;
        choiceTransitionName: string;
        showSearch: boolean;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    getInputElement: () => JSX.Element;
    render(): JSX.Element;
}
