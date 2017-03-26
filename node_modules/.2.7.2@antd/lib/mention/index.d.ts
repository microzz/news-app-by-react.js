/// <reference types="react" />
import React from 'react';
export interface MentionProps {
    prefixCls: string;
    suggestionStyle?: Object;
    suggestions?: Array<any>;
    onSearchChange?: Function;
    onChange?: Function;
    notFoundContent?: any;
    loading?: Boolean;
    style?: Object;
    defaultValue?: any;
    value?: any;
    className?: string;
    multiLines?: Boolean;
    prefix?: string;
    placeholder?: string;
    getSuggestionContainer?: Function;
    onFocus?: Function;
    onBlur?: Function;
}
export interface MentionState {
    suggestions?: Array<any>;
    focus?: Boolean;
}
export default class Mention extends React.Component<MentionProps, MentionState> {
    static Nav: any;
    static toString: any;
    static toEditorState: any;
    static getMentions: any;
    static defaultProps: {
        prefixCls: string;
        notFoundContent: string;
        loading: boolean;
        multiLines: boolean;
    };
    constructor(props: any);
    componentWillReceiveProps({suggestions}: {
        suggestions: any;
    }): void;
    onSearchChange: (value: any) => any;
    onChange: (editorState: any) => void;
    defaultSearchChange(value: String): void;
    onFocus: (ev: any) => void;
    onBlur: (ev: any) => void;
    render(): JSX.Element;
}
