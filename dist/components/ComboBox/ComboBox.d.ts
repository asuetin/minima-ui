import { HTMLAttributes } from 'react';
import Icon from 'components/Icon';
export declare type ComboBoxProps = {
    height?: number;
    options: {
        value: string | number;
        label?: string;
        group?: string | number;
    }[];
    groups?: {
        value: string | number;
        label: string;
    }[];
    value: string | number | (string | number)[];
    onChange: (v: string | number | (string | number)[]) => void;
    visibleOptionCount?: number;
    arrowIcon?: typeof Icon | SVGSVGElement | HTMLImageElement;
    searchDisabled?: boolean;
    disabled?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;
declare const ComboBox: import("react").ForwardRefExoticComponent<{
    height?: number;
    options: {
        value: string | number;
        label?: string;
        group?: string | number;
    }[];
    groups?: {
        value: string | number;
        label: string;
    }[];
    value: string | number | (string | number)[];
    onChange: (v: string | number | (string | number)[]) => void;
    visibleOptionCount?: number;
    arrowIcon?: typeof Icon | SVGSVGElement | HTMLImageElement;
    searchDisabled?: boolean;
    disabled?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & import("react").RefAttributes<HTMLDivElement>>;
export default ComboBox;
