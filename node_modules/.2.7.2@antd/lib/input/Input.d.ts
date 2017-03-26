/// <reference types="react" />
import React from 'react';
import { Component } from 'react';
export interface AutoSizeType {
    minRows?: number;
    maxRows?: number;
}
export interface InputProps {
    prefixCls?: string;
    className?: string;
    type?: string;
    id?: number | string;
    name?: string;
    value?: any;
    defaultValue?: any;
    placeholder?: string;
    size?: 'large' | 'default' | 'small';
    disabled?: boolean;
    readOnly?: boolean;
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    onPressEnter?: React.FormEventHandler<any>;
    onKeyDown?: React.FormEventHandler<any>;
    onChange?: React.FormEventHandler<any>;
    onClick?: React.FormEventHandler<any>;
    onFocus?: React.FormEventHandler<any>;
    onBlur?: React.FormEventHandler<any>;
    autosize?: boolean | AutoSizeType;
    autoComplete?: 'on' | 'off';
    style?: React.CSSProperties;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
}
export default class Input extends Component<InputProps, any> {
    static Group: any;
    static Search: any;
    static defaultProps: {
        disabled: boolean;
        prefixCls: string;
        type: string;
        autosize: boolean;
    };
    static propTypes: {
        type: React.Requireable<any>;
        id: React.Requireable<any>;
        size: React.Requireable<any>;
        disabled: React.Requireable<any>;
        value: React.Requireable<any>;
        defaultValue: React.Requireable<any>;
        className: React.Requireable<any>;
        addonBefore: React.Requireable<any>;
        addonAfter: React.Requireable<any>;
        prefixCls: React.Requireable<any>;
        autosize: React.Requireable<any>;
        onPressEnter: React.Requireable<any>;
        onKeyDown: React.Requireable<any>;
        onFocus: React.Requireable<any>;
        onBlur: React.Requireable<any>;
        prefix: React.Requireable<any>;
        suffix: React.Requireable<any>;
    };
    nextFrameActionId: number;
    refs: {
        input: any;
    };
    state: {
        textareaStyles: null;
        isFocus: boolean;
    };
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentDidUpdate(prevProps: any): void;
    handleFocus: (e: any) => void;
    handleBlur: (e: any) => void;
    handleKeyDown: (e: any) => void;
    handleTextareaChange: (e: any) => void;
    resizeTextarea: () => void;
    focus(): void;
    renderLabeledInput(children: any): any;
    renderLabeledIcon(children: any): any;
    renderInput(): any;
    render(): any;
}
