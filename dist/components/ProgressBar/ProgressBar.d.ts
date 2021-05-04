import { HTMLAttributes } from 'react';
export declare type ProgressBarProps = {
    value: number;
    range: [number, number];
} & HTMLAttributes<HTMLDivElement>;
declare const ProgressBar: import("react").ForwardRefExoticComponent<{
    value: number;
    range: [number, number];
} & HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
export default ProgressBar;
