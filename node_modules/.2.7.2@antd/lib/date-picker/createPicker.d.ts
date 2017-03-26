/// <reference types="react" />
import React from 'react';
import moment from 'moment';
export interface PickerProps {
    value?: moment.Moment;
    prefixCls: string;
}
export default function createPicker(TheCalendar: any): React.ClassicComponentClass<any>;
