import { HTMLAttributes } from 'react';
export declare type RadioGroupProps = {
    options: {
        value: string | number;
        label?: string;
    }[];
    value: string | number;
    onChange: (v: string | number) => void;
    disabled?: boolean;
} & Omit<HTMLAttributes<HTMLUListElement>, 'onChange'>;
declare const RadioGroup: import("react").ForwardRefExoticComponent<{
    options: {
        value: string | number;
        label?: string;
    }[];
    value: string | number;
    onChange: (v: string | number) => void;
    disabled?: boolean;
} & Omit<HTMLAttributes<HTMLUListElement>, "onChange"> & import("react").RefAttributes<HTMLUListElement>>;
export default RadioGroup;
