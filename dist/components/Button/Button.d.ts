import { HTMLAttributes } from 'react';
import Icon from 'components/Icon';
export declare type ButtonProps = {
    className?: string;
    onClick: () => void;
    labelledBy?: string;
} & ({
    label: string;
    icon?: typeof Icon | SVGSVGElement | HTMLImageElement;
} | {
    label?: string;
    icon: typeof Icon | SVGSVGElement | HTMLImageElement;
}) & HTMLAttributes<HTMLButtonElement>;
declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
