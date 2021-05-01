import { HTMLAttributes } from 'react';
export declare type TextInputProps = {
    value: string;
    onChange: (v: string) => void;
    multiline?: boolean;
    name?: string;
    required?: boolean;
} & Omit<HTMLAttributes<HTMLInputElement & HTMLTextAreaElement>, 'onChange'>;
declare const TextInput: import("react").ForwardRefExoticComponent<{
    value: string;
    onChange: (v: string) => void;
    multiline?: boolean;
    name?: string;
    required?: boolean;
} & Omit<HTMLAttributes<HTMLInputElement & HTMLTextAreaElement>, "onChange"> & import("react").RefAttributes<HTMLInputElement & HTMLTextAreaElement>>;
export default TextInput;
