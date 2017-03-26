/// <reference types="react" />
import React from 'react';
export interface IModalPropTypes {
    wrapStyle?: {};
    maskStyle?: {};
    style?: {};
    animationType: 'none' | 'fade' | 'slide-up' | 'slide-down';
    animationDuration?: number;
    visible: boolean;
    maskClosable?: boolean;
    animateAppear?: boolean;
    onClose?: () => void;
    onAnimationEnd?: (visible: boolean) => void;
}
declare const RCModal: React.ClassicComponentClass<IModalPropTypes>;
export default RCModal;
