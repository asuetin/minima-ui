import { HTMLAttributes } from 'react';
export declare type SwitchProps = {
    checked: boolean;
    onChange: () => void;
    readOnly?: boolean;
} & HTMLAttributes<HTMLButtonElement>;
declare const Switch: import("react").ForwardRefExoticComponent<{
    checked: boolean;
    onChange: () => void;
    readOnly?: boolean;
} & HTMLAttributes<HTMLButtonElement> & import("react").RefAttributes<HTMLButtonElement>>;
export default Switch;
