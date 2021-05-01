import { HTMLAttributes } from 'react';
export declare type CheckBoxProps = {
    checked: boolean;
    onChange: () => void;
    readOnly?: boolean;
    name?: string;
    value?: number | string;
} & HTMLAttributes<HTMLInputElement>;
declare const CheckBox: import("react").ForwardRefExoticComponent<{
    checked: boolean;
    onChange: () => void;
    readOnly?: boolean;
    name?: string;
    value?: number | string;
} & HTMLAttributes<HTMLInputElement> & import("react").RefAttributes<HTMLInputElement>>;
export default CheckBox;
