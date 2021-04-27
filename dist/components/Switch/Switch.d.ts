import { HTMLAttributes } from 'react';
export declare type SwitchProps = {
    className?: string;
    checked: boolean;
    onChange: () => void;
    labelledBy: string;
    readOnly?: boolean;
} & HTMLAttributes<HTMLButtonElement>;
declare const Switch: import("react").ForwardRefExoticComponent<{
    className?: string;
    checked: boolean;
    onChange: () => void;
    labelledBy: string;
    readOnly?: boolean;
} & HTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>;
export default Switch;
