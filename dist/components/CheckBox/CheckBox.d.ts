import { HTMLAttributes } from 'react';
export declare type CheckBoxProps = {
    className?: string;
    checked: boolean;
    onChange: () => void;
    labelledBy: string;
    readOnly?: boolean;
    name?: string;
    value?: number | string;
} & HTMLAttributes<HTMLInputElement>;
declare const CheckBox: import("react").ForwardRefExoticComponent<{
    className?: string;
    checked: boolean;
    onChange: () => void;
    labelledBy: string;
    readOnly?: boolean;
    name?: string;
    value?: number | string;
} & HTMLAttributes<HTMLInputElement> & import("react").RefAttributes<HTMLInputElement>>;
export default CheckBox;
