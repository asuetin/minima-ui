import { HTMLAttributes } from 'react';
export declare type SliderProps = {
    value: number | [number, number];
    range: [number, number];
    onChange: (v: number | [number, number]) => void;
    step?: number;
    bigStep?: number;
    minSpan?: number;
    disabled?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;
declare const Slider: import("react").ForwardRefExoticComponent<{
    value: number | [number, number];
    range: [number, number];
    onChange: (v: number | [number, number]) => void;
    step?: number;
    bigStep?: number;
    minSpan?: number;
    disabled?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & import("react").RefAttributes<HTMLDivElement>>;
export default Slider;
