/// <reference types="react" />
import React from 'react';
import moment from 'moment';
export interface CalendarContext {
    antLocale?: {
        Calendar?: any;
    };
}
export declare type CalendarMode = 'month' | 'year';
export interface CalendarProps {
    prefixCls?: string;
    className?: string;
    value?: moment.Moment;
    defaultValue?: moment.Moment;
    mode?: CalendarMode;
    fullscreen?: boolean;
    dateCellRender?: (date: moment.Moment) => React.ReactNode;
    monthCellRender?: (date: moment.Moment) => React.ReactNode;
    locale?: any;
    style?: React.CSSProperties;
    onPanelChange?: (date?: moment.Moment, mode?: CalendarMode) => void;
}
export interface CalendarState {
    value?: moment.Moment;
    mode?: CalendarMode;
}
export default class Calendar extends React.Component<CalendarProps, CalendarState> {
    static defaultProps: {
        locale: {};
        fullscreen: boolean;
        prefixCls: string;
        mode: string;
    };
    static propTypes: {
        monthCellRender: React.Requireable<any>;
        dateCellRender: React.Requireable<any>;
        fullscreen: React.Requireable<any>;
        locale: React.Requireable<any>;
        prefixCls: React.Requireable<any>;
        className: React.Requireable<any>;
        style: React.Requireable<any>;
        onPanelChange: React.Requireable<any>;
        value: React.Requireable<any>;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: CalendarContext;
    constructor(props: any, context: any);
    componentWillReceiveProps(nextProps: CalendarProps): void;
    monthCellRender: (value: any) => JSX.Element;
    dateCellRender: (value: any) => JSX.Element;
    setValue: (value: any) => void;
    setType: (type: any) => void;
    render(): JSX.Element;
}
