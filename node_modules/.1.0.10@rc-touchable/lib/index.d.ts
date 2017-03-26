/// <reference types="react" />
import React from 'react';
export interface ITouchable {
    disabled?: boolean;
    delayPressIn?: number;
    delayLongPress?: number;
    delayPressOut?: number;
    pressRetentionOffset?: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    hitSlop?: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    activeStyle?: any;
    activeClassName?: string;
    onPress?: (e?: any) => void;
    onLongPress?: (e?: any) => void;
    longPressCancelsPress?: boolean;
}
declare const Touchable: React.ClassicComponentClass<ITouchable>;
export default Touchable;
