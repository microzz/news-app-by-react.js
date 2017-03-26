/// <reference types="react" />
import React from 'react';
export interface ILazyRenderBoxPropTypes {
    className?: string;
    visible?: boolean;
    hiddenClassName?: string;
    role?: string;
    style?: {};
}
declare const LazyRenderBox: React.ClassicComponentClass<ILazyRenderBoxPropTypes>;
export default LazyRenderBox;
