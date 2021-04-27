import { HTMLAttributes } from 'react';
export declare type TextInputProps = {
    className?: string;
    value: string;
    onChange: (v: string) => void;
    multiline?: boolean;
    labelledBy: string;
    name?: string;
    required?: boolean;
} & Omit<HTMLAttributes<HTMLInputElement & HTMLTextAreaElement>, 'onChange'>;
declare const TextInput: import("react").ForwardRefExoticComponent<{
    className?: string;
    value: string;
    onChange: (v: string) => void;
    multiline?: boolean;
    labelledBy: string;
    name?: string;
    required?: boolean;
} & Omit<HTMLAttributes<HTMLInputElement & HTMLTextAreaElement>, "onChange"> & import("react").RefAttributes<HTMLInputElement & HTMLTextAreaElement>>;
export default TextInput;
