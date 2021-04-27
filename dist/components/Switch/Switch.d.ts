import { HTMLAttributes } from 'react';
export declare type SwitchProps = {
    className?: string;
    value: boolean;
    onClick: () => void;
    labelledBy: string;
    disabled?: boolean;
    readOnly?: boolean;
} & HTMLAttributes<HTMLButtonElement>;
declare const Switch: import("react").ForwardRefExoticComponent<{
    className?: string;
    value: boolean;
    onClick: () => void;
    labelledBy: string;
    disabled?: boolean;
    readOnly?: boolean;
} & HTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>;
export default Switch;
