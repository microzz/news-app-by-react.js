/// <reference types="react" />
import React from 'react';
import { WrappedFormUtils } from './Form';
export interface FormItemLabelColOption {
    span: number;
    offset?: number;
}
export interface FormItemProps {
    prefixCls?: string;
    id?: string;
    label?: React.ReactNode;
    labelCol?: FormItemLabelColOption;
    wrapperCol?: FormItemLabelColOption;
    help?: React.ReactNode;
    extra?: string;
    validateStatus?: 'success' | 'warning' | 'error' | 'validating';
    hasFeedback?: boolean;
    className?: string;
    required?: boolean;
    style?: React.CSSProperties;
    colon?: boolean;
}
export interface FormItemContext {
    form: WrappedFormUtils;
    vertical: boolean;
}
export default class FormItem extends React.Component<FormItemProps, any> {
    static defaultProps: {
        hasFeedback: boolean;
        prefixCls: string;
        colon: boolean;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        label: React.Requireable<any>;
        labelCol: React.Requireable<any>;
        help: React.Requireable<any>;
        validateStatus: React.Requireable<any>;
        hasFeedback: React.Requireable<any>;
        wrapperCol: React.Requireable<any>;
        className: React.Requireable<any>;
        id: React.Requireable<any>;
        children: React.Requireable<any>;
        colon: React.Requireable<any>;
    };
    static contextTypes: {
        form: React.Requireable<any>;
        vertical: React.Requireable<any>;
    };
    context: FormItemContext;
    componentDidMount(): void;
    shouldComponentUpdate(...args: any[]): any;
    getHelpMsg(): {} | null | undefined;
    getControls(children: any, recursively: boolean): React.ReactElement<any>[];
    getOnlyControl(): React.ReactElement<any> | null;
    getChildProp(prop: any): any;
    getId(): any;
    getMeta(): any;
    renderHelp(): JSX.Element | null;
    renderExtra(): JSX.Element | null;
    getValidateStatus(): "" | "success" | "error" | "validating";
    renderValidateWrapper(c1: any, c2: any, c3: any): JSX.Element;
    renderWrapper(children: any): JSX.Element;
    isRequired(): any;
    renderLabel(): JSX.Element | null;
    renderChildren(): (JSX.Element | null)[];
    renderFormItem(children: any): JSX.Element;
    render(): JSX.Element;
}
